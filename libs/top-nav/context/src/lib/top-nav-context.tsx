import { TopNavState } from '@digital-www-pwa/top-nav-types';
import { createContext, useContext } from 'react';

export const TopNavContext = createContext<TopNavState | undefined>(undefined);

export const useTopNavContext = (): TopNavState => {
  const topNavContext = useContext(TopNavContext);
  if (topNavContext === undefined) {
    throw new Error('useTopNavContext must be inside TopNav provider');
  }
  return topNavContext;
};
