# Wiki Schema

## Domain
개인 지식 위키. 연구, 아이디어, 프로젝트, 인물, 조직, 제품, 개념, 비교 분석, 장기적으로 재사용할 질의 결과를 Karpathy식 LLM Wiki 패턴으로 축적한다.

## Conventions
- File names: lowercase, hyphens, no spaces, e.g. `transformer-architecture.md`.
- Every wiki page starts with YAML frontmatter.
- Use `[[wikilinks]]` to link related pages; aim for at least 2 outbound links per non-index page.
- When updating a page, bump the `updated` date.
- Every new page must be added to `index.md` under the correct section.
- Every wiki action must be appended to `log.md`.
- Keep `raw/` immutable. Corrections and synthesis go in wiki pages, not raw sources.
- If a synthesized paragraph depends on a specific raw source, add a provenance marker like `^[raw/articles/source-file.md]`.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
confidence: high | medium | low
contested: false
contradictions: []
---
```

## Raw Source Frontmatter
Raw sources should include:

```yaml
---
source_url: https://example.com/article
ingested: YYYY-MM-DD
sha256: <hex digest of body only>
---
```

## Tag Taxonomy
Add new tags here before using them.

### People / Organizations
- person
- company
- lab
- community

### Knowledge Areas
- ai
- machine-learning
- llm
- software
- product
- business
- writing
- philosophy
- learning

### Content Types
- concept
- entity
- comparison
- query
- summary
- source
- timeline
- controversy
- prediction

### Workflows
- project
- idea
- decision
- reference

## Page Thresholds
- Create a page when an entity or concept appears in 2+ sources or is central to one important source.
- Add to an existing page when a source mentions something already covered.
- Do not create pages for passing mentions, minor details, or things outside the domain.
- Split pages over ~200 lines into sub-topics with cross-links.
- Archive superseded pages under `_archive/` and remove them from `index.md`.

## Entity Pages
One page per notable entity. Include:
- Overview / what it is
- Key facts and dates
- Relationships to other entities via `[[wikilinks]]`
- Source references

## Concept Pages
One page per concept or topic. Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts via `[[wikilinks]]`

## Comparison Pages
Side-by-side analyses. Include:
- What is being compared and why
- Dimensions of comparison, preferably as a table
- Verdict or synthesis
- Sources

## Query Pages
Filed answers worth keeping. Include:
- Original question
- Short answer
- Evidence / relevant pages
- Follow-up questions

## Update Policy
When new information conflicts with existing content:
1. Check dates; newer sources often supersede older ones.
2. If genuinely contradictory, record both positions with dates and sources.
3. Mark the page with `contested: true` and list related pages in `contradictions:`.
4. Flag it for user review in the next lint report.
