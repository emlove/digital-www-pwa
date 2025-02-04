'use client';
import { useContext, createContext } from 'react';

export const INITIAL_DATA = {
  eventTimeIds: new Set(),
  toggleEventTime: () => {},
};

export const FavoritesContext = createContext(INITIAL_DATA);

export function useFavoriteEventTimeIds() {
  return useContext(FavoritesContext).eventTimeIds;
}

export function useToggleFavoriteEventTime() {
  return useContext(FavoritesContext).toggleEventTime;
}
