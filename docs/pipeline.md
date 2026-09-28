 # AI Research Assistant Pipeline Design

This document outlines the architecture and workflow of the AI Research Assistant, detailing how data flows from document ingestion to generating grounded answers for users.

---

## 📊 AI Pipeline Workflow Diagram

```mermaid
flowchart TD
    A[Documents: PDF / Text] -->|Chunking & Overlap| B[Text Chunks 500-1000 chars]
    B -->|Embedding Models| C[Vector Database & Metadata]
    D[User Query] -->|Semantic Search| C
    C -->|Retrieved Chunks & Context| E[LLM Generation Prompt]
    E -->|Grounded Answer + Citations| F[Frontend Interface]
    
    subgraph Fallback Check
    C -->|Low Similarity / No Context| G[Fallback: Return Not Enough Info]
    end
 

---

## 1. Core AI Pipeline Stages

1. **Document Ingestion & Chunking:**
   * Documents (PDFs, text files) are uploaded to the system.
   * Text is split into small, manageable chunks (ranging from 500 to 1000 characters) with a defined text overlap to preserve context across splits.

2. **Embedding & Vector Database:**
   * Each chunk is converted into numerical vectors using embedding models.
   * Vectors are stored in a Vector Database alongside metadata (e.g., file name, page number, chunk index).

3. **Retrieval Phase:**
   * The user's query is received from the frontend interface.
   * The query is embedded and matched against the Vector Database using Semantic Search to retrieve the most relevant chunks.

4. **Generation Phase (LLM):**
   * The user's query and the retrieved context chunks are combined into a structured Prompt template.
   * The prompt is sent to the Large Language Model (LLM) to generate an objective and accurate answer based strictly on the provided context.

5. **Citations & Sources:**
   * The system extracts the source metadata (document name and page number) and presents them alongside the generated response to the frontend.

---

## 🛡️ Fallback Mechanisms
* If the similarity score of retrieved search results is below the acceptable threshold, or no matching context is found:
  * The model prevents hallucination and abstains from guessing.
  * The system returns a clear fallback message: *"Sorry, there is not enough information in the available documents to answer this question."*

---

## 🔗 Shared Dependencies
* **Backend Team:** Align on API contracts for query submission and response payloads (including sources).
* **Data/Docs Team:** Review initial document quality to optimize chunking strategies.

---

## 🚀 Action Items
* Get team approval on this pipeline design.
* Begin implementation of the ingestion and retrieval scripts inside the `docs/` structure.