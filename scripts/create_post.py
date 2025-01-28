#!/usr/bin/env python3
import os
from datetime import datetime
import re

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text).strip('-')
    return text

def create_new_post():
    # Lê o template
    with open('content/posts/template.md', 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Solicita informações do usuário
    title = input("Digite o título do post: ")
    image_url = input("Digite a URL da imagem de capa: ")
    tags = input("Digite as tags separadas por vírgula: ").split(',')
    tags = [tag.strip() for tag in tags]
    excerpt = input("Digite uma breve descrição do post: ")
    
    # Gera o slug a partir do título
    slug = slugify(title)
    
    # Gera a data atual no formato "Feb 15, 2024"
    current_date = datetime.now().strftime("%b %d, %Y")
    
    # Substitui os placeholders no template
    content = template.replace("TÍTULO DO POST AQUI", title)
    content = content.replace("url-do-post-aqui", slug)
    content = content.replace("AUTO_GENERATED", current_date)
    content = content.replace("URL_DA_IMAGEM_AQUI", image_url)
    content = content.replace("Tag1\n  - Tag2\n  - Tag3", '\n  - '.join(tags))
    content = content.replace("Breve descrição do post aqui...", excerpt)
    
    # Cria o novo arquivo
    filename = f"content/posts/{slug}.md"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\nPost criado com sucesso em: {filename}")
    print("Agora você pode editar o arquivo e adicionar o conteúdo do post!")

if __name__ == "__main__":
    create_new_post() 