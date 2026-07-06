import { Button } from '@/components/ui/button';
import { useContactPopup } from '@/context/ContactPopupContext';

export default function SiteCTA() {
  const { open: openContactPopup } = useContactPopup();

  return (
    <div className="relative z-10 translate-y-1/4 px-4 sm:translate-y-1/2">
      <div className="container">
        <div className="rounded-3xl bg-brand-green px-5 py-10 text-center shadow-2xl md:px-8 md:py-14">
          <h2 className="font-heading text-xl font-black text-white break-words sm:text-3xl md:text-4xl">Готовы начать сотрудничество?</h2>
          <p className="mt-3 text-base text-white/80 md:text-lg">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости проекта под ваши задачи.
          </p>
          <Button onClick={openContactPopup} className="mt-6 rounded-full bg-white px-8 py-3 text-sm font-bold text-brand-green hover:bg-white/90 md:mt-8 md:px-10 md:py-4 md:text-base">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
}