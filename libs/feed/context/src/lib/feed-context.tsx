'use client';

import { Feed } from '@digital-www-pwa/feed-types';
import { createContext, useContext } from 'react';

export const FeedContext = createContext<Feed>({
  coalesce: [],
});

export const useFeedContext = () => useContext(FeedContext);

export const tidyAlphaSort = (a: any, b: any, propName: string) => {
  const sortA = a[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();
  const sortB = b[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();

  if (sortA < sortB) {
    return -1;
  }
  if (sortA > sortB) {
    return 1;
  }
  return 0;
};
