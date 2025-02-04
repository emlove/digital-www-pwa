'use client';
import { useContext, createContext } from 'react';

export const INITIAL_DATA = {
  arts: null,
  events: null,
  eventTimes: null,
  camps: null,
  radios: null,
  vehicles: null,
};

export const ProcessedDataContext = createContext(INITIAL_DATA);

export function useEvents() {
  return useContext(ProcessedDataContext).events;
}

export function useEvent(id) {
  const events = useEvents();
  return events && events[id];
}

export function useEventTimes() {
  return useContext(ProcessedDataContext).eventTimes;
}

export function useEventTime(id) {
  const eventTimes = useEventTimes();
  return eventTimes && eventTimes[id];
}

export function useArts() {
  return useContext(ProcessedDataContext).arts;
}

export function useArt(id) {
  const arts = useArts();
  return arts && arts[id];
}

export function useCamps() {
  return useContext(ProcessedDataContext).camps;
}

export function useCamp(id) {
  const camps = useCamps();
  return camps && camps[id];
}

export function useRadios() {
  return useContext(ProcessedDataContext).radios;
}

export function useRadio(id) {
  const radios = useRadios();
  return radios && radios[id];
}

export function useVehicles() {
  return useContext(ProcessedDataContext).vehicles;
}

export function useVehicle(id) {
  const vehicles = useVehicles();
  return vehicles && vehicles[id];
}
