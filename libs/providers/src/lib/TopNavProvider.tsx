'use client';
import type { TopNavState } from '@digital-www-pwa/types';
import { createContext, useContext, useState } from 'react';

export const TopNavContext = createContext<TopNavState | undefined>(undefined);

export const useTopNavContext = (): TopNavState => {
  const topNavContext = useContext(TopNavContext);
  if (topNavContext === undefined) {
    throw new Error('useTopNavContext must be inside TopNav provider');
  }
  return topNavContext;
};

export const TopNavProvider = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <TopNavContext.Provider value={{ expanded, setExpanded } as TopNavState}>
      {children}
    </TopNavContext.Provider>
  );
};
