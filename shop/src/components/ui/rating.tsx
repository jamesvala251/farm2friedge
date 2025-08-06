import React from 'react';
import cn from 'classnames';

interface RatingProps {
  rating: number;
  totalReviews?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  className?: string;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  rating,
  totalReviews = 0,
  size = 'md',
  showCount = true,
  className,
  readonly = true,
  onRatingChange,
}) => {
  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(star)}
            disabled={readonly}
            className={cn(
              'transition-colors duration-200',
              readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110',
              sizeClasses[size]
            )}
          >
            <svg
              className={cn(
                'fill-current',
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              )}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      
      {showCount && (
        <div className={cn('flex items-center gap-1', textSizeClasses[size])}>
          <span className="font-medium text-gray-900">{rating.toFixed(1)}</span>
          {totalReviews > 0 && (
            <span className="text-gray-500">
              ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Rating; 