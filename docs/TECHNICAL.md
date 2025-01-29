# 📚 KLORE Security - Documentação Técnica

## 🗂️ Estrutura do Projeto

```
src/
├── components/         # Componentes React reutilizáveis
│   ├── layout/        # Componentes de layout (Navbar, Footer)
│   ├── sections/      # Seções principais (BlogSection, HeroSection)
│   └── ui/            # Componentes de UI (Loading, SearchResults)
├── contexts/          # Contextos React (Loading, Search, Tag)
├── data/             # Dados estáticos e tipos
│   ├── types.ts      # Tipos TypeScript
│   └── authors.ts    # Configuração dos autores
├── posts/            # Arquivos markdown dos posts
├── pages/            # Componentes de página
├── hooks/            # Hooks personalizados
├── utils/            # Funções utilitárias
├── styles/           # Estilos globais e temas
└── config/           # Configurações do projeto
```

## 🔧 Principais Arquivos e Suas Funções

### 📁 Components

- `sections/BlogSection.tsx`: Grid responsivo de posts com sistema de tags
- `Navbar.tsx`: Barra de navegação com busca e menu mobile
- `Footer.tsx`: Rodapé com links sociais
- `PostCard.tsx`: Card individual de post com excerpt e informações do autor
- `PostInfo.tsx`: Componente de metadados do post (data, tempo de leitura, autor)

### 📁 Contexts

- `LoadingContext.tsx`: Gerencia estado de loading global
- `SearchContext.tsx`: Gerencia busca em tempo real
- `TagContext.tsx`: Gerencia filtragem por tags

### 📁 Pages

- `Home.tsx`: Página inicial com grid de posts
- `BlogPost.tsx`: Página individual de post com markdown renderizado
- `TagPosts.tsx`: Página de posts filtrados por tag

## 🎨 Estilização

### Cores Principais

```css
/* Cores do Tema */
--color-primary: #4ade80; /* Verde (text-green-400) */
--color-background: #000000; /* Preto (bg-black) */
--color-text: #f3f4f6; /* Cinza claro (text-gray-100) */
--color-accent: #1f2937; /* Cinza escuro (bg-gray-800) */

/* Gradientes e Transparências */
--gradient-overlay: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.9),
  rgba(0, 0, 0, 0.5),
  rgba(0, 0, 0, 0.2)
);
--backdrop-blur: backdrop-blur-sm;
--background-opacity: bg-black/40;
```

### Classes Utilitárias Comuns

```css
/* Cards */
.card-base: "bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden";
.card-hover: "hover:border-green-400/40 hover:scale-[1.02] transition-all duration-300";

/* Tipografia */
.title-base: "text-base sm:text-lg md:text-xl font-bold";
.text-base: "text-xs sm:text-sm text-gray-400";

/* Botões */
.button-base: "px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20";
.button-hover: "hover:border-green-400/40 transition-colors";
```

## 📝 Estrutura dos Posts

Os posts são arquivos markdown com frontmatter:

```markdown
---
title: "Título do Post"
excerpt: "Breve descrição do post"
image: "URL da imagem de capa"
tags: ["tag1", "tag2"]
author: "ID do autor"
date: "YYYY-MM-DD"
---

Conteúdo do post em markdown...
```

### Sistema de Autores

Configurado em `data/authors.ts`:

```typescript
export const authors = {
  lucas: {
    id: "lucas",
    name: "Lucas de Souza",
    role: "CEO",
    avatar: "URL do avatar",
    bio: "Descrição",
    social: {
      github: "URL",
      linkedin: "URL",
      website: "URL",
    },
  },
  // outros autores...
};
```

## 🔍 SEO e Meta Tags

Implementado em `BlogPost.tsx`:

```typescript
updateMetaTag("og:title", post.title);
updateMetaTag("og:description", post.excerpt);
updateMetaTag("og:image", post.image);
updateMetaTag("article:author", post.author.name);
updateMetaTag("article:published_time", post.date);
```

## ⚡ Performance

1. **Otimizações de Imagem**:

   - Uso de `object-cover` para manter proporções
   - Lazy loading com atributo loading="lazy"
   - Imagens responsivas com diferentes tamanhos

2. **Otimizações de Texto**:

   - `line-clamp-2` para excerpts
   - `truncate` para nomes longos
   - Tipografia responsiva com breakpoints

3. **Otimizações de Layout**:
   - Grid responsivo com breakpoints
   - Skeleton loading states
   - Paginação com "Mostrar Mais"

## 🔒 Segurança

1. **Sanitização**:

   - Markdown sanitizado antes do render
   - Links externos com `rel="noopener noreferrer"`
   - Validação de dados do frontmatter

2. **Boas Práticas**:
   - Sem exposição de dados sensíveis
   - HTTPS obrigatório
   - CSP headers configurados

## 🚀 Deploy

1. Build do projeto:

```bash
npm run build
# ou
yarn build
```

2. Variáveis de ambiente necessárias:

```env
VITE_APP_URL=URL_do_site
VITE_GA_ID=ID_do_Google_Analytics
```

## 📱 Responsividade

- Mobile First Design
- Breakpoints principais:
  - sm: 640px (Tablets e telas pequenas)
  - md: 768px (Tablets grandes)
  - lg: 1024px (Desktop)
  - xl: 1280px (Telas grandes)

## 🆘 Suporte

Para dúvidas técnicas ou contribuições:

1. Abra uma issue no GitHub
2. Siga o guia de contribuição
3. Mantenha o código limpo e documentado

## 📝 Criando Novos Posts

### 1. Estrutura do Arquivo

Crie um novo arquivo `.md` em `src/posts/` seguindo o padrão:

- Nome do arquivo: `nome-do-post.md` (use kebab-case)
- Exemplo: `pentest-internal-network.md`

### 2. Template Base

```markdown
---
title: "Título do Post"
excerpt: "Uma breve descrição do post em 1-2 frases"
image: "URL da imagem de capa"
tags: ["tag1", "tag2"]
author: "ID do autor"
date: "YYYY-MM-DD"
---

# Título Principal

Introdução do post...

## Subtítulo 1

Conteúdo...

## Subtítulo 2

Conteúdo...

### Exemplos de Formatação

- Lista de itens
- Com marcadores

1. Lista numerada
2. Com números

\`\`\`python

# Bloco de código

def exemplo():
return "Hello World"
\`\`\`

> Blockquote para citações

**Texto em negrito** e _texto em itálico_
```

### 3. Diretrizes de Conteúdo

1. **Imagens**:

   - Use imagens de alta qualidade (mínimo 1200x630px)
   - Hospede em CDN ou use URLs do Unsplash
   - Exemplo: `https://images.unsplash.com/photo-xxx?auto=format&fit=crop&q=80`

2. **Tags**:

   - Use tags existentes quando possível
   - Tags comuns: ["Security", "Pentest", "Hacking", "Tutorial"]
   - Máximo 4 tags por post

3. **Excerpt**:

   - 140-160 caracteres
   - Descrição clara e objetiva
   - Inclua palavras-chave relevantes

4. **Formatação Markdown**:

   ```markdown
   # H1 - Apenas um por post

   ## H2 - Seções principais

   ### H3 - Subseções

   #### H4 - Tópicos específicos
   ```

### 4. Exemplo Prático

```markdown
---
title: "Análise de Vulnerabilidades em Redes Internas"
excerpt: "Um guia completo sobre como realizar pentests em redes corporativas, identificando e explorando vulnerabilidades comuns"
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
tags: ["Pentest", "Network", "Security", "Tutorial"]
author: "lucas"
date: "2024-01-28"
---

# Análise de Vulnerabilidades em Redes Internas

Neste guia, vamos explorar as técnicas mais eficientes para realizar testes de penetração em redes corporativas...

## Preparação do Ambiente

Antes de começar, precisamos configurar algumas ferramentas essenciais...

## Fase de Reconhecimento

O primeiro passo é entender a estrutura da rede...

### Ferramentas Úteis

- Nmap para scanning
- Wireshark para análise de tráfego
- Metasploit para exploração

## Identificação de Vulnerabilidades

\`\`\`bash

# Exemplo de comando Nmap

nmap -sV -sC -p- 192.168.1.0/24
\`\`\`
```

### 5. Boas Práticas

1. **SEO**:

   - Use títulos descritivos
   - Inclua palavras-chave naturalmente
   - Estruture o conteúdo com headings (H1-H4)

2. **Imagens e Mídia**:

   - Adicione texto alternativo (alt)
   - Otimize imagens para web
   - Use exemplos visuais quando relevante

3. **Código**:

   - Use syntax highlighting
   - Comente códigos complexos
   - Forneça exemplos práticos

4. **Conteúdo**:
   - Mantenha um tom profissional
   - Revise ortografia e gramática
   - Atualize informações desatualizadas

### 6. Testando o Post

1. Execute o projeto localmente:

```bash
npm run dev
# ou
yarn dev
```

2. Verifique:
   - Formatação do markdown
   - Exibição das imagens
   - Links e referências
   - Responsividade do conteúdo

### 7. Publicação

1. Faça commit das alterações:

```bash
git add src/posts/nome-do-post.md
git commit -m "Add: novo post sobre análise de vulnerabilidades"
git push origin main
```

## 👥 Criando Novos Autores

### 1. Localização do Arquivo

O arquivo de configuração dos autores está em `src/data/authors.ts`

### 2. Estrutura do Autor

```typescript
export const authors = {
  // Adicione um novo autor seguindo este template
  seuID: {
    id: "seuID", // ID único do autor (usado nos posts)
    name: "Nome Completo", // Nome que aparecerá nos posts
    role: "Cargo/Função", // Ex: "Security Researcher", "Pentester"
    avatar: "URL do Avatar", // URL da imagem de perfil
    bio: "Breve biografia", // Descrição profissional
    social: {
      github: "https://github.com/seu-usuario",
      linkedin: "https://linkedin.com/in/seu-perfil",
      twitter: "https://twitter.com/seu-usuario", // Opcional
      website: "https://seu-site.com", // Opcional
    },
  },
};
```

### 3. Exemplo Prático

```typescript
export const authors = {
  // Autores existentes...

  alice: {
    id: "alice",
    name: "Alice Silva",
    role: "Red Team Engineer",
    avatar: "https://exemplo.com/avatar-alice.jpg",
    bio: "Especialista em Red Team com foco em Active Directory e Cloud Security",
    social: {
      github: "https://github.com/alicesilva",
      linkedin: "https://linkedin.com/in/alicesilva",
      twitter: "https://twitter.com/alicesilva_sec",
    },
  },
};
```

### 4. Diretrizes para Autores

1. **Avatar**:

   - Dimensões recomendadas: 400x400px
   - Formato: JPG ou PNG
   - Tamanho máximo: 200KB
   - Use CDN ou serviços de hospedagem confiáveis

2. **Bio**:

   - 100-150 caracteres
   - Foco em expertise profissional
   - Mencione especializações

3. **Links Sociais**:
   - Use URLs completas (com https://)
   - Verifique se os links estão ativos
   - Mantenha perfis profissionais atualizados

### 5. Boas Práticas

1. **IDs**:

   - Use lowercase
   - Evite caracteres especiais
   - Mantenha consistência com usernames

2. **Roles**:

   - Seja específico e profissional
   - Use títulos em inglês
   - Mantenha padrão com outros autores

3. **Imagens**:
   - Use fotos profissionais
   - Mantenha proporção 1:1
   - Otimize para web

### 6. Testando

1. Após adicionar novo autor:

```bash
# Verifique se a tipagem está correta
npm run type-check
# ou
yarn type-check
```

2. Teste em um post:

```markdown
---
author: "seuID" # Use o ID do novo autor
---
```

3. Verifique:
   - Avatar carregando corretamente
   - Links sociais funcionando
   - Informações exibidas corretamente nos posts

### 7. Atualizando Autores Existentes

1. Para atualizar informações:

```typescript
// Exemplo de atualização
export const authors = {
  existente: {
    ...authors.existente, // Mantém dados existentes
    role: "Novo Cargo", // Atualiza cargo
    bio: "Nova biografia", // Atualiza biografia
  },
};
```

2. Mantenha um histórico de alterações no commit:

```bash
git commit -m "Update: informações do autor [ID]"
```

## 🎨 Gerenciamento de Temas

A estrutura de temas está organizada da seguinte forma:

```
src/styles/themes/
├── index.ts           # Exporta os temas e tipos
├── dracula.css        # Tema Dracula
├── monokai-sublime.css # Tema Monokai Sublime
└── atom-one-dark.css   # Tema Atom One Dark
```

### Arquivos e Suas Funções

1. **index.ts**

   - Define os tipos dos temas disponíveis
   - Exporta o objeto `themes` com os nomes dos temas
   - Exemplo:

   ```typescript
   export type ThemeName = "dracula" | "monokaiSublime" | "atomOneDark";

   export const themes: Record<ThemeName, string> = {
     dracula: "dracula",
     monokaiSublime: "monokai-sublime",
     atomOneDark: "atom-one-dark",
   };
   ```

2. **[nome-do-tema].css**
   - Cada tema tem seu próprio arquivo CSS
   - Define as variáveis CSS específicas do tema
   - Exemplo (dracula.css):
   ```css
   .theme-dracula {
     --background: #282a36;
     --foreground: #f8f8f2;
     --selection: #44475a;
     --comment: #6272a4;
     /* ... o que mais voce precisar */
   }
   ```

### Alterando o Tema Padrão

Para alterar o tema padrão da aplicação, edite o arquivo `src/contexts/theme.types.ts`:

```typescript
import { ThemeName } from "../styles/themes";
export const defaultTheme: ThemeName = "dracula"; // Altere para: "monokaiSublime" ou "atomOneDark"
```

### Editando um Tema Existente

Para modificar um tema existente, edite o arquivo CSS correspondente em `src/styles/themes/`:

1. Localize o arquivo do tema (ex: `dracula.css`)
2. Modifique as variáveis CSS conforme necessário
3. Mantenha a consistência com outros temas

### Adicionando um Novo Tema

Para adicionar um novo tema:

1. Crie um novo arquivo CSS em `src/styles/themes/`:

   ```css
   /* meu-novo-tema.css */
   .theme-meu-novo-tema {
     --background: #seu-valor;
     --foreground: #seu-valor;
     /* ... outras variáveis CSS necessárias */
   }
   ```

2. Atualize o arquivo `index.ts`:

   ```typescript
   export type ThemeName =
     | "dracula"
     | "monokaiSublime"
     | "atomOneDark"
     | "meuNovoTema";

   export const themes: Record<ThemeName, string> = {
     dracula: "dracula",
     monokaiSublime: "monokai-sublime",
     atomOneDark: "atom-one-dark",
     meuNovoTema: "meu-novo-tema",
   };
   ```

# Como deixar um texto do markup colorido

1. Usando HTML Inline (Funciona na Maioria dos Blogs)

```html
<span style="color: red;">texto vermelho</span>
```
