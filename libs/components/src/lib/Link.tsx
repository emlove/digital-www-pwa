import { useTopNavContext } from '@digital-www-pwa/providers';
import { LinkProps } from '@digital-www-pwa/types';
import { useRouter } from 'next/navigation';

export function Link({ to, className, children }: LinkProps) {
  const router = useRouter();
  const { setExpanded } = useTopNavContext();
  return (
    <a
      href={to}
      className={className}
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
