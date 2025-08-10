import '../assets/css/main.css';
import type { AppProps } from 'next/app';
import { UIProvider } from '@/contexts/ui.context';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import { SettingsProvider } from '@/contexts/settings.context';
import { CartProvider } from '@/contexts/quick-cart/cart.context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <SettingsProvider>
        <CartProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </CartProvider>
      </SettingsProvider>
    </UIProvider>
  );
} 