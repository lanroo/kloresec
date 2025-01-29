---
title: "My OSCP Journey: Tips and Experiences"
excerpt: "Personal experience and tips for passing the OSCP certification exam"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
tags: ["OSCP", "Certification", "Penetration Testing"]
author: "lucas"
---

# Minha Jornada OSCP: Do Zero à Certificação

A certificação Offensive Security Certified Professional (OSCP) é considerada uma das mais respeitadas na área de segurança da informação. Neste post, compartilho minha experiência completa, desde a preparação até a conquista da certificação.

## Preparação

### Pré-requisitos

- Conhecimento sólido em redes
- Familiaridade com Linux e Windows
- Básico de programação
- Persistência e dedicação

### Recursos Utilizados

- Plataforma TryHackMe
- HackTheBox
- VulnHub
- Material oficial do OffSec

## O Exame

O exame OSCP é conhecido por sua intensidade: 24 horas para comprometer múltiplos sistemas, seguidas por 24 horas para elaboração do relatório.

### Dicas Importantes

1. Mantenha notas organizadas
2. Pratique elaboração de relatórios
3. Gerencie bem o tempo
4. Faça pausas estratégicas

## Código de Exemplo

\`\`\`python
def port_scan(target):
for port in range(1, 1024):
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.settimeout(1)
result = sock.connect_ex((target, port))
if result == 0:
print(f"Port {port}: Open")
sock.close()
\`\`\`

## Conclusão

A jornada OSCP é desafiadora mas extremamente gratificante. O mais importante é manter a persistência e aprender com cada desafio encontrado no caminho.
