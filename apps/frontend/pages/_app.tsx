
          /* eslint-disable @typescript-eslint/no-explicit-any */
          import { RenderWithLayout } from '@/src/components';
          import { NextUIProvider } from '@nextui-org/react';
          import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
          import { SessionProvider } from 'next-auth/react';
          import { useRouter } from 'next/router';
          import '../app/globals.css';
          import {
            AlertProvider,
            AuthenticationProvider,
            LoadingProvider,
          } from '../src/providers';
          import { AppPropsWithLayout } from '../types/global.types';

          function MyApp({
            Component,
            pageProps: { session, ...pageProps },
          }: AppPropsWithLayout) {
            const router = useRouter();

            const queryClient = new QueryClient();

            return (
              <QueryClientProvider client={queryClient}>
                <SessionProvider session={session} refetchOnWindowFocus>
                  <NextUIProvider navigate={router.push}>
                    <AuthenticationProvider>
                      <LoadingProvider>
                        <AlertProvider>
                          <RenderWithLayout Component={Component} {...pageProps} />
                        </AlertProvider>
                      </LoadingProvider>
                    </AuthenticationProvider>
                  </NextUIProvider>
                </SessionProvider>
              </QueryClientProvider>
            );
          }

          export default MyApp;
        