import { USFlagRound } from '@/components/icons/flags/USFlagRound';

export default function LanguageSwitcher() {
  return (
    <div className="lg:ms-0 relative z-10">
      <div className="relative flex h-full w-full cursor-pointer items-center rounded-full border border-border-200 bg-light p-1 text-[13px] font-semibold focus:outline-0 xl:border-solid xl:text-sm xl:text-heading">
        <span className="relative block h-7 w-7 overflow-hidden rounded-full">
          <span className="relative top-0 block">
            <USFlagRound />
          </span>
        </span>
      </div>
    </div>
  );
}
