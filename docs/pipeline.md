 # AI Research Assistant Pipeline Design

This document outlines the architecture and workflow of the AI Research Assistant, detailing how data flows from document ingestion to generating grounded answers for users.

---

## 📊 AI Pipeline Workflow Diagram

```mermaid
flowchart TD
    A[Documents: PDF / Text] --> B[Text Extraction & OCR]
    B --> C[Text Chunking & Metadata]
    C --> D[Embedding Models]
    D --> E[Vector Database]
    
    F[User Query] --> G[Semantic Search & Retrieval]
    E --> G
    G --> H{Similarity Threshold Check}
    
    H -->|Below Threshold / Insufficient Context| I[Fallback: Return Not Enough Info]
    H -->|Passed| J[LLM Generation Prompt]
    J --> K[Grounded Answer + Validated Citations]
    K --> L[Frontend Interface]
    
    subgraph Fallback Mechanism
        I
    end


1. Document Ingestion, Extraction & Chunking
Document Ingestion & Extraction:

Text Extraction: Direct handling of native text PDFs and standard text files.

OCR Activation: Optical Character Recognition (OCR) integration for scanned or image-based PDFs.

Error Handling: Graceful management of empty, corrupted, or unsupported files with clear alert messaging.

Text Chunking & Metadata:

Text is split into manageable chunks ranging from 500 to 1,000 characters (character-based initially, with provisions for token evaluation).

Overlap: Overlap ratios will be determined and optimized through empirical testing and evaluation to prevent context loss across splits.

Metadata Tracking: Each chunk is linked to robust metadata (e.g., Document ID, Page Number, Chunk ID, Source URL) to ensure precise source traceability.

2. Embedding & Vector Database
Each processed chunk is converted into numerical vector embeddings using selected embedding models.

Vectors are securely stored in the Vector Database alongside their respective metadata.

3. Retrieval Phase (Semantic Search)
Top-K Retrieval: Define the initial number of retrieved chunks based on experimental performance.

Filtering: Implement filtering mechanisms by source document or category when needed.

Reranking: Assess whether a Reranking service is required within the current MVP scope based on retrieval evaluation results.

4. Generation Phase & Citation Validation
Structured Prompting: The user's query and the retrieved context chunks are combined into a structured prompt template for the LLM.

Citation Grounding & Validation:

Every generated answer must include verified citations linked directly to actual retrieved chunks (Document ID, Page Number, Chunk ID, Source URL).

Programmatic validation ensures the LLM generates citations strictly derived from the retrieved context rather than general parametric memory (Hallucination Prevention).

🛡️ Fallback Strategy
Similarity Threshold: The similarity score threshold is established through rigorous testing and evaluation rather than assumed fixed constants.

Insufficient Context Handling: If search results are retrieved but prove inadequate to answer the user's query accurately, the system abstains from guessing and triggers the designated fallback response.

🧪 Evaluation & Quality Assurance
Test Dataset: Prepare a curated set of test questions mapped to known reference documents.

Accuracy & Citation Checks: Validate answer accuracy against source material and verify citation correctness.

Edge Case Testing: Test insufficient information scenarios and log instances where the system retrieves suboptimal context or generates errors.

🔗 Shared Dependencies
Backend Team: Align on API contracts for query submission and response payloads (including sources).

Data/Docs Team: Review initial document quality to optimize chunking strategies.

## 🚀 Action Items
- Get team approval on this finalized pipeline design.
- Move actual code implementation and script development to the agreed code repository structure (outside of `docs/`), coordinating ownership and tasks with the team.
