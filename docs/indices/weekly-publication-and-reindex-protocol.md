# Weekly Publication and Reindex Protocol

Статус: operational publication protocol v1.

## Purpose

Этот протокол переводит индексы ASAIAS из документного состояния в регулярную публичную практику.

## Weekly Order

1. Freeze the release date.
2. Refresh official source set.
3. Update `AGFLI`, `AGESI`, `AGASI`, `AGGRI`, `AGSVI`, and `AGELI`.
4. Refresh the weekly archive pages.
5. Refresh the public universe expansion bulletin when the tracked universe changes.
6. Refresh `site/sitemap.xml`.
7. Publish the site to `gh-pages`.
8. Submit updated URLs through `IndexNow`.
9. Verify live URLs and log the release.

## Working Scripts

- `scripts/publish-site-gh-pages.ps1`
- `scripts/submit-indexnow.ps1`
- `scripts/publish-site-now.ps1`

## Publishing Rule

Каждый weekly release может считаться operationally published only if:

- the public GitHub Pages URL responds with HTTP `200`;
- the target weekly pages are reachable from the public site;
- `robots.txt` and `sitemap.xml` are accessible;
- `IndexNow` submission is accepted or queued.

## Date Integrity Rule

Нельзя называть выпуск `Week 02`, `Week 03` и далее, если календарная weekly дата еще не наступила. Если на одной и той же дате запускаются новые индексы, они публикуются как `Week 01` для своего семейства, а не как искусственно ускоренная неделя.
