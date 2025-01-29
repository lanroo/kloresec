---
title: "Pentest"
excerpt: "Exploiting Misconfigured Services for Internal Network Access"
image: "/images/blog/testing-image.jpg"
tags: ["Pentest", "Exploitation", "Security"]
author: "lucas"
---

# Introduction

Pentesting internal networks requires a deep understanding of misconfigured services that can be leveraged for access. Attackers commonly exploit services running with weak authentication or excessive permissions.

Common Misconfigured Services.

```yaml
from ftplib import FTP

ftp = FTP('192.168.1.100')
ftp.login('anonymous', 'anonymous')
ftp.retrlines('LIST')
ftp.quit()
```

```
from ftplib import FTP

ftp = FTP('192.168.1.100')
ftp.login('anonymous', 'anonymous')
ftp.retrlines('LIST')  # Lista arquivos no diretório root
ftp.quit()

```

```python
def teste_automatico():
    print("Testando sistema de posts")
    return "Funcionando!"
```

```bash
ls -la
```

```javascript
console.log("Hello, World!");
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

---

## **Como Funciona o Destaque de Cores?**

1. O realce de sintaxe ocorre porque as linguagens são especificadas depois das três crases:

   - ` ```python ` → Código Python com cores.
   - ` ```bash ` → Comandos Bash coloridos.
   - ` ```yaml ` → Configuração YAML destacada.
   - ` ```javascript ` → Código JavaScript realçado.

2. **A renderização final depende do seu site**:
   - Se for **Jekyll**, use `rouge` ou `highlight.js` para estilos de cor.
   - Se for **MkDocs**, ele já faz o destaque automático.
   - Se for um blog **Next.js / React com MDX**, pode usar **Prism.js** para personalizar as cores.

```css
pre[class*="language-"] {
  background: #282c34;
  color: #abb2bf;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
}
```
