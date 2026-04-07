import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

export const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200/60', className)}
      {...props}
    />
  );
};

export const FoodCardSkeleton = () => (
  <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 p-4 space-y-4 shadow-sm">
    <Skeleton className="h-48 w-full rounded-2xl" />
    <div className="space-y-2 px-2">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-10 w-full rounded-xl mt-4" />
    </div>
  </div>
);
