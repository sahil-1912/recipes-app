// src/app/TrpcProvider.tsx
'use client';

import { ReactNode } from 'react';
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/routers/_app';

interface TrpcProviderProps {
  children: ReactNode;
}

const TrpcProviderInner = ({ children }: TrpcProviderProps) => {
  return <>{children}</>;
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

const TrpcProvider = withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        httpBatchLink({
          url,
        }),
      ],
    };
  },
  ssr: false,
})(TrpcProviderInner);

export default TrpcProvider;
