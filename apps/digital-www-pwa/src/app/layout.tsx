'use client';
import './global.css';
import { FeedProvider, TopNavProvider } from '@digital-www-pwa/providers';
import { TopNavComponent } from '@digital-www-pwa/top-nav-component';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <FeedProvider>
          <TopNavProvider>
            <div className="min-h-full">
              <TopNavComponent />
              {children}
            </div>
          </TopNavProvider>
        </FeedProvider>
      </body>
    </html>
  );
}
