// ⚠️ Draft Types - To be reviewed with Noor & Rodina

export interface Source {
  id: string;
  title: string;
  url: string;
  snippet?: string;
  favicon?: string; 
}

export interface SearchResult {
  query: string;
  sources: Source[];
  totalResults: number;
  timeTakenMs?: number;
}

export interface AIResponse {
  id: string;
  text: string;
  isGenerating: boolean;
  relatedSources?: Source[];
  createdAt: Date;
}
