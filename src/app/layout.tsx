'use client';

import { usePathname } from 'next/navigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Sidebar from './components/Sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-52 perspective-container">
          <TransitionGroup>
            <CSSTransition
              key={pathname}
              classNames="rotate"
              timeout={500}
            >
              <div className="content">
                {children}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </body>
    </html>
  );
}
