# Rayssa Roberta · Portfólio

[English](./README.md) · **Português**

Meu portfólio como desenvolvedora frontend com foco em qualidade: os projetos que construí, como testo cada um e como falar comigo.

**No ar:** https://www.portfoliorayssarrsilva.site/pt/ ([English](https://www.portfoliorayssarrsilva.site))

[![CI](https://github.com/rayssarrsilva/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/rayssarrsilva/portfolio/actions/workflows/ci.yml)

## O que tem aqui

- Página inicial em português e inglês, com os quatro projetos que mostro para recrutadores: Moringa, Ipê, DietGreen e Batalha Naval.
- Um seletor "Contratando para?": quem recruta para frontend ou QA vê a parte de cada projeto que importa para a vaga. Um link como `/pt/?for=qa` já abre com essa visão escolhida.
- Estudos de caso do [Moringa](https://www.portfoliorayssarrsilva.site/pt/projetos/moringa/) e do [Ipê](https://www.portfoliorayssarrsilva.site/pt/projetos/ipe/).
- Certificados e o currículo em PDF em cada idioma.
- Tema claro e escuro, que segue o sistema até a pessoa escolher.

## Feito com

HTML, CSS e poucas linhas de JavaScript. Sem framework e sem etapa de build, de propósito: a página é pequena, e o que ela precisa mostrar é o trabalho nos outros repositórios.

- HTML semântico, link para pular ao conteúdo, foco visível e botões com `aria-pressed` que funcionam no teclado e com leitor de tela.
- Variáveis CSS para os dois temas; as cores de texto atendem ao contraste AA da WCAG 2.2 nos dois.
- SEO: `hreflang` entre os idiomas, URLs canônicas, imagens Open Graph, sitemap e dados estruturados `ProfilePage` (JSON-LD).
- Content Security Policy que só permite arquivos deste próprio site. Tudo, inclusive a fonte, é servido daqui.

## Como é verificado

Em todo pull request, o [GitHub Actions](./.github/workflows/ci.yml) roda:

| Verificação | Ferramenta | Falha quando |
| --- | --- | --- |
| HTML | [html-validate](https://html-validate.org) | qualquer erro |
| Links internos e âncoras | [lychee](https://lychee.cli.rs) | qualquer link quebrado |
| Performance, acessibilidade, boas práticas, SEO | [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), 4 páginas × 3 execuções | performance abaixo de 95, qualquer outra categoria abaixo de 100 |

Os links externos são conferidos toda segunda-feira. Antes de publicar, cada página também foi testada com o axe nos dois temas, em 320px e 1280px, e pelo teclado.

## Rodar localmente

Qualquer servidor estático serve. Por exemplo, com Python:

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## Créditos

- Os títulos usam a [Source Serif 4](https://github.com/adobe-fonts/source-serif), da Adobe, sob a [SIL Open Font License](./assets/fonts/OFL.txt).

## Contato

rayssarrsilva1@gmail.com · [LinkedIn](https://www.linkedin.com/in/rayssa-r-14936622a/) · [GitHub](https://github.com/rayssarrsilva)

Os textos, as fotos e o currículo são meus; por favor, não reutilize.
