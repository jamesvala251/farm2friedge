import cn from 'classnames';
import Link from '@/components/ui/link';
import Image from 'next/image';

const Logo: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <Link href="/" className={cn('inline-flex', className)}>
      <div className="flex items-center justify-center w-32 h-32">
        <Image
          src="/logo.png"
          alt="Farm2Fridge"
          width={128}
          height={128}
          className="w-full h-auto object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
