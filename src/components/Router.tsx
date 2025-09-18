import React, { useState, useEffect } from 'react';

export type PageName = 'home' | 'car-detail';

interface RouterContextType {
  currentPage: PageName;
  params: Record<string, string>;
  navigateTo: (page: PageName, params?: Record<string, string>) => void;
  goBack: () => void;
}

export const RouterContext = React.createContext<RouterContextType>({
  currentPage: 'home',
  params: {},
  navigateTo: () => {},
  goBack: () => {}
});

interface RouterProps {
  children: React.ReactNode;
}

const parseUrl = (pathname: string): { page: PageName; params: Record<string, string> } => {
  if (pathname === '/' || pathname === '') {
    return { page: 'home', params: {} };
  }
  
  const carDetailMatch = pathname.match(/^\/car-detail\/(.+)$/);
  if (carDetailMatch) {
    return { page: 'car-detail', params: { id: carDetailMatch[1] } };
  }
  
  // Default to home for unknown routes
  return { page: 'home', params: {} };
};

const buildUrl = (page: PageName, params?: Record<string, string>): string => {
  switch (page) {
    case 'home':
      return '/';
    case 'car-detail':
      return `/car-detail/${params?.id || ''}`;
    default:
      return '/';
  }
};

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentState, setCurrentState] = useState(() => {
    const { page, params } = parseUrl(window.location.pathname);
    return { page, params };
  });

  const navigateTo = (page: PageName, params?: Record<string, string>) => {
    const url = buildUrl(page, params);
    window.history.pushState({ page, params }, '', url);
    setCurrentState({ page, params: params || {} });
  };

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setCurrentState({ page: event.state.page, params: event.state.params || {} });
      } else {
        const { page, params } = parseUrl(window.location.pathname);
        setCurrentState({ page, params });
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial state in history if it doesn't exist
    if (!window.history.state) {
      const { page, params } = parseUrl(window.location.pathname);
      window.history.replaceState({ page, params }, '', window.location.pathname);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ 
      currentPage: currentState.page, 
      params: currentState.params,
      navigateTo, 
      goBack 
    }}>
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