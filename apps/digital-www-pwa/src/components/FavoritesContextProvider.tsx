'use client';
import React, { useState, useEffect } from 'react';

import { INITIAL_DATA, FavoritesContext } from '../contexts/favorites';

function FavoritesContextProvider({ children }) {
  const [eventTimeIds, setEventTimeIds] = useState(() => {
    try {
      const storedIds = JSON.parse(
        localStorage.getItem('favoriteEventTimeIds'),
      );
      return new Set(storedIds);
    } catch (error) {
      console.error(error);
      return new Set();
    }
  });
  const [dataState, setDataState] = useState(INITIAL_DATA);

  function toggleEventTime(eventTimeId) {
    setEventTimeIds((oldIds) => {
      const newIds = new Set([...oldIds]);
      if (oldIds.has(eventTimeId)) {
        newIds.delete(eventTimeId);
        return newIds;
      }
      newIds.add(eventTimeId);
      return newIds;
    });
  }

  useEffect(() => {
    setDataState({
      eventTimeIds,
      toggleEventTime,
    });
    localStorage.setItem(
      'favoriteEventTimeIds',
      JSON.stringify([...eventTimeIds]),
    );
  }, [eventTimeIds]);

  return (
    <FavoritesContext.Provider value={dataState}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
