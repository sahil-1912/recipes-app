// src/app/layout.tsx
import { ReactNode } from 'react';
import '../app/globals.css'; // If you have global styles
import TrpcProvider from './TrpcProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
};

export default Layout;
