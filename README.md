# haileygit.github.io

Hailey의 개인 포트폴리오/허브 사이트. Astro + Tailwind v4 + MDX.

## 구조

```
src/
├── content/          # MDX/MD 콘텐츠 (각 카테고리)
│   ├── challenges/   # 노마드코더 챌린지 결과물
│   ├── projects/     # 사이드 프로젝트
│   ├── work/         # 실무 케이스 스터디
│   └── blog/         # 학습 노트, 잡문
├── content.config.ts # 콘텐츠 컬렉션 스키마
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro              # 홈 (4 카테고리 카드)
│   ├── about.astro
│   ├── challenges/{index,[...slug]}.astro
│   ├── projects/{index,[...slug]}.astro
│   ├── work/{index,[...slug]}.astro
│   └── blog/{index,[...slug]}.astro
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
source: 'nomadcoders'   # 챌린지 출처 (선택)
tags: ['html', 'css']
liveUrl: 'https://...'
repoUrl: 'https://...'
draft: false
---

본문...
```

스키마는 [src/content.config.ts](src/content.config.ts) 참고.

## 배포

GitHub Pages — `dist/` 빌드 결과를 `deploy` 브랜치 또는 GitHub Actions로 publish.

## 주의 (Public Repo)

이 repo는 user site (`*.github.io`) 라서 **무조건 public**. commit 되는 모든 게 인터넷에 노출됨.
- 작업 메모/대화 노트는 `2026-*/`, `**/raw.md`, `*.private.md` 패턴으로 [.gitignore](.gitignore)에서 차단되어 있음
- 진짜 비공개로 둘 건 이 repo 밖에 보관할 것
