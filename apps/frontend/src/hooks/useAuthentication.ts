
          import { AuthenticationContext } from '@/src/providers';
          import { useContext } from 'react';

          export function useAuthentication() {
            const context = useContext(AuthenticationContext);

            if (!context) {
              throw new Error(
                'useAuthentication must be used within a AuthenticationProvider',
              );
            }

            return context;
          }

        