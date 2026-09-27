# Wasla Tech Platform — Git Workflow & Collaboration Rules

> **Document:** `docs/git-workflow.md`  
> **Version:** Draft v1 — for team review  
> **Team Lead:** Malak  
> **Project stack:** React.js + Node.js + Supabase

---

## 1. Purpose

This document defines how the Wasla Tech Platform team uses Git to collaborate safely across the public website, portfolio, dashboard/CMS, backend, AI research assistant, and document-processing modules.

These rules are intended to:
- Keep the shared codebase stable.
- Make work traceable to tasks and owners.
- Reduce merge conflicts and accidental changes.
- Ensure code is reviewed before integration.
- Protect secrets and sensitive data.
- Coordinate database and API changes across parallel work.

## 2. Repository Structure

The proposed repository layout follows `docs/architecture.md`:

```text
wasla-tech-platform/
├── apps/
│   ├── web/
│   ├── dashboard/
│   ├── api/
│   └── document-worker/
├── packages/
│   ├── shared/
│   ├── validation/
│   └── config/
├── docs/
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── ...
├── .gitignore
├── README.md
└── package.json
```

This structure assumes a monorepo. If the team later chooses separate repositories, preserve the same branch, review, commit, and security rules in each repository.

## 3. Branching Strategy

Use a lightweight feature-branch workflow.

| Branch | Purpose | Who can merge |
|---|---|---|
| `main` | Stable, reviewed code | Malak or delegated maintainer |
| `feat/<task-id>-short-name` | New feature or task implementation | Through approved PR |
| `fix/<task-id>-short-name` | Bug fix | Through approved PR |
| `docs/<task-id>-short-name` | Documentation-only change | Through approved PR |
| `refactor/<task-id>-short-name` | Refactoring without intended behavior change | Through approved PR |
| `chore/<task-id>-short-name` | Tooling, configuration, maintenance | Through approved PR |

Examples:
- `docs/S0-03-git-workflow`
- `feat/S1-12-portfolio-api`
- `fix/S2-08-project-card-layout`
- `refactor/S1-15-content-service`

### Branch rules
1. Do not commit directly to `main`.
2. Create each task branch from the latest `main`.
3. Keep branches focused on one task or closely related change.
4. Sync with `main` before requesting final review.
5. Delete merged branches after integration, unless they are intentionally maintained.

## 4. Commit Message Convention

Use a consistent, readable format:

```text
<type>(<scope>): <short description>
```

Allowed types:
- `feat` — new functionality
- `fix` — bug fix
- `docs` — documentation
- `refactor` — code restructuring without intended behavior change
- `test` — tests
- `chore` — tooling/configuration/maintenance
- `style` — formatting or styling changes that do not change behavior

Examples:
```text
docs(project): add architecture overview
feat(portfolio): add published projects endpoint
fix(dashboard): prevent unauthorized publish action
test(auth): cover editor role permissions
chore(repo): configure lint scripts
```

Commit guidance:
- Write messages in English and describe the change, not the act of saving it.
- Keep commits small enough to review.
- Avoid vague messages such as `update`, `changes`, or `final`.
- Do not include secrets, credentials, private user data, or real uploaded documents in commits.

## 5. Pull Request (PR) Workflow

1. Create a branch from the latest `main`.
2. Implement the task and run relevant checks locally.
3. Push the branch and open a PR targeting `main`.
4. Link the related task ID and summarize the change.
5. Complete the PR template checklist.
6. Request review from the relevant module owner and Malak when the change affects architecture, shared contracts, security, or multiple modules.
7. Resolve review comments and update the PR.
8. Merge only after required checks and approvals pass.
9. Delete the branch after merge.

### Review ownership guidance

| Change area | Suggested reviewer(s) |
|---|---|
| Public website / portfolio UI | Yasmin; Rem for UX/design alignment |
| Dashboard UX/UI | Rahma for flow/design; relevant frontend owner |
| API, database, auth, RLS, storage | Nour |
| AI retrieval, prompts, citations, evaluation | Rodina; Nadia for test coverage |
| Research sources/content data | Alaa; Rodina for AI integration |
| Shared architecture or cross-module integration | Malak plus affected module owner |
| Security-sensitive changes | Nour and Malak |

A reviewer checks correctness, clarity, security implications, tests, and consistency with agreed contracts. Approval is not a substitute for the author testing their work.

## 6. Minimum PR Requirements

A PR should:
- Reference a task ID, such as `S0-03` or the relevant sprint task.
- Explain what changed and why.
- Identify affected modules.
- Include screenshots or a short recording for visible UI changes, when useful.
- Include or update tests for behavior changes.
- Update documentation when APIs, setup steps, environment variables, schema, or workflows change.
- State any migration or deployment steps.
- Pass the agreed lint, type-check, test, and build checks that exist for the affected app.
- Have no unresolved review comments.
- Contain no secrets or unintended generated/build files.

## 7. Database Changes and Supabase Migrations

Database schema changes must be version-controlled and reviewable.

Rules:
1. Do not make undocumented schema changes directly in a shared environment.
2. Create a migration for each schema change using the team's selected Supabase migration workflow.
3. Include related indexes, constraints, policies, and seed/reference data changes where applicable.
4. Have Nour review database migrations and RLS policy changes.
5. Test migrations against a local or staging environment before production.
6. Document whether a migration is backward-compatible and whether it requires coordinated API/frontend changes.
7. Never put production data or secrets into migration files.
8. Prefer additive changes and a staged rollout when a change affects active clients.

Migration filename convention should follow the tool-generated timestamp format, with a short descriptive name, for example:

```text
<timestamp>_create_portfolio_projects.sql
<timestamp>_add_document_processing_status.sql
```

The exact command and migration directory will be confirmed when the Supabase project setup is finalized.

## 8. API and Shared Contract Changes

Because frontend, backend, AI, and document-processing work can proceed in parallel:

- Agree on request/response schemas before dependent implementation begins.
- Put shared TypeScript types and validation schemas in the agreed shared packages if TypeScript/monorepo are adopted.
- A PR that changes an API contract must identify affected consumers.
- Coordinate breaking changes with the owners of those consumers.
- Update API documentation/examples and tests in the same PR where practical.
- Do not silently change field names, response shapes, authorization requirements, or error formats.

## 9. Environment Variables and Secrets

- Commit `.env.example` with variable names and safe placeholder values only.
- Keep actual `.env` files out of Git.
- Add `.env`, `.env.*`, and local secret files to `.gitignore`, while explicitly allowing `.env.example`.
- Never commit Supabase service-role keys, database passwords, JWT secrets, AI provider keys, access tokens, or private credentials.
- Browser-exposed variables must be treated as public. Never place privileged credentials in React environment variables.
- If a secret is accidentally committed, notify Malak and Nour immediately, revoke/rotate it, remove it from active use, and follow the repository's secret-removal procedure. Deleting it in a later commit alone is not sufficient.

Example `.env.example`:

```dotenv
# Public client configuration (values are environment-specific)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# Server-only configuration — never expose to browser bundles
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
AI_PROVIDER_API_KEY=
```

Adjust variable names to the chosen build tooling. The service-role key and AI key are server/worker-only.

## 10. Generated Files, Uploads, and Ignore Rules

Do not commit:
- `node_modules/`
- build outputs such as `dist/`, `build/`, or framework caches
- local environment files and secrets
- logs, temporary files, editor/OS metadata
- real user-uploaded documents, private datasets, or production exports
- generated files unless the team explicitly decides they are required source artifacts

Commit lockfiles for the selected package manager so the team uses consistent dependency versions.

## 11. Definition of Done — Task S0-03

- [ ] Branch naming and protection rules are documented.
- [ ] Commit message convention is documented.
- [ ] PR process and review expectations are documented.
- [ ] Database migration and RLS review rules are documented.
- [ ] API/shared-contract change coordination is documented.
- [ ] Secret and environment-variable handling is documented.
- [ ] `.gitignore` and `.env.example` are reviewed and aligned with the chosen tooling.
- [ ] PR template is added at `.github/PULL_REQUEST_TEMPLATE.md`.
- [ ] Team reviews and approves the workflow.
- [ ] Save this document as `docs/git-workflow.md`.
