import RouterLink from 'next/link';
import Button from '@mui/material/Button';
import type { NavigationLink } from '@digital-www-pwa/types';

export function NavigationButton({linkData} : {linkData: NavigationLink}) {
  const IconComponent = linkData.icon;

  const getAnimation = () => {
    if (linkData.path === '/now') {
      return "breathing 1800ms alternate infinite";
    }

    return null;
  };

  return (
    <Button
      component={RouterLink}
      href={linkData.path}
      sx={{
        "@keyframes breathing": {
          "0%": {
            scale: 1.03,
          },
          "100%": {
            scale: 0.98,
          },
        },
        width: '100%',
        height: '100%',
        padding: 2,
        animation: getAnimation(),
      }}
      variant="contained"
      startIcon={<IconComponent />}
    >
      {linkData.title}
    </Button>
  );
}
