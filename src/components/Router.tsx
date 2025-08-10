import React, { useState } from 'react';

export type Page = 'home' | 'car-detail';

interface RouterContextType {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  goBack: () => void;
}

export const RouterContext = React.createContext<RouterContextType>({
  currentPage: 'home',
  navigateTo: () => {},
  goBack: () => {}
});

interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>(['home']);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setHistory(prev => [...prev, page]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      const previousPage = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentPage(previousPage);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigateTo, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
};