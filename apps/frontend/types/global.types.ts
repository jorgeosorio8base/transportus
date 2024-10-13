
          import { NextPage } from 'next';
          import { AppProps } from 'next/app';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
            layout?: string;
            auth?: boolean | { role: string };
          };

          export type AppPropsWithLayout = AppProps & {
            Component: NextPageWithLayout;
          };
        