# 📚 KLORE Security - Documentação Técnica

## 🗂️ Estrutura do Projeto

```
src/
├── components/         # Componentes React reutilizáveis
│   ├── layout/        # Componentes de layout (Navbar, Footer)
│   └── ui/           # Componentes de UI (Loading, SearchResults)
├── contexts/          # Contextos React (Loading, Search, Tag)
├── data/             # Dados estáticos (posts, configurações)
├── pages/            # Componentes de página
└── config/           # Configurações do projeto
```

## 🔧 Principais Arquivos e Suas Funções

### 📁 Components

- `Navbar.tsx`: Barra de navegação com busca e menu mobile
- `Footer.tsx`: Rodapé com links sociais e créditos
- `Loading.tsx`: Animação de carregamento estilo terminal
- `SearchResults.tsx`: Resultados da busca em tempo real

### 📁 Contexts

- `LoadingContext.tsx`: Gerencia estado de loading global
- `SearchContext.tsx`: Gerencia busca em tempo real
- `TagContext.tsx`: Gerencia filtragem por tags

### 📁 Pages

- `Home.tsx`: Página inicial com lista de posts
- `BlogPost.tsx`: Página individual de post
- `About.tsx`: Página sobre
- `TagPosts.tsx`: Página de posts filtrados por tag

### ⚙️ Configurações

- `site.ts`: Configurações gerais do site (nome, URL, redes sociais)
- `types.ts`: Tipos TypeScript compartilhados

## 🎨 Estilização

- Cores principais:

  - Verde: `#4ade80` (text-green-400)
  - Preto: `#000000` (bg-black)
  - Cinza: `#f3f4f6` (text-gray-100)

- Classes Tailwind comuns:
  ```css
  .container /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  /* Container responsivo */
  .prose /* Estilização de conteúdo markdown */
  .animate-pulse; /* Animações */
  ```

## 📝 Modificando Conteúdo

### Posts

Para adicionar/editar posts, modifique `src/data/posts.ts`:

```typescript
{
  id: number,
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  image: string,
  date: string,
  readTime: string,
  author: {
    name: string,
    avatar: string,
    twitter?: string
  },
  tags: string[]
}
```

### Meta Tags

Para SEO e compartilhamento, edite em `BlogPost.tsx`:

```typescript
updateMetaTag("og:title", post.title);
updateMetaTag("og:description", post.excerpt);
updateMetaTag("og:image", post.image);
```

### Redes Sociais

Configure em `src/config/site.ts`:

```typescript
socials: {
  github: "url",
  linkedin: "url",
  twitter: "url"
}
```

## 🚀 Deploy

1. Build o projeto: `yarn build`
2. Configure as variáveis de ambiente
3. Deploy na Vercel ou similar

## ⚠️ Pontos de Atenção

1. **Performance**:

   - Otimize imagens antes de adicionar
   - Use lazy loading para imagens
   - Minimize imports desnecessários

2. **SEO**:

   - Mantenha meta tags atualizadas
   - Use URLs amigáveis nos slugs
   - Adicione descrições relevantes

3. **Segurança**:
   - Não exponha dados sensíveis
   - Use HTTPS
   - Mantenha dependências atualizadas

## 🆘 Suporte

Para dúvidas técnicas, me procure.
