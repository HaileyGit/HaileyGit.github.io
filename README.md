# haileygit.github.io

Astro + Tailwind v4 + MDX 로 만든 개인 사이트.

## 구조

```
src/
├── content/          # MDX/MD 콘텐츠
│   ├── challenges/
│   ├── projects/
│   ├── work/
│   └── essays/
├── content.config.ts # 콘텐츠 컬렉션 스키마
├── layouts/
│   └── PageLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── challenges/{index,[...slug]}.astro
│   ├── projects/{index,[...slug]}.astro
│   ├── work/{index,[...slug]}.astro
│   └── essays/{index,[...slug]}.astro
└── styles/
    └── global.css    # Tailwind v4
```

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 빌드 산출물 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 콘텐츠 추가

`src/content/<category>/<slug>.md(x)` 파일 생성:

```md
---
title: '제목'
description: '설명 (선택)'
date: 2026-05-27
tags: ['html', 'css']
liveUrl: 'https://...'
repoUrl: 'https://...'
draft: false
---

본문...
```

스키마는 [src/content.config.ts](src/content.config.ts) 참고.

## 배포

main 푸시 → GitHub Actions 자동 빌드 → GitHub Pages publish.

## Credits

Design system adapted from [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)
by Mark Horn (MIT). Typeface: [Atkinson Hyperlegible](https://brailleinstitute.org/freefont)
by Braille Institute (OFL 1.1). Full license texts: [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).
