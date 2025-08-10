import React from 'react';
import cn from 'classnames';

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ children, value, onChange, className, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={cn(
        'px-4 h-12 w-full rounded border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
        className
      )}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};

export { Select }; 