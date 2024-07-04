// src/app/layout.tsx
import { ReactNode } from 'react';
import '../app/globals.css'; // If you have global styles
import TrpcProvider from './TrpcProvider';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
      <Navbar />
       {/* @ts-ignore */}
        <TrpcProvider>{children}</TrpcProvider>
      <Footer />
      </body>
    </html>
  );
};

export default Layout;
