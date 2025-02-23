'use client';
import type { Feed } from '@digital-www-pwa/types';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export const FeedContext = createContext<Feed>({
  coalesce: [],
});

export const useFeedContext = () => useContext(FeedContext);

export const FeedProvider = ({ children }: { children: ReactNode }) => {
  const [feed, setFeed] = useState<Feed>({
    coalesce: [],
  });

  useEffect(() => {
    async function fetchFeed() {
      const res = await fetch('/api/feed');
      const data = await res.json();
      setFeed(data);
    }
    fetchFeed();
  }, []);

  if (!feed) {
    return <div>Reticulating splines ...</div>;
  }

  return <FeedContext.Provider value={feed}>{children}</FeedContext.Provider>;
};
