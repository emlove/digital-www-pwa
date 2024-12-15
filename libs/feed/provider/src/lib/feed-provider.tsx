'use client';

import { FeedContext } from '@digital-www-pwa/feed-context';
import { Feed } from '@digital-www-pwa/feed-types';
import { ReactNode, useEffect, useState } from 'react';

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

export default FeedProvider;
