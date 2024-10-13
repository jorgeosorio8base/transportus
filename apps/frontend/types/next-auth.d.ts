
          /* eslint-disable @typescript-eslint/no-explicit-any */
          import 'next-auth';
          import 'next-auth/jwt';

          interface BaseUser {
            id: string;
            firstName: string;
            lastName: string;
            status?: string;
            roles?: string[];
            authInfo?: any;
          }

          declare module 'next-auth' {
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface User extends BaseUser {}

            interface Session {
              user: User;
              token: any;
            }
          }

          declare module 'next-auth/jwt' {
            interface JWT {
              user: BaseUser;
              authInfo: any;
            }
          }

        