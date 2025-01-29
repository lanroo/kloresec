import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { FSWatcher, watch } from "fs";

// Plugin para servir arquivos Markdown
function markdownPlugin() {
  let watcher: FSWatcher | null = null;

  return {
    name: "markdown-loader",
    configureServer(server) {
      const postsDir = path.join(process.cwd(), "src/posts");

      // Monitorar mudanças no diretório de posts
      watcher = watch(
        postsDir,
        { recursive: true },
        async (eventType, filename) => {
          if (filename && filename.endsWith(".md")) {
            console.log(`Arquivo modificado/criado: ${filename}`);

            // Forçar limpeza do cache
            const filePath = path.join(postsDir, filename);
            try {
              const stats = fs.statSync(filePath);
              console.log("Data de criação:", stats.birthtime);
              console.log("Data de modificação:", stats.mtime);
            } catch (error) {
              console.error("Erro ao ler estatísticas do arquivo:", error);
            }

            // Força o recarregamento dos clientes
            server.ws.send({
              type: "full-reload",
              path: "*",
            });
          }
        }
      );

      // Limpar o watcher quando o servidor for fechado
      server.httpServer?.on("close", () => {
        if (watcher) {
          watcher.close();
          watcher = null;
        }
      });

      server.middlewares.use(async (req, res, next) => {
        if (!req.url) {
          console.log("URL da requisição está vazia");
          next();
          return;
        }

        console.log("Requisição recebida:", req.url);

        if (req.url === "/posts/") {
          console.log("Listando posts...");
          try {
            if (!fs.existsSync(postsDir)) {
              console.error("Diretório de posts não encontrado:", postsDir);
              res.statusCode = 404;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Posts directory not found" }));
              return;
            }

            console.log("Diretório de posts encontrado:", postsDir);
            const files = fs
              .readdirSync(postsDir)
              .filter((file) => file.endsWith(".md"));
            console.log("Arquivos Markdown encontrados:", files);

            const posts = await Promise.all(
              files.map(async (file) => {
                try {
                  const filePath = path.join(postsDir, file);
                  const stats = fs.statSync(filePath);
                  const content = await fs.promises.readFile(filePath, "utf-8");
                  const slug = file.replace(/\.md$/, "");

                  console.log(`Arquivo: ${file}`);
                  console.log("Data de criação:", stats.birthtime);
                  console.log("Data de modificação:", stats.mtime);

                  return {
                    slug,
                    content,
                    created: stats.birthtime,
                    modified: stats.mtime,
                  };
                } catch (error) {
                  console.error(`Erro ao ler arquivo ${file}:`, error);
                  return null;
                }
              })
            );

            // Filtrar posts válidos e ordenar por data de criação
            const validPosts = posts
              .filter((post): post is NonNullable<typeof post> => post !== null)
              .sort((a, b) => b.created.getTime() - a.created.getTime());

            console.log("Total de posts válidos:", validPosts.length);
            console.log(
              "Posts ordenados:",
              validPosts.map((p) => ({
                slug: p.slug,
                created: p.created,
              }))
            );

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.setHeader(
              "Cache-Control",
              "no-store, no-cache, must-revalidate"
            );
            res.end(JSON.stringify(validPosts));
          } catch (error) {
            console.error("Erro ao carregar posts:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: "Failed to load posts",
                details: error.message,
              })
            );
          }
          return;
        }

        if (req.url.startsWith("/posts/") && req.url.endsWith(".md")) {
          console.log("Carregando post específico:", req.url);
          const filePath = path.join(process.cwd(), "src", req.url);
          try {
            if (!fs.existsSync(filePath)) {
              console.error("Arquivo não encontrado:", filePath);
              res.statusCode = 404;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Post not found" }));
              return;
            }

            const stats = fs.statSync(filePath);
            const content = await fs.promises.readFile(filePath, "utf-8");

            console.log("Data de criação:", stats.birthtime);
            console.log("Data de modificação:", stats.mtime);

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/markdown");
            res.setHeader(
              "Cache-Control",
              "no-store, no-cache, must-revalidate"
            );
            res.end(content);
          } catch (error) {
            console.error("Erro ao ler arquivo:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: "Failed to read post",
                details: error.message,
              })
            );
          }
          return;
        }

        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdownPlugin()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  publicDir: "public",
  server: {
    watch: {
      usePolling: true,
    },
  },
});
