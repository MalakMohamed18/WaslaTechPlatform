# Wasla Tech Platform — Project Roadmap & Module Ownership

> **Document status:** Draft v1 — for team review  
> **Project stack:** React.js + Node.js + Supabase  
> **Team Lead:** Malak

## 1. Project Modules and Ownership

| Module | Primary owner(s) | Supporting team |
|---|---|---|
| Public Website | Yasmin | Rem (UX/UI), Malak (integration/review) |
| Portfolio | Yasmin | Rem (UX/UI), Alaa (sample data/content), Nour (API/database), Malak (integration) |
| Dashboard / CMS | Nour (backend); Rahma (UX/UI) | Yasmin and Mariam (frontend, split by page); Malak (integration/review) |
| AI Research Assistant | Rodina (AI); Mariam (frontend) | Nadia (AI QA), Nour (API/data), Rahma (UX), Alaa (sources/data) |
| Backend & Database | Nour | Malak (architecture/review) |
| Document Processing | Nour (integration/storage); Rodina (AI requirements) | Mariam (UI), Nadia (QA), Alaa (test documents/data) |

### Team responsibilities

- **Malak — Team Lead / Fullstack:** coordinate delivery, maintain roadmap and task board, align architecture, distribute work, review pull requests, and handle critical integration work.
- **Rem — UI/UX + Research:** public website and portfolio research, information architecture, wireframes, and interface design.
- **Rahma — UI/UX + Research:** dashboard/CMS and AI research experience, user flows, wireframes, and usability requirements.
- **Yasmin — Frontend:** public website and portfolio implementation; support dashboard frontend where assigned.
- **Mariam — Frontend + AI:** AI assistant frontend and integration; support dashboard/document-processing UI where assigned.
- **Nour — Fullstack + Database:** backend APIs, database schema, authentication, authorization, storage integration, and data security.
- **Rodina — AI:** source retrieval, RAG pipeline, citations, AI processing design, and evaluation.
- **Nadia — AI QA:** test datasets, prompt/response tests, and AI quality assurance.
- **Alaa — Research:** content requirements, sample portfolio data, source registry, and research-data quality checks.

## 2. Module Scope and Core Features

### A. Public Website
- Homepage sections: Hero, About, Vision, Featured Products, Statistics, Team, News/Articles, Partners, Contact.
- Responsive layouts and reusable UI components.
- Public pages consume published content through the backend API.

### B. Portfolio
- Portfolio listing and individual project detail pages.
- Project fields: title, slug, summary, problem, solution, technologies, category, status, cover image, gallery, demo/repository links, team, featured flag, display order, and publication status.
- CMS-managed project content; public visitors only see published projects.

### C. Dashboard / CMS
- Manage company information and homepage sections.
- Manage news/articles, team members, testimonials, partners, media library, and portfolio projects.
- User roles: `owner`, `admin`, `content_editor`, `author`, `designer`, `viewer`.
- Validate permissions for every protected operation.

### D. AI Research Assistant
- Search approved academic/research sources.
- Ground answers in retrieved material and show citations.
- Proposed sources: arXiv, Semantic Scholar, CORE, DOAJ, and PubMed Central open access.
- Proposed flow: Search → Retrieval → Extraction → Translation → Template Building → Storage → Display.

### E. Backend & Database
- Node.js API for website and dashboard operations.
- Supabase Postgres, Auth, and Storage integration.
- Authentication, role checks, validation, and database access policies.
- Keep privileged keys and secrets on the server only.

### F. Document Processing
- Accept supported documents such as PDFs and extract usable text; inspect images/figures where needed.
- Track processing status and errors.
- Use background jobs for expensive processing rather than holding open a user request.
- Store extracted content and processing metadata for later retrieval.

## 3. Proposed Delivery Roadmap

| Stage | Focus | Main outcome |
|---|---|---|
| Sprint 0 | Foundation & Planning | Architecture, ownership, UX research, ERD, API contracts, Git workflow, acceptance criteria |
| Sprint 1 | Core Backend & Database | Supabase setup, schema, auth/roles, initial APIs, security policies |
| Sprint 2 | Public Website & Portfolio | Public pages and portfolio connected to published content APIs |
| Sprint 3 | Dashboard & CMS | Content management flows and role-protected operations |
| Sprint 4 | Research Search | Source registry and search/retrieval foundation |
| Sprint 5 | Document Processing | Upload, processing status, extraction, and stored document content |
| Sprint 6 | RAG & Citations | Retrieval-grounded responses with source citations |
| Sprints 7–8 | AI UX, QA & Release | Integrated user experience, testing, fixes, deployment readiness |

> Sprint durations and exact release dates are to be agreed by the team after estimating the backlog.

## 4. Dependencies

| Work item | Depends on |
|---|---|
| Public website implementation | Information architecture, wireframes, content requirements, public API contracts |
| Portfolio implementation | Portfolio UX, project data model, sample content, media/storage approach |
| Dashboard implementation | CMS user flows, role model, database schema, API contracts |
| AI research interface | AI UX flows, search/API response contract, citation format |
| AI retrieval and citations | Source registry, retrieval design, evaluation questions, document/source data model |
| Document processing | Upload/storage design, document metadata schema, extraction requirements, test documents |
| End-to-end integration | Agreed API contracts, Git workflow, environment configuration, acceptance criteria |

## 5. Sprint 0 Backlog

Statuses below are initial planning statuses and should be updated in the team task board.

| ID | Task | Owner | Priority | Initial status |
|---|---|---|---|---|
| S0-01 | Project Roadmap & Module Ownership | Malak | High | In Progress |
| S0-02 | Architecture Overview | Malak | High | Not Started |
| S0-03 | Git Workflow & Collaboration Rules | Malak | High | Not Started |
| S0-04 | Core User Journeys Acceptance Criteria | Malak | High | Not Started |
| S0-05 | Website & Portfolio Research | Rem | High | Not Started |
| S0-06 | Website Information Architecture | Rem | High | Not Started |
| S0-07 | Homepage & Portfolio Wireframes | Rem | High | Not Started |
| S0-08 | Dashboard/CMS Research | Rahma | High | Not Started |
| S0-09 | Dashboard User Flows | Rahma | High | Not Started |
| S0-10 | Dashboard Wireframes | Rahma | High | Not Started |
| S0-11 | React Frontend Structure | Yasmin | High | Not Started |
| S0-12 | Shared UI Components Plan | Yasmin | Medium | Not Started |
| S0-13 | AI Frontend Requirements | Mariam | High | Not Started |
| S0-14 | AI Frontend Structure | Mariam | Medium | Not Started |
| S0-15 | Database ERD | Nour | High | Not Started |
| S0-16 | Supabase Setup Plan | Nour | High | Not Started |
| S0-17 | Core CMS API Contracts | Nour | High | Not Started |
| S0-18 | Database Security & Permissions Plan | Nour | High | Not Started |
| S0-19 | AI Pipeline Design | Rodina | High | Not Started |
| S0-20 | Retrieval & RAG Requirements | Rodina | High | Not Started |
| S0-21 | AI Evaluation Plan | Rodina | Medium | Not Started |
| S0-22 | AI Test Questions Dataset | Nadia | Medium | Not Started |
| S0-23 | AI Test Case Template | Nadia | Medium | Not Started |
| S0-24 | Website Content Requirements | Alaa | High | Not Started |
| S0-25 | Sample Portfolio Data | Alaa | High | Not Started |
| S0-26 | Research Sources Registry | Alaa | Medium | Not Started |

## 6. Definition of Done — Task S0-01

- [ ] All project modules are listed.
- [ ] Each module has a primary owner and supporting roles.
- [ ] Core features and scope are documented.
- [ ] Priorities and dependencies are recorded.
- [ ] Sprint 0 backlog is created in the team's task board.
- [ ] Team reviews ownership and resolves overlaps.
- [ ] This document is saved as `docs/roadmap.md`.
