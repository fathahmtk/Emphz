import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAllProducts } from '../hooks/useAllProducts';
import { useDebounce } from '../hooks/useDebounce';
import Icon from './Icon';

interface SearchResult {
  type: 'Product' | 'Category';
  title: string;
  description: string;
  link: string;
  score: number;
  code?: string;
  categoryName: string;
}

const SearchModal: React.FC<{ isOpen: boolean; onClose: () => void; }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sortOrder, setSortOrder] = useState<'relevance' | 'name-asc' | 'name-desc' | 'code-asc' | 'category'>('relevance');
  const searchIndexRef = useRef<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { data: productsData, isLoading: isIndexLoading, error: indexError } = useAllProducts();
  const debouncedQuery = useDebounce(query, 250); // Debounce input by 250ms

  // Build search index when data is loaded
  useEffect(() => {
    if (isIndexLoading || indexError || !productsData) {
      searchIndexRef.current = [];
      return;
    }

    const newIndex: SearchResult[] = [];
    const categoriesAdded = new Set<string>();

    productsData.forEach(({ product, category }) => {
      newIndex.push({
        type: 'Product',
        title: product.name,
        description: product.description || product.useCase || product.innovation || '',
        link: `/products/${product.code}`,
        score: 0,
        code: product.code,
        categoryName: category.name,
      });

      if (!categoriesAdded.has(category.code)) {
        newIndex.push({
          type: 'Category',
          title: category.name,
          description: category.tagline,
          link: `/products/category/${category.slug}`,
          score: 0,
          code: category.code,
          categoryName: category.name,
        });
        categoriesAdded.add(category.code);
      }
    });
    searchIndexRef.current = newIndex;
  }, [productsData, isIndexLoading, indexError]);

  // Effect to handle modal open/close actions
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setActiveIndex(-1);
      setSortOrder('relevance');
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // The "fuzzy" search logic using the debounced query
  useEffect(() => {
    if (!debouncedQuery.trim() || indexError) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }
    const lowerCaseQuery = debouncedQuery.toLowerCase();
    const queryWords = lowerCaseQuery.split(' ').filter(w => w);

    const scoredResults = searchIndexRef.current.map(item => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const descriptionLower = item.description.toLowerCase();
        const codeLower = item.code?.toLowerCase() || '';
        
        if (codeLower === lowerCaseQuery) score += 50;
        if (titleLower === lowerCaseQuery) score += 40;
        if (codeLower.includes(lowerCaseQuery)) score += 20;
        if (titleLower.includes(lowerCaseQuery)) score += 15;
        
        queryWords.forEach(word => {
            if (codeLower.includes(word)) score += 10;
            if (titleLower.split(/[\s-]+/).includes(word)) score += 5;
            if (titleLower.includes(word)) score += 2;
            if (descriptionLower.includes(word)) score += 1;
        });

        return { ...item, score };
      })
      .filter(item => item.score > 0);
      
    scoredResults.sort((a, b) => b.score - a.score);
    setResults(scoredResults.slice(0, 15));
    setActiveIndex(-1);
  }, [debouncedQuery, indexError]);

  // Apply sorting to the results
  const sortedResults = useMemo(() => {
    const sorted = [...results];
    switch (sortOrder) {
      case 'name-asc': return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc': return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'code-asc': return sorted.sort((a, b) => (a.code || '').localeCompare(b.code || ''));
      case 'category': return sorted.sort((a, b) => a.categoryName.localeCompare(b.categoryName) || a.title.localeCompare(b.title));
      default: return sorted;
    }
  }, [results, sortOrder]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => Math.min(prev + 1, sortedResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0 && sortedResults[activeIndex]) {
      e.preventDefault();
      navigate(sortedResults[activeIndex].link);
      onClose();
    }
  }, [activeIndex, sortedResults, navigate, onClose]);

  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-start justify-center p-4 pt-[15vh] animate-fadeIn"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[var(--color-surface-primary)] backdrop-blur-xl saturate-150 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col border border-[var(--color-border)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, categories, etc."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full py-4 pl-12 pr-4 text-lg border-b border-[var(--color-border)] focus:outline-none bg-transparent text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[var(--color-text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        
        <div className="flex-grow overflow-y-auto max-h-[60vh]">
          {isIndexLoading ? (
             <div className="p-8 text-center text-[var(--color-text-secondary)]"><p>Building search index...</p></div>
          ) : indexError ? (
             <div className="p-8 text-center text-red-500"><p className="font-semibold">Could not build search index.</p><p className="text-sm mt-1">{indexError.message}</p></div>
          ) : debouncedQuery.trim() && sortedResults.length === 0 ? (
            <div className="p-8 text-center text-[var(--color-text-secondary)]"><p>No results found for "{debouncedQuery}".</p></div>
          ) : sortedResults.length > 0 && (
            <>
              <div className="p-2 bg-black/5 border-b border-[var(--color-border)] flex items-center justify-between text-sm sticky top-0 z-10">
                <span className="text-[var(--color-text-secondary)] font-medium px-2">{sortedResults.length} results</span>
                <select value={sortOrder} onChange={e => setSortOrder(e.target.value as any)} className="text-sm rounded border-[var(--color-border)] focus:ring-2 focus:ring-[var(--color-brand)]/50 focus:border-[var(--color-brand)] p-1 bg-[var(--color-surface-primary)] text-[var(--color-text-secondary)]">
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="code-asc">Code (A-Z)</option>
                  <option value="category">Category</option>
                </select>
              </div>
              <ul>
                {sortedResults.map((result, index) => (
                  <li key={`${result.type}-${result.code}`}>
                    <Link to={result.link} onClick={onClose} className={`flex items-start gap-4 p-4 border-b border-black/10 transition-colors duration-150 ${activeIndex === index ? 'bg-[var(--color-brand)]/10' : 'hover:bg-black/5'}`}>
                      <div className={`mt-1 flex-shrink-0 rounded-md flex items-center justify-center h-8 w-8 ${result.type === 'Product' ? 'bg-[var(--color-brand)]/20 text-[var(--color-brand)]' : 'bg-gray-400/20 text-gray-500'}`}>
                        {result.type === 'Product' ? <Icon name="engineering" className="h-5 w-5" /> : <Icon name="customization" className="h-5 w-5" />}
                      </div>
                      <div className="flex-grow">
                          <h3 className="font-semibold text-[var(--color-text-primary)]">{result.title}</h3>
                          <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1">{result.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{result.type === 'Product' ? `In: ${result.categoryName}` : 'Product Category'}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="text-xs text-center p-2 bg-black/5 text-[var(--color-text-secondary)] flex-shrink-0 border-t border-[var(--color-border)]">
          Tip: Press <kbd className="font-sans border rounded px-1.5 py-0.5 bg-white/50 border-gray-300 shadow-sm">Ctrl+K</kbd> to open search.
        </div>
      </div>
    </div>
  );
};

export default SearchModal;