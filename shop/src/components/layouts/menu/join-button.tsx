import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { ButtonProps } from '@/types';

export default function JoinButton({
  title = 'join-button',
  size = 'small',
  className = 'font-semibold',
}: Pick<ButtonProps, 'title' | 'size' | 'className'>) {
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }
  return (
    <Button className={className} size={size} onClick={handleJoin}>
      {title === 'join-button' ? 'Join' : title}
    </Button>
  );
}
