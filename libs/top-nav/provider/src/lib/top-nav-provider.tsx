import { ReactNode, useState } from 'react';

export const TopNavProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return <></>;
};
