import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { FadeIn, Calculator, MerchTypeCard, MERCH_TYPES } from './shared';

export default function MerchHero() {
  return (
    <>
      {/* 1. Заголовок + вступление */}
      <section className="relative overflow-hidden bg-brand-green py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
        <div className="container relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <FadeIn>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">Услуга</span>
              <h1 className="font-heading text-3xl font-black text-white sm:text-5xl md:text-7xl leading-tight">Мерчандайзинг</h1>
              <p className="mt-4 max-w-2xl text-base text-white/85 leading-relaxed sm:mt-6 sm:text-xl">
                Профессиональное размещение товаров, управление полочным пространством и выкладкой продукции в торговых точках.
              </p>
              <Button className="mt-10 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-green hover:bg-white/90">
                Получить консультацию
              </Button>
            </FadeIn>
            <FadeIn delay={150} className="hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/24f3eaea-b198-4f26-9a6a-1bf6e0d20721.jpg"
                alt="Мерчандайзинг"
                className="w-full rounded-3xl object-cover shadow-2xl"
                style={{ maxHeight: 380 }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Преимущества */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Преимущества</h2>
            <p className="mt-3 text-lg text-neutral-500">Доверьте мерчандайзинг нашему агентству — и получите:</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { text: 'Экономию бюджета и высвобождение кадровых ресурсов вашей компании', icon: 'PiggyBank' },
              { text: 'Стабильное наличие товара на полках без «провалов» ассортимента', icon: 'Package' },
              { text: 'Снижение объёмов возвратов благодаря продуманной ротации продукции', icon: 'TrendingDown' },
              { text: 'Отсутствие необходимости контролировать работу мерчандайзеров', icon: 'ShieldCheck' },
              { text: 'Надёжное и постоянное сопровождение от опытного специалиста', icon: 'Handshake' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <div className="flex h-full gap-5 rounded-3xl bg-neutral-50 p-7 hover:bg-brand-green/5 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10">
                    <Icon name={item.icon} size={24} className="text-brand-green" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Калькулятор стоимости */}
      <Calculator />

      {/* 4. Виды мерчандайзинга */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Виды мерчандайзинга</h2>
            <p className="mt-3 text-neutral-500">Нажмите на карточку, чтобы узнать подробнее</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MERCH_TYPES.map((t, idx) => (
              <MerchTypeCard key={t.title} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
