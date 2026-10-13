import React, { useState } from 'react';
import { AIResponse, SearchResult, Source } from '../types';

export const AIDemoPage: React.FC = () => {
  const [demoResponse] = useState<AIResponse>({
    id: 'msg-1',
    text: 'هذا رد تجريبي من الذكاء الاصطناعي لضمان سلامة هيكلة الواجهة الأمامية.',
    isGenerating: false,
    createdAt: new Date(),
  });

  const [demoSearch] = useState<SearchResult>({
    query: 'React AI Integration',
    sources: [
      { id: 'src-1', title: 'React Docs', url: 'https://react.dev', snippet: 'How to build UI...' }
    ],
    totalResults: 1
  });

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen flex flex-col gap-6 font-sans">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">AI Module - Demo Page</h1>
        <p className="text-gray-500 mt-2">صفحة تجريبية لاختبار الـ AI Components والـ Types</p>
      </header>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Chat Interface (Placeholder)</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-800 leading-relaxed">{demoResponse.text}</p>
          <span className="text-xs text-gray-400 mt-2 block">
            {demoResponse.createdAt.toLocaleTimeString()}
          </span>
        </div>
      </section>

      <section className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Research & Search Results</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-50">
          <h3 className="font-medium text-gray-700">Query: {demoSearch.query}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {demoSearch.sources.map((source: Source) => (
              <li key={source.id} className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
                <a href={source.url} target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">
                  {source.title}
                </a>
                {source.snippet && <p className="text-sm text-gray-600 mt-1">{source.snippet}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AIDemoPage;
