---
title: "Testing Auto Date Feature"
excerpt: "Testing the automatic date formatting feature in our blog system"
image: "/images/blog/testing-image.jpg"
tags: ["Testing", "Development"]
author: "lucas"
---

## Teste de Data Automática

Este post foi criado sem uma data específica no frontmatter para testar a geração automática de data e hora.

### O que estamos testando?

1. Geração automática de data
2. Formatação em português
3. Inclusão de hora e minutos
4. Ordenação correta na lista de posts

### Exemplo de Código

```javascript
const date = new Date();
console.log(
  date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);
```

## Conclusão

Se você está vendo este post com a data e hora atuais, o sistema está funcionando corretamente!
