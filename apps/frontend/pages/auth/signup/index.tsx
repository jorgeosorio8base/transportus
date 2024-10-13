
          import { SignupPageComponent } from "./SignupPageComponent";
          import { Formik, FormikHelpers } from "formik";
          import { useRegisterUser, useAlert } from '@/src/hooks'
          import { useRouter } from 'next/router';
          import * as yup from "yup";
          import {Environment} from '@transportus/core'
    
          const validationSchema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            confirmPassword: yup
              .string()
              .required()
              .test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.password === value
              }),
          });
    
          export interface SignupFormProps {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            confirmPassword: string;
          }
    
          export default function SignupPagePresenter() {
            const { mutate, isPending: loading } = useRegisterUser();
            const { show } = useAlert();
            const router = useRouter();
    
            async function handleSubmit(
              values: SignupFormProps,
              helpers: FormikHelpers<SignupFormProps>,
            ) {
              try {
                await mutate(
                  {
                    authProfileId: Environment.AUTH_PROFILE_ID,
                    password: values.password,
                    user: {
                      email: values.email,
                      firstName: values.firstName,
                      lastName: values.lastName,
                    },
                  },
                  {
                    onSuccess: (data) => {
                      if (data?.Id) {
                        router.push('/auth/login');
                        show({
                          title: 'Success',
                          message: 'User created successfully',
                          severity: 'success',
                        });
                      } else {
                        show({
                          title: 'Error',
                          message: 'Something went wrong, try again later',
                          severity: 'error',
                        });
                      }
                    },
                    onError: (err) => {
                      show({
                        title: 'Error',
                        message: err.message,
                        severity: 'error',
                      });
                    },
                  },
                );  

                helpers.resetForm()
              } catch (err) {
              const error = err as Error;
                helpers.resetForm()
                show({
                  title: 'Error',
                  message: error?.message || 'An error occurred',
                  severity: 'error',
                });
              }
            }
    
            return (
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  firstName: "",
                  lastName: "",
                  confirmPassword: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                <SignupPageComponent isLoading={loading} />
              </Formik>
            )
          }
        