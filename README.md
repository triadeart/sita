# Site — 59 Anos de Sita Madhu

Landing page da campanha **Yes! Diga SIM à Vida**, divulgando a celebração dos 59 anos da Sita Madhu (01/08), com programação, causa social (doação de alimentos não perecíveis) e CTA de confirmação via WhatsApp.

Site estático (HTML/CSS/JS puro, sem build) — pronto para deploy direto na Vercel a partir de um repositório GitHub.

## Estrutura

```
index.html      → todo o conteúdo e estrutura da página
css/style.css   → estilos (paleta e tipografia do manual de marca do IIUT)
js/script.js    → menu mobile, links de WhatsApp, animações de entrada
img/            → fotos da Sita e logo do IIUT
```

## Antes de publicar — checklist

- [ ] **Número de WhatsApp**: confirmar em `js/script.js` (`WHATSAPP_NUMBER`) se o número está no formato correto (DDD + 8 ou 9 dígitos). Atualmente: `556196935858` (a partir de +55 61 9693-5858).
- [ ] **Endereço no mapa**: a seção "Local" usa uma busca genérica por "Chácara Namastê, Coxipó do Ouro, Cuiabá" no Google Maps (`index.html`, `<section id="local">`). Se tiver o endereço exato ou um link do Google Maps do local, substitua a URL do `iframe` por ele para o pin ficar preciso.
- [ ] **Título/domínio**: ajustar `<title>` e metatags Open Graph em `index.html` se for usar um domínio próprio (ex: `sita59anos.com.br`).

## Deploy — GitHub + Vercel

1. Criar o repositório no GitHub (pode ser feito por aqui, com sua confirmação, via `gh repo create`, ou manualmente pelo site do GitHub).
2. Subir este código para o repositório (`git push`).
3. Em [vercel.com](https://vercel.com), clicar em **Add New → Project**, importar o repositório do GitHub.
4. Como é um site estático sem build, a Vercel detecta automaticamente — não precisa configurar build command nem output directory.
5. Deploy. A Vercel gera uma URL (`nome-do-projeto.vercel.app`); um domínio próprio pode ser adicionado depois em **Settings → Domains**.

Qualquer novo `git push` para a branch principal atualiza o site automaticamente.
