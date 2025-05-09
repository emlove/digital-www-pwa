'use client';
import { EVENT_START, EVENT_END } from '@digital-www-pwa/utils';
import { EventsView } from '@digital-www-pwa/components';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export function HappeningNowPage() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(dayjs());

  const updateTime = () => setCurrentTime(dayjs());

  useEffect(() => {
    const interval = setInterval(updateTime, 5000)
    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (!currentTime.isBetween(EVENT_START, EVENT_END)) {
      router.push('/');
    }
  }, [currentTime]);

  return <EventsView happeningAt={currentTime} header="Happening Now!" />;
}
