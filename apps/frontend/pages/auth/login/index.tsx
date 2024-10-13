
        import { LoginPageComponent } from "./LoginPageComponent";
        import { Formik, FormikHelpers } from "formik";
        import { signIn } from 'next-auth/react';
        import { useRouter } from 'next/router';
        import { useState } from 'react';
        import { useAlert } from '@/src/hooks';
        import * as yup from "yup";
  
        const validationSchema = yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required(),
        });
  
        export interface LoginFormProps {
          email: string;
          password: string;
        }
  
        export default function LoginPagePresenter() {
          const [isLoading, setLoading] = useState(false);
          const {show} = useAlert();
          const router = useRouter();

          async function handleSubmit(
            values: LoginFormProps,
            helpers: FormikHelpers<LoginFormProps>,
          ) {
            setLoading(true);
            try {
              const result = await signIn('credentials', {
                email: values.email,
                password: values.password,
                callbackUrl: '/',
                redirect: false,
              });

              if (result?.error) {
                setLoading(false);
                show({
                  title: 'Error',
                  message: result.error,
                  placement: 'bottom-right',
                  severity: 'error',
                  showIcon: true,
                });
              }

              if (result?.ok) {
                setLoading(false);
                router.push(result?.url || '/');
              }

              helpers.resetForm();
            } catch (err) {
              const error = err as Error;
              setLoading(false);
              helpers.resetForm()
              show({
                  title: 'Error',
                  message: error?.message || 'An error occurred',
                  placement: 'bottom-right',
                  severity: 'error',
                  showIcon: true,
                });
            }
          }
  
          return (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <LoginPageComponent isLoading={isLoading} />
            </Formik>
          )
        }
      