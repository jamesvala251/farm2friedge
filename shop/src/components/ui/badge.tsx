import cn from 'classnames';

interface BadgeProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Badge: React.FC<BadgeProps> = ({ text, className, variant = 'primary' }) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {text}
    </span>
  );
};

export default Badge;
