export type CalendarEvent = {
  id: number;
  start: Date;
  end: Date;
  title: string;
  isSecondary?: boolean;
};
