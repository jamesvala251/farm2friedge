import { WorldIcon } from '@/components/icons/worldIcon';

export default function LanguageSwitcher() {
  return (
    <div className="min-w-90 relative z-10 py-2 sm:border-gray-200/80 sm:py-3 sm:border-s lg:py-4 lg:pe-6 lg:ms-0">
      <div className="gap-3r relative flex w-full cursor-pointer items-end rounded px-1.5 py-0.5 text-[13px] font-semibold text-heading text-start sm:px-6 xl:text-sm">
        <span className="hidden lg:block">
          <span className="text-xs font-medium text-gray-400">
            Language
          </span>
          <span className="flex items-center truncate font-medium text-black">
            English
          </span>
        </span>
        <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-[#F8F8FA] py-4 text-[#666666] lg:hidden xl:hidden">
          <WorldIcon className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
