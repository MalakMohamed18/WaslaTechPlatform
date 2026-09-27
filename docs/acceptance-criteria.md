# Wasla Tech Platform — Core User Journeys Acceptance Criteria

> **Document:** `docs/acceptance-criteria.md`  
> **Version:** Draft v1 — for team review  
> **Sprint:** Sprint 0 — Foundation & Planning  
> **Owner:** Malak (Team Lead)  
> **Related documents:** `docs/roadmap.md`, `docs/architecture.md`

---

## 1. Purpose

This document defines testable acceptance criteria for three core Wasla Tech Platform user journeys:

1. Publish a portfolio project through the CMS and display it on the public Portfolio.
2. Search approved research sources and view source-backed results.
3. Upload and process a document, then ask a question grounded in its extracted content.

These criteria describe expected product behavior. Implementation details such as exact API paths, database tables, queue technology, and AI provider remain subject to the architecture decisions documented in `docs/architecture.md`.

## 2. Shared Definitions

- **CMS user:** An authenticated user with a role and permissions allowing the requested content action.
- **Published project:** A portfolio project whose publication status is published and which is otherwise eligible for public display.
- **Approved source:** A research source included in the platform's approved source registry.
- **Processed document:** A document whose processing completed successfully and whose extracted content is available to the retrieval workflow.
- **Citation:** Source metadata sufficient for the user to identify and open the material supporting an answer, subject to source availability.

## 3. Journey A — Publish a Portfolio Project Through CMS

### A1. Create and save a project draft

**Given**
- The CMS user is authenticated.
- The user has permission to create portfolio projects.

**When**
- The user opens the portfolio management area.
- The user enters the required project information and saves the project as a draft.

**Then**
- The system validates required fields and field formats.
- The project is saved with draft/unpublished status.
- The CMS confirms that the draft was saved.
- The project is available to authorized CMS users for further editing.
- The project does not appear in public portfolio listings or public project-detail pages.

### A2. Reject invalid project data

**Given**
- The CMS user is creating or editing a project.

**When**
- The user submits missing required fields or invalid values, such as an invalid slug or malformed URL where URL validation applies.

**Then**
- The system does not publish or save invalid data as a valid project record.
- The user receives a clear validation message identifying the field(s) that need correction.
- Previously saved valid data is not silently lost.

### A3. Publish a valid project

**Given**
- A project draft exists.
- The CMS user has permission to publish portfolio projects.
- Required project fields are valid.

**When**
- The user selects Publish and confirms the action if confirmation is part of the UI.

**Then**
- The project publication status changes to published.
- The CMS shows the updated publication state.
- The published project becomes available through the public portfolio API.
- The project appears in the public portfolio listing according to its display order and featured settings.
- Its public detail page can be opened using its slug.
- Public responses do not expose internal CMS fields or unpublished content.

### A4. Enforce permissions for project publishing

**Given**
- A user is unauthenticated or has a role without publish permission.

**When**
- The user attempts to create, edit, delete, or publish a project through the UI or by calling the protected operation directly.

**Then**
- The operation is denied by the backend.
- No unauthorized data change occurs.
- The user receives an appropriate authentication or permission error.
- Hiding a button in the UI is not considered sufficient authorization.

### A5. Update or unpublish a project

**Given**
- A published project exists.
- The CMS user has the relevant edit or publish permission.

**When**
- The user updates the project and saves, or changes its publication status to unpublished.

**Then**
- Authorized updates are persisted and reflected on the public page after the platform's agreed refresh/cache behavior.
- An unpublished project is removed from public listings and public detail access.
- The CMS retains the project for authorized editing unless the user explicitly deletes it.

### A6. Public visitor opens a project

**Given**
- A project is published and has a valid slug.

**When**
- A visitor opens the portfolio listing or the project's detail URL.

**Then**
- The project is displayed with its public fields, including title, summary, category, technologies, cover/gallery media where available, and approved links.
- A missing or unpublished project does not reveal draft content and returns the agreed not-found behavior.

## 4. Journey B — Search Approved Research Sources

### B1. Submit a source search

**Given**
- The research assistant is available.
- The source registry contains approved sources and the required source integrations are configured.

**When**
- The user enters a search query and submits it.

**Then**
- The system validates that the query is not empty and meets agreed input limits.
- The search workflow queries the configured approved sources.
- The UI displays results with available metadata such as title, authors, publication date, source, abstract/snippet, and source link.
- The UI communicates loading, empty-result, and error states clearly.

### B2. Show source identity and links

**Given**
- Search results are returned.

**When**
- The results are displayed.

**Then**
- Each result identifies its source and provides a link or supported action to view the original record.
- Available bibliographic metadata is preserved accurately.
- The system does not invent missing authors, dates, titles, or source links.

### B3. Handle no results

**Given**
- The user submits a valid query that returns no matching records from the configured sources.

**When**
- The search completes.

**Then**
- The UI displays a clear no-results message.
- The user can revise the query and search again.
- The system does not present fabricated results.

### B4. Handle source integration failure

**Given**
- One or more configured source services are unavailable, rate-limited, or return an error.

**When**
- The user performs a search.

**Then**
- The system reports the search limitation without presenting failed-source results as successful.
- If partial results are available, the UI identifies that the result set may be partial.
- The failure is logged with appropriate operational details, without exposing secrets to the user.

### B5. Preserve search context

**Given**
- The user has received a search result list.

**When**
- The user opens a result or proceeds to ask a question about selected material, if that feature is available.

**Then**
- The selected source's stable identifier and available citation metadata are retained for the next step.
- The system does not confuse metadata from different results.

## 5. Journey C — Upload and Process a Document, Then Ask a Question

### C1. Upload an allowed document

**Given**
- The user is authenticated and authorized to upload a document.
- The file type and size satisfy the platform's configured upload rules.

**When**
- The user selects and uploads the document.

**Then**
- The API validates authorization, file type, size, and applicable upload constraints.
- The document is stored in the approved storage location.
- A document record and processing job are created.
- The UI shows that the document was accepted and provides its processing status.
- The user does not have to keep the upload request open while background processing runs.

### C2. Reject an unsupported or invalid upload

**Given**
- The user selects a file that is unsupported, exceeds the configured size limit, or fails validation.

**When**
- The user attempts to upload it.

**Then**
- The upload is rejected with a clear, actionable message.
- No successful processing job is created for the rejected file.
- The system does not trust the filename extension alone to determine file safety/type.

### C3. Display processing status

**Given**
- A document upload was accepted and a processing job exists.

**When**
- The user views the document in the application.

**Then**
- The UI displays an agreed status such as `queued`, `processing`, `completed`, or `failed`.
- Status changes are reflected without requiring the user to re-upload the document.
- A failed job displays a useful, non-sensitive error message and does not appear completed.

### C4. Extract and store document content

**Given**
- A document is queued for processing and can be accessed by the worker.

**When**
- The worker processes the document successfully.

**Then**
- The system extracts usable text and relevant metadata according to supported document capabilities.
- Extracted content is associated with the correct document record.
- The processing status changes to completed only after the required processing steps succeed.
- The content becomes available to the retrieval workflow.
- Processing failures are recorded and can be investigated without exposing private content in ordinary logs.

### C5. Ask a question about a processed document

**Given**
- The document has completed processing.
- Its extracted content is available to retrieval.
- The user has permission to access the document.

**When**
- The user submits a question about the document.

**Then**
- The system retrieves relevant content from that document before generating the answer.
- The response is grounded in retrieved content.
- The response includes citations or references to the document and relevant locations when the extraction pipeline supports them.
- The system does not claim that a statement is supported by the document when no supporting passage was retrieved.

### C6. Handle questions when evidence is insufficient

**Given**
- The user asks a question for which the document contains no relevant evidence, or retrieval returns insufficient evidence.

**When**
- The assistant generates its response.

**Then**
- The assistant clearly states that the available document content does not provide enough evidence to answer.
- It does not fabricate document facts or citations.
- It may identify what information is missing, without presenting speculation as a sourced answer.

### C7. Enforce document access

**Given**
- A user does not have permission to access a document.

**When**
- The user attempts to view its status, extracted content, or ask questions using it.

**Then**
- The backend denies access.
- No document content or metadata restricted to that user is disclosed.
- The access rule is enforced server-side, not only by hiding UI elements.

## 6. Cross-Journey Quality and Security Criteria

- [ ] Protected CMS and document operations enforce authentication and authorization on the backend.
- [ ] Public endpoints expose published public content only.
- [ ] API inputs are validated and errors use a consistent response format.
- [ ] Secrets and privileged credentials are never exposed to browser code or committed to Git.
- [ ] Long-running document processing is asynchronous and exposes processing status.
- [ ] AI answers based on sources or documents include traceable citations when evidence is available.
- [ ] The system clearly communicates loading, success, empty, partial, and failure states.
- [ ] Relevant actions and failures are logged without recording passwords, tokens, or unnecessary private content.
- [ ] Tests cover successful flows, validation failures, permission failures, empty results, and processing/search errors.

## 7. Open Decisions to Confirm

The following details are not fixed by these acceptance criteria and should be agreed during implementation:
- Exact required fields and validation limits for portfolio projects.
- Exact CMS role-to-permission matrix.
- Public API caching and refresh behavior after publish/unpublish.
- Search source API coverage, query limits, and partial-result behavior.
- Supported document formats, maximum file size, retention, and ownership/access rules.
- Whether citations to documents can include page numbers, section headings, or chunk references.
- AI answer behavior and evaluation thresholds for insufficient evidence.
- Exact status refresh mechanism and retry behavior for failed document jobs.

## 8. Definition of Done — Task S0-04

- [ ] All three core user journeys are documented.
- [ ] Each journey includes success behavior and relevant failure/permission cases.
- [ ] Criteria are testable and avoid depending on unconfirmed implementation details.
- [ ] Criteria align with `docs/roadmap.md` and `docs/architecture.md`.
- [ ] Malak reviews the criteria with the relevant module owners: Yasmin, Nour, Rodina, Mariam, Nadia, Rahma, and Alaa as applicable.
- [ ] The team identifies test cases needed for Sprint 1 and later implementation sprints.
- [ ] Save this document as `docs/acceptance-criteria.md`.
