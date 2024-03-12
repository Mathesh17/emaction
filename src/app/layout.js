import './globals.css'
import { Inter } from 'next/font/google'
import { Separator } from '../components/ui/separator';
import { ThemeProvider } from '@/providers/ThemeProviders';
import { cn } from '@/lib/utils';
import Header from '@/layouts/Header';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EmAction',
  description: 'Cenralized medical assistant for global treatment.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={cn(inter.className, "dark")} style={{
      colorScheme: "dark"
    }}>
      <body>
        <ThemeProvider>
          <div className='flex flex-col min-h-screen w-full items-center dark:bg-neutral-950'>
            <Header />
            <Separator />
            <main className='flex flex-grow w-full items-center justify-center bg-neutral-200/90 dark:bg-neutral-950'>
              {children}
              <Toaster />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}