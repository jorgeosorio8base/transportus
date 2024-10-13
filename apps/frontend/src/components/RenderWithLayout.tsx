
            import { AppPropsWithLayout } from '../../types/global.types';
            import { AuthValidator } from './AuthValidator';
            import { AppLayout } from './Layout';

            export function RenderWithLayout({ Component, pageProps }: AppPropsWithLayout) {
              const render = Component.auth ? (
                <AuthValidator>
                  <Component {...pageProps} />
                </AuthValidator>
              ) : (
                <Component {...pageProps} />
              );

              const layoutMapping = {
                AppLayout: (children: React.ReactNode) => <AppLayout>{children}</AppLayout>,
              };

              if (!Component.layout) {
                return render;
              }

              const layoutRender =
                layoutMapping[Component.layout as keyof typeof layoutMapping];

              if (!layoutRender) {
                return render;
              }

              return layoutRender(render);
            }
        