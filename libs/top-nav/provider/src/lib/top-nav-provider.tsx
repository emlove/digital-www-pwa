import { TopNavContext } from '@digital-www-pwa/top-nav-context';
import { ReactNode, useState } from 'react';

export const TopNavProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <TopNavContext.Provider value={{ expanded, setExpanded } as any}>
      {children}
    </TopNavContext.Provider>
  );
};
