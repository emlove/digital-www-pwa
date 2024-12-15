import { useEffect, useState } from 'react';

export const FeedProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);

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

  return <></>;
};
