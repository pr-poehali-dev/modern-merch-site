import { Button } from '@/components/ui/button';

export default function SiteCTA() {
  return (
    <div className="relative z-10 translate-y-1/2 px-4">
      <div className="container">
        <div className="rounded-3xl bg-brand-green px-8 py-14 text-center shadow-2xl">
          <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Готовы начать сотрудничество?</h2>
          <p className="mt-3 text-lg text-white/80">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости проекта под ваши задачи.
          </p>
          <Button className="mt-8 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-green hover:bg-white/90">
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  );
}
