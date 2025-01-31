---
title: "Ex de Post de Autores"
excerpt: "Este é um post de exemplo mostrando como usar o novo sistema de autores"
image: "/images/blog/testing-image.jpg"
tags: ["exemplo", "autores"]
author: "lucas"
date: "2024-01-11"
---

# Exemplo de Post com Novo Sistema de Autores

Este é um post de exemplo que demonstra como usar o novo sistema de autores. Agora, em vez de especificar todos os detalhes do autor no frontmatter do post, você só precisa informar o ID do autor.

## Como Funciona

No frontmatter do post, você só precisa adicionar:

```yaml
author: "lucas"
```

E o sistema automaticamente irá:

1. Buscar as informações do autor no arquivo `authors.ts`
2. Exibir o nome, avatar e função do autor
3. Incluir links para redes sociais (se disponíveis)

## Autores Disponíveis

Atualmente, temos os seguintes autores configurados:

- `lucas`: CEO e Pesquisador de Segurança
- `guest`: Autor convidado (usado como padrão quando nenhum autor é especificado)

## Vantagens do Novo Sistema

- Centralização das informações dos autores
- Facilidade de manutenção
- Consistência nas informações
- Possibilidade de adicionar mais detalhes como biografia e redes sociais
