import { signIn } from 'next-auth/react';
import Logo from '@/components/ui/logo';
import Alert from '@/components/ui/alert';
import Input from '@/components/ui/forms/input';
import PasswordInput from '@/components/ui/forms/password-input';
import Button from '@/components/ui/button';
import * as yup from 'yup';
import { GoogleIcon } from '@/components/icons/google';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { MobileIcon } from '@/components/icons/mobile-icon';
import { Form } from '@/components/ui/forms/form';
import { useLogin } from '@/framework/user';
import type { LoginUserInput } from '@/types';
import { AnonymousIcon } from '@/components/icons/anonymous-icon';
import { useRouter } from 'next/router';
import { Routes } from '@/config/routes';
import { useSettings } from '@/framework/settings';

const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});
function LoginForm() {
  const router = useRouter();
  const { openModal } = useModalAction();
  const { settings, isLoading: settingLoading } = useSettings();
  const isCheckout = router.pathname.includes('checkout');
  const { mutate: login, isLoading, serverError, setServerError } = useLogin();

  const guestCheckout = settings?.guestCheckout;

  function onSubmit({ email, password }: LoginUserInput) {
    login({
      email,
      password,
    });
  }

  return (
    <>
      <Alert
        variant="error"
        message={serverError as string | null}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema}
        useFormProps={{
          defaultValues: {
            email: 'customer@demo.com',
            password: 'demodemo',
          },
        }}
      >
        {({ register, formState: { errors } }) => (
          <>
            <Input
              label="Email"
              {...register('email')}
              type="email"
              variant="outline"
              className="mb-5"
              error={errors.email?.message}
            />
            <PasswordInput
              label="Password"
              {...register('password')}
              error={errors.password?.message}
              variant="outline"
              className="mb-5"
              forgotPageRouteOnClick={() => openModal('FORGOT_VIEW')}
            />
            <div className="mt-8">
              <Button
                className="w-full h-11 sm:h-12"
                loading={isLoading}
                disabled={isLoading}
              >
                Login
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* //===============// */}
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
        <span className="absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4">
          OR
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-2">
        <Button
          className="!bg-social-google !text-light hover:!bg-social-google-hover"
          disabled={isLoading}
          onClick={() => {
            signIn('google');
          }}
        >
          <GoogleIcon className="w-4 h-4 ltr:mr-3 rtl:ml-3" />
          Login with Google
        </Button>

        <Button
          className="h-11 w-full !bg-gray-500 !text-light hover:!bg-gray-600 sm:h-12"
          disabled={isLoading}
          onClick={() => openModal('OTP_LOGIN')}
        >
          <MobileIcon className="h-5 text-light ltr:mr-2 rtl:ml-2" />
          Login with Mobile
        </Button>

        {isCheckout && guestCheckout && (
          <Button
            className="h-11 w-full !bg-pink-700 !text-light hover:!bg-pink-800 sm:h-12"
            disabled={isLoading}
            onClick={() => router.push(Routes.checkoutGuest)}
          >
            <AnonymousIcon className="h-6 text-light ltr:mr-2 rtl:ml-2" />
            Guest Checkout
          </Button>
        )}
      </div>
      <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
        <hr className="w-full" />
      </div>
      <div className="text-sm text-center text-body sm:text-base">
        Don't have an account?{' '}
        <button
          onClick={() => openModal('REGISTER')}
          className="font-semibold underline transition-colors duration-200 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-0 ltr:ml-1 rtl:mr-1"
        >
          Register
        </button>
      </div>
    </>
  );
}

export default function LoginView() {
  return (
    <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mt-4 mb-8 text-sm text-center text-body sm:mt-5 sm:mb-10 md:text-base">
        Welcome back! Please enter your details to sign in to your account.
      </p>
      <LoginForm />
    </div>
  );
}
