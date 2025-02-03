import './global.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { FeedProvider } from '@digital-www-pwa/feed-provider';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

import AppBar from '../components/AppBar';

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
          <ThemeProvider theme={theme}>
            <FeedProvider>
              <AppBar />
              {children}
            </FeedProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
