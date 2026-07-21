import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'cookie-consent-accepted';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-2xl bg-neutral-900 p-5 text-white shadow-2xl">
      <p className="text-sm leading-relaxed text-white/80">
        Мы используем куки-файлы и метрическую систему{' '}
        <a
          href="https://yandex.ru/legal/metrica_termsofuse/ru/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white underline hover:no-underline"
        >
          «Яндекс.Метрика»
        </a>{' '}
        (в т.ч. Вебвизор) в целях улучшения и обеспечения работоспособности сайта, обрабатываем персональные данные в соответствии с{' '}
        <Link to="/privacy-policy" target="_blank" className="font-medium text-white underline hover:no-underline">
          Политикой конфиденциальности
        </Link>{' '}
        и{' '}
        <Link to="/terms-of-use" target="_blank" className="font-medium text-white underline hover:no-underline">
          Согласием на обработку персональных данных
        </Link>. Если вы не согласны, пожалуйста, покиньте сайт.
      </p>
      <Button
        onClick={handleAccept}
        className="mt-4 w-full rounded-full bg-brand-green py-2 text-sm font-bold text-white hover:bg-brand-green/90"
      >
        Согласен
      </Button>
    </div>
  );
}
