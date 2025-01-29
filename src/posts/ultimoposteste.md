---
title: "Teste de markdown"
excerpt: "Arquivo para testar markdown"
image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80"
tags: ["oscp", "testing"]
author: "lucas"
---

# Exemplo de <span style="color: blue;">Markdown</span> para postagens

Este é um post de exemplo <span style="color: red;">esta parte está vermelha</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one

# Testes de markdown

Este texto está normal

**Este texto está em negrito**

**Este também está em negrito**

_Este texto está em itálico_

_Este também está em itálico_

**Este texto está em negrito e itálico**

**Este também está em negrito e itálico**

<u>Este texto está sublinhado</u>

<u>Este também está sublinhado</u>

<s>Este texto está riscado</s>

<s>Este também está riscado</s>

# Testando quotes

> Este é um exemplo de citação.
>
> Este é outro exemplo de citação.

## Exemplo de quote com bloco de código

> Lorem Ipsum is simply dummy text of the printing and typesetting industry. **Lorem** Ipsum has
> been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
> of type and scrambled it to make a type specimen book. It has survived not only five centuries,
> but also the leap into electronic typesetting, remaining essentially unchanged. It was
> **[popularised](#)** in the 1960s with the release of Letraset sheets containing **Lorem Ipsum** passages,
> and more recently with desktop publishing software like **[Aldus](#) PageMaker** including versions of
> **Lorem Ipsum**.

## Exemplo de bloco de código

```javascript
import { useContext } from "react";
import { LoadingContext } from "./LoadingContext";

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
```

# Testando links

[Google](https://www.google.com)

# Testando imagens

![Logo do Google](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

# Testando listas

- Item 1
- Item 2
- Item 3

# Testando tabelas

| Coluna 1 | Coluna 2 | Coluna 3 |
| -------- | -------- | -------- |
| Célula 1 | Célula 2 | Célula 3 |
| Célula 4 | Célula 5 | Célula 6 |
| Célula 7 | Célula 8 | Célula 9 |
