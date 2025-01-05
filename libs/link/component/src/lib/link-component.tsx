'use client';
import { LinkProps } from '@digital-www-pwa/link-types';
import { useTopNavContext } from '@digital-www-pwa/top-nav-context';
import { useRouter } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Link({ to, current, children }: LinkProps) {
  const router = useRouter();
  const { setExpanded } = useTopNavContext();
  return (
    <a
      href={to}
      aria-current={current ? 'page' : undefined}
      className={classNames(
        current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium'
      )}
      onClick={(e) => {
        e.preventDefault();
        setExpanded(false);
        return router.push(to);
      }}
    >
      {children}
    </a>
  );
}

export default Link;
