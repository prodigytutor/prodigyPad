export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { DM_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import AppStateProvider from '@/lib/providers/state-provider';
import { SupabaseUserProvider } from '@/lib/providers/supabase-user-provider';
import { Toaster } from '@/components/ui/toaster';
import { SocketProvider } from '@/lib/providers/socket-provider';

const inter = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prodigy Pad',
  description: 'Prodigy Pad: Transform Your Efficiency with Our Premier Productivity App! Embrace a smarter way to manage tasks, notes, and projects, all in one intuitive platform. Ideal for students, professionals, and teams, Prodigy Pad elevates your organizational experience to new heights. Get started and boost your productivity today with Prodigy Pad!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <AppStateProvider>
            <SupabaseUserProvider>
              <SocketProvider>
                {children}
                <Toaster />
              </SocketProvider>
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
