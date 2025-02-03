import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { FeedProvider } from '@digital-www-pwa/feed-provider';

import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { Roboto } from 'next/font/google';

import AppBar from '../components/AppBar';
import FavoritesContextProvider from '../components/FavoritesContextProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

import theme from '../theme';

export const metadata = {
  title: 'Lakes of Fire 2025 Digital WWW',
  description:
    'Digital What Where When guide for the Lakes of Fire regional burn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <FeedProvider>
              <FavoritesContextProvider>
                <AppBar />
                <Container
                  maxwidth="xs"
                  sx={{ paddingTop: 2, paddingBottom: 2 }}
                >
                  {children}
                </Container>
              </FavoritesContextProvider>
            </FeedProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
