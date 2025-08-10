import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import * as yup from 'yup';
import Link from '@/components/ui/link';
import Form from '@/components/ui/forms/form';
import { Routes } from '@/config/routes';
import { useLogin } from '@/data/user';
import type { LoginInput } from '@/types';
import { useState } from 'react';
import Alert from '@/components/ui/alert';
import Router from 'next/router';
import {
  allowedRoles,
  hasAccess,
  setAuthCredentials,
} from '@/utils/auth-utils';

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

const defaultValues = {
  email: 'admin@demo.com',
  password: 'demodemo',
};

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: login, isLoading, error } = useLogin();

  function onSubmit({ email, password }: LoginInput) {
    login(
      {
        email,
        password,
      },
      {
        onSuccess: (data: any) => {
          if (data?.token) {
            if (hasAccess(allowedRoles, data?.permissions)) {
              setAuthCredentials(data?.token, data?.permissions, data?.role);
              Router.push(Routes.dashboard);
              return;
            }
            setErrorMessage('You do not have enough permissions');
          } else {
            setErrorMessage('Invalid credentials');
          }
        },
        onError: () => {},
      }
    );
  }

  return (
    <>
      <Form<LoginInput> validationSchema={loginFormSchema} onSubmit={onSubmit} useFormProps={{ defaultValues }}>
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label="Email"
              {...register('email')}
              type="email"
              variant="outline"
              className="mb-4"
              error={errors?.email?.message}
            />
            <PasswordInput
              label="Password"
              forgotPassHelpText="Forgot Password?"
              {...register('password')}
              error={errors?.password?.message}
              variant="outline"
              className="mb-4"
              forgotPageLink={Routes.forgotPassword}
            />
            <Button className="w-full" loading={isLoading} disabled={isLoading}>
              Login
            </Button>

            <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
              <hr className="w-full" />
              <span className="absolute -top-2.5 bg-light px-2 -ms-4 start-2/4">
                OR
              </span>
            </div>

            <div className="text-center text-sm text-body sm:text-base">
              Don&apos;t have an account?{' '}
              <Link
                href={Routes.register}
                className="font-semibold text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
              >
                Register as Shop Owner
              </Link>
            </div>
          </>
        )}
      </Form>
      {errorMessage ? (
        <Alert
          message={errorMessage}
          variant="error"
          closeable={true}
          className="mt-5"
          onClose={() => setErrorMessage(null)}
        />
      ) : null}
    </>
  );
};

export default LoginForm;
