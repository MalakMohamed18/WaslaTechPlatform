# AI Research Assistant - Retrieval & RAG Requirements

This document defines the Retrieval-Augmented Generation (RAG) requirements, data structures, and API contracts for the AI Research Assistant, directly aligned with our approved `ai-pipeline.md` architecture.

---

## 1. Document-Level Data Requirements (البيانات المطلوبة لكل مستند)
Before chunking, each ingested document (PDF or Text) must register with the system containing the following baseline metadata:
- `document_id`: Unique system-generated identifier (UUID).
- `file_name`: Original name of the document file.
- `file_type`: Format type (e.g., `application/pdf`, `text/plain`).
- `upload_timestamp`: Timestamp when the document was ingested and processed.
- `source_url`: Storage path or URL for source traceability.

---

## 2. Text Chunking Strategy (استراتيجية تقسيم المحتوى إلى Chunks)
Building upon our ingestion pipeline:
- **Chunk Size:** Text is segmented into manageable chunks ranging from **500 to 1,000 characters** to maintain coherent contextual units.
- **Chunk Overlap:** An empirical overlap of **10% to 15%** is applied between consecutive chunks to prevent semantic context loss at boundaries.
- **Processing Flow:** Handles native text extraction and fallback OCR seamlessly as defined in Task 1.

---

## 3. Chunk Metadata Schema (البيانات الوصفية لكل Chunk)
Every individual chunk stored in the Vector Database must carry rigorous metadata for precise tracking:
- `document_id`: Links the chunk back to its parent document.
- `chunk_id`: Unique identifier for the specific chunk segment.
- `page_number`: Origin page number (critical for PDF referencing).
- `source_url`: Direct link or file reference for user validation.
- `token_count`: Estimated token size for LLM context window optimization.

---

## 4. Citation Requirements & Data Structure (هيكل المراجع - Citations)
To ensure anti-hallucination and strict grounding:
- Every generated answer must map directly back to retrieved source chunks.
- **Citation Data Structure (JSON format):**
  ```json
  {
    "document_id": "doc_uuid_12345",
    "file_name": "AI-Research-Guide.pdf",
    "page_number": 14,
    "chunk_id": "chunk_05"
  }
## 5. AI Model Input Structure  
When a user query passes the similarity threshold check, the LLM prompt is dynamically constructed using a structured template:

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

## 6. . Frontend Response & API Data Contract (التنسيق مع نور ومريم)
This defines the contract between the Frontend, Backend, and Retrieval engine:

## A.Request Payload (Frontend to Backend)
{
  "user_id": "user_456",
  "query": "ما هي خطوات معالجة المستندات؟",
  "session_id": "sess_789"
}

## B.Response Payload (Backend to Frontend)

{
  "status": "success",
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

## 7. Fallback Strategy & Insufficient Context
Below Similarity Threshold: If retrieved chunks fail the similarity score cutoff, the system short-circuits LLM generation and returns:

{
  "answer": "عذراً، لا توجد معلومات كافية في المستندات المتاحة للإجابة على سؤالك.",
  "sources": []
}

 ## 🔗 Team Coordination & Action Items
Backend & Frontend Alignment (Nour & Maryam): Review and approve the JSON request/response data contracts outlined in Section 6.

Repository Integration: Save this document as docs/retrieval-requirements.md in the project repository.
