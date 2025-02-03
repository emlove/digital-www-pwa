'use client';
import { LinkProps } from '@digital-www-pwa/link-types';
import { useRouter } from 'next/navigation';

export function Link({ to, className, children }: LinkProps) {
  const router = useRouter();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        return router.push(to);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
