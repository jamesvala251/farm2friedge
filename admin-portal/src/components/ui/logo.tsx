import Link from '@/components/ui/link';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { miniSidebarInitialValue } from '@/utils/constants';
import { useWindowSize } from '@/utils/use-window-size';
import { RESPONSIVE_WIDTH } from '@/utils/constants';
import Image from 'next/image';

const Logo: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [miniSidebar, _] = useAtom(miniSidebarInitialValue);
  const { width } = useWindowSize();
  
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-3', className)}
    >
      {miniSidebar && width >= RESPONSIVE_WIDTH ? (
        // Mini sidebar - show only logo icon
        <div className="flex items-center justify-center w-20 h-20">
          <Image
            src="/logo.png"
            alt="Farm2Fridge"
            width={80}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>
      ) : (
        // Full sidebar - show only logo (no text)
        <div className="flex items-center justify-center w-32 h-32">
          <Image
            src="/logo.png"
            alt="Farm2Fridge"
            width={128}
            height={128}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </Link>
  );
};

export default Logo;
