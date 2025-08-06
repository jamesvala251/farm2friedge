interface Props {
  message?: string;
  className?: string;
}

const ErrorMessage: React.FC<Props> = ({ message = 'Something went wrong!', className }) => {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg bg-red-50 px-4 py-3 text-sm text-red-500 ${className}`}
    >
      <div className="h-5 w-5 ltr:mr-2 rtl:ml-2 rounded-full bg-red-500 flex items-center justify-center">
        <span className="text-white text-xs">!</span>
      </div>
      {message}
    </div>
  );
};

export default ErrorMessage;
