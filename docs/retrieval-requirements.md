

# AI Research Assistant - Retrieval & RAG Requirements

This document defines the Retrieval-Augmented Generation (RAG) requirements, data structures, and API contracts for the AI Research Assistant, directly aligned with our approved `ai-pipeline.md` architecture.

---

## 1. Document-Level Data Requirements (البيانات المطلوبة لكل مستند)
Before chunking, each ingested document (PDF or Text) must register with the system containing the following baseline metadata:
- `document_id`: Unique system-generated identifier (UUID).
- `file_name`: Original name of the document file.
- `file_type`: Format type (e.g., `application/pdf`, `text/plain`).
- `upload_timestamp`: Timestamp when the document was ingested.
- `processing_end_timestamp`: Timestamp when document parsing and chunking completed successfully.
- `processing_status`: Current status of the ingestion pipeline (`pending`, `completed`, `failed`).
- `extraction_error_log`: Detailed error message and fallback handling logs if text/OCR extraction fails.
- `source_url`: Storage path or URL for source traceability.

---

## 2. Text Chunking Strategy & Arabic Text Handling (استراتيجية التقسيم والنصوص العربية)
Building upon our ingestion pipeline:
- **Initial Baseline Parameters (Subject to Evaluation):**
  - **Chunk Size:** Initial baseline of **500 to 1,000 characters** (marked as preliminary values requiring empirical evaluation and tuning).
  - **Chunk Overlap:** Initial baseline overlap of **10% to 15%** between consecutive chunks to prevent semantic boundary loss.
- **Structural Awareness:** Chunking logic explicitly handles natural paragraph breaks, document headings, and table structures without splitting semantic blocks awkwardly.
- **Arabic Text Optimization:** Considers Arabic linguistic structures (such as conjunctions, prefixes, and sentence boundaries) to ensure logical continuity during tokenization and splitting.
- **Processing Flow:** Seamlessly integrates native text extraction and fallback OCR as defined in Task 1.

---

## 3. Chunk Metadata Schema (البيانات الوصفية لكل Chunk)
Every individual chunk stored in the Vector Database must carry rigorous metadata for precise tracking:
- `document_id`: Links the chunk back to its parent document.
- `chunk_id`: Unique identifier for the specific chunk segment.
- `page_number`: Origin page number (for structured PDFs). If page numbers are missing or unreliable, the system falls back to `section_title` or `paragraph_index` to guarantee traceability.
- `source_url`: Direct link or file reference for user validation.
- `token_count`: Estimated token size for LLM context window optimization.

---

## 4. Citation Requirements & Data Structure (هيكل المراجع - Citations)
To ensure anti-hallucination, strict grounding, and verifiable attribution:
- Every generated answer must map directly back to verified source chunks existing in the retrieval store.
- **Citation Data Structure (JSON format):**
  ```json
  {
    "document_id": "doc_uuid_12345",
    "file_name": "AI-Research-Guide.pdf",
    "page_number": 14,
    "section_title": "Chapter 3: Methodology",
    "chunk_id": "chunk_05"
  }

5. Retrieval Requirements & Parameters (معايير الاسترجاع والتقييم)
   To optimize precision and control retrieval quality before reaching the LLM:
   
Top-K: Retrieves the top $K$ most relevant chunks (default initial setting: $K=4$, subject to evaluation).

Similarity Threshold: Minimum distance/similarity score cutoff (e.g., cosine similarity threshold) to filter out irrelevant chunks.  

Metadata Filters: Supports filtering by document_id or specific categories when scoped queries are applied.

Retrieval Evaluation Plan: Performance and relevance will be evaluated using precision/recall metrics on a golden test dataset rather than relying on un-tested arbitrary figures.

6. AI Model Input Structure
When a user query passes the similarity threshold check, the LLM prompt is dynamically constructed using a structured template:

JSON
{
  "model": "selected-llm",
  "temperature": 0.2,
  "messages": [
    {
      "role": "system",
      "content": "You are a precise AI Research Assistant. Answer the user query strictly using the provided context chunks. If the context is insufficient, state 'Not enough information available.' Never make up facts."
    },
    {
      "role": "user",
      "content": "Context Chunks:\n[Chunk 1 content + metadata]\n[Chunk 2 content + metadata]\n\nUser Query: {user_query}"
    }
  ]
}


7. Frontend Response & API Data Contract (تنسيق واجهات البرمجة مع نور ومريم)
Coordinated and reviewed with Nour (Frontend) and Maryam (Backend).

A. Request Payload (Frontend to Backend)
JSON
{
  "user_id": "user_456",
  "query": "ما هي خطوات معالجة المستندات؟",
  "session_id": "sess_789"
}
B. Response Payload (Backend to Frontend - Success)
JSON
{
  "status": "success",
  "status_code": 200,
  "answer": "تتم عملية المعالجة من خلال استخراج النص، ثم التقسيم إلى Chunks...",
  "sources": [
    {
      "file_name": "AI-Research-Guide.pdf",
      "page_number": 14,
      "snippet": "النص المستخرج الداعم للإجابة...",
      "citation": {
        "document_id": "doc_102",
        "chunk_id": "chunk_05"
      }
    }
  ]
}
C. Error / Exception Payload Schema
JSON
{
  "status": "error",
  "status_code": 400, // or 422, 500 depending on failure
  "error_code": "INSUFFICIENT_CONTEXT",
  "message": "عذراً، لا توجد معلومات كافية في المستندات المتاحة للإجابة على سؤالك.",
  "sources": []
}


8. Fallback Strategy, Error Handling & Evaluation
Below Similarity Threshold / Insufficient Context: If retrieved chunks fail the similarity score cutoff or context is missing, short-circuits LLM generation and returns a structured error/fallback response with empty sources.

Out-of-Scope Queries: Gracefully informs the user that the assistant is restricted to the ingested research database.

Technical Errors: Handles retriever timeouts, database connection errors, or LLM service failures with proper HTTP status codes and user-friendly messages.

Quality & Accuracy Metrics: Evaluated continuously via automated checks measuring retrieval relevance and citation validity against ground-truth answers.


🔗 Team Coordination & Action Items
Backend & Frontend Alignment (Nour & Maryam): Approved JSON request/response contracts and error handling schemas.

Repository Integration: Saved as docs/retrieval-requirements.md in the project repository, fully synchronized with ai-pipeline.md.

   
