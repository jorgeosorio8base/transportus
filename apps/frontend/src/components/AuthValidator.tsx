
          import { useSession } from 'next-auth/react';
          import { useRouter } from 'next/router';
          import { useEffect } from 'react';
          import { useAuthentication, useLoading, useUser } from '../hooks';

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          export function AuthValidator({ children }: { children: any }) {
            const router = useRouter();
            const { showLoading, hideLoading } = useLoading();
            const { status, data: session } = useSession();
            const { data, isLoading } = useUser({ email: session?.user?.email });
            const { setUserData } = useAuthentication();

            useEffect(() => {
              if (status === 'loading' || isLoading) {
                showLoading();
                return;
              }

              if (status === 'unauthenticated' || !session) {
                router.push('/auth/login');
              }

              if (data) {
                setUserData(data);
              }

              hideLoading();

              // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [status, isLoading]);

            if (children.auth && typeof children.auth !== 'boolean') {
              const { role } = children.auth;

              return children;
            }

            return children;
          }
        