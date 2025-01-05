'use client';

import { TopNavContext } from '@digital-www-pwa/top-nav-context';
import { TopNavState } from '@digital-www-pwa/top-nav-types';
import { ReactNode, useState } from 'react';

export const TopNavProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <TopNavContext.Provider value={{ expanded, setExpanded } as TopNavState}>
      {children}
    </TopNavContext.Provider>
  );
};
