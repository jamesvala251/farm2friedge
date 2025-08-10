import Button from '@/components/ui/button';
import PasswordInput from '@/components/ui/password-input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Props {
  onSubmit: (values: { password: string }) => void;
  loading: boolean;
}

const schema = yup.object().shape({
  password: yup.string().required('Password is required'),
});

const EnterNewPasswordView = ({ onSubmit, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ password: string }>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <PasswordInput
        label="New Password"
        {...register('password')}
        error={errors.password?.message}
        variant="outline"
        className="mb-5"
      />

      <Button className="h-11 w-full" loading={loading} disabled={loading}>
        Reset Password
      </Button>
    </form>
  );
};

export default EnterNewPasswordView;
