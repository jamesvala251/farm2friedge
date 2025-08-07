import { formatNumber } from '@/utils/format-number';

const DonutChartWidget = ({ series, labels }: any) => {
  return (
    <div className="bg-light shadow-sm rounded w-full h-full">
      <div className="flex w-full my-auto mx-0 py-12 px-9">
        <div className="w-5/12 flex flex-col items-center justify-center py-12 pe-8">
          <span className="text-xs text-body mb-1 whitespace-nowrap">
            {labels[0]}
          </span>

          <span className="text-xl text-heading font-semibold">
            {formatNumber(series[0])}
          </span>
        </div>

        <div className="w-7/12 flex flex-col">
          <div className="w-full flex flex-col mb-4 pe-12 last:mb-0">
            <div className="w-full flex items-baseline mb-3">
              <span className="text-sm text-heading font-semibold">
                {labels[0]}
              </span>
              <span className="text-xs font-semibold  text-heading ms-2">
                ({formatNumber(series[0])})
              </span>
            </div>
            {/* Simple donut chart representation */}
            <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">{formatNumber(series[0])}</div>
                <div className="text-xs text-gray-600">{labels[0]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex border border-border-100">
        <div className="w-full flex flex-wrap  flex-shrink-0 py-5 px-5 md:px-4 justify-around">
          {series.map((value: number, index: number) => (
            <div
              className="w-1/2 md:w-1/4 flex flex-col justify-between py-4 px-4 md:px-3"
              key={index}
            >
              <span className="text-xs text-body mb-1 whitespace-nowrap truncate">
                <span
                  className="w-2 h-2 inline-block rounded-full me-1"
                  style={{
                    backgroundColor: index === 0 ? '#10B981' : '#F59E0B',
                  }}
                />
                {labels[index]}
              </span>
              <span className="text-xl text-heading font-semibold">
                {formatNumber(series[index])}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChartWidget;
