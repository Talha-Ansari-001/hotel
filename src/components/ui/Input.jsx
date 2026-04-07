import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

export const Input = React.forwardRef(({ className, icon: Icon, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-1">
      <div className="relative flex items-center">
        {Icon && (
          <Icon className="absolute left-4 text-gray-400 w-5 h-5" />
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-white border-2 border-gray-100 rounded-2xl py-3.5 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 placeholder:text-gray-400 text-secondary font-medium',
            Icon ? 'pl-12' : 'pl-5',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest pl-2">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
