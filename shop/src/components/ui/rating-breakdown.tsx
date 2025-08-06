import React from 'react';
import cn from 'classnames';

interface RatingBreakdownProps {
  rating: number;
  totalReviews: number;
  ratingDistribution?: {
    [key: number]: number;
  };
  className?: string;
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
  rating,
  totalReviews,
  ratingDistribution = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  },
  className,
}) => {
  const getPercentage = (count: number) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900">{rating.toFixed(1)}</div>
          <div className="text-sm text-gray-500">out of 5</div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">Rating breakdown</div>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <div className="flex items-center gap-1 w-8">
                <span className="text-xs text-gray-600">{star}</span>
                <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getPercentage(ratingDistribution[star] || 0)}%` }}
                />
              </div>
              <div className="w-8 text-xs text-gray-500 text-right">
                {ratingDistribution[star] || 0}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
      </div>
    </div>
  );
};

export default RatingBreakdown; 