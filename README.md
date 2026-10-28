# Rayssa Roberta · Portfolio

**English** · [Português](./README.pt-BR.md)

My portfolio as a frontend developer with a QA mindset: the projects I built, how I test them, and how to reach me.

**Live:** https://www.portfoliorayssarrsilva.site ([Português](https://www.portfoliorayssarrsilva.site/pt/))

[![CI](https://github.com/rayssarrsilva/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/rayssarrsilva/portfolio/actions/workflows/ci.yml)

## What is inside

- Home page in English and Portuguese, with the four projects I show to recruiters: Moringa, Ipê, DietGreen and Battleship.
- A "Hiring for?" switch: recruiters for frontend or QA roles see the part of each project that matters to them. A link like `/?for=qa` opens with that view already chosen.
- Case studies for [Moringa](https://www.portfoliorayssarrsilva.site/projects/moringa/) and [Ipê](https://www.portfoliorayssarrsilva.site/projects/ipe/).
- Certificates, and my resume as a PDF in each language.
- Light and dark theme that follows the system until the visitor chooses.

## Built with

Plain HTML, CSS and a few lines of JavaScript. No framework and no build step, on purpose: the page is small, and what it needs to show is the work in the other repositories.

- Semantic HTML, a skip link, visible focus and `aria-pressed` toggles that work with a keyboard and a screen reader.
- CSS custom properties for the two themes; text colors meet WCAG 2.2 AA contrast in both.
- SEO: `hreflang` between the two languages, canonical URLs, Open Graph images, a sitemap and `ProfilePage` structured data (JSON-LD).
- A Content Security Policy that only allows files from this site. Everything, including the font, is served from here.

## How it is checked

On every pull request, [GitHub Actions](./.github/workflows/ci.yml) runs:

| Check | Tool | Fails when |
| --- | --- | --- |
| HTML | [html-validate](https://html-validate.org) | any error |
| Internal links and anchors | [lychee](https://lychee.cli.rs) | any broken link |
| Performance, accessibility, best practices, SEO | [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), 4 pages × 3 runs | performance below 95, any other category below 100 |

External links are checked every Monday. Before release, every page was also tested with axe in both themes at 320px and 1280px, and with the keyboard.

## Run it locally

Any static server works. For example, with Python:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Structure

```
index.html              English home
pt/                     Portuguese pages
projects/               English case studies
certificates/           Certificates (English)
assets/css/site.css     All styles
assets/js/theme.js      Applies the saved theme before the first paint
assets/js/site.js       Theme toggle and the "Hiring for?" switch
assets/resume/          Resume PDFs
```

## Credits

- Headings use [Source Serif 4](https://github.com/adobe-fonts/source-serif) by Adobe, under the [SIL Open Font License](./assets/fonts/OFL.txt).

## Contact

rayssarrsilva1@gmail.com · [LinkedIn](https://www.linkedin.com/in/rayssa-r-14936622a/) · [GitHub](https://github.com/rayssarrsilva)

The text, photos and resume are mine; please do not reuse them.
