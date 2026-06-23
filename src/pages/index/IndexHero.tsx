import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { HERO_BG, STATS, CountUp } from './shared';

export default function IndexHero() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-neutral-50">
        <img src={HERO_BG} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 container py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-brand-green/10 px-4 py-1 text-sm font-semibold text-brand-green ring-1 ring-brand-green/30">
              Агентство мерчандайзинга №1
            </div>
            <h1 className="font-heading text-3xl font-black leading-tight text-neutral-900 sm:text-4xl md:text-7xl">
              MerchGroups — агентство мерчандайзинга
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-500">
              Специализированное агентство, предоставляющее услуги по мерчандайзингу, проведению независимого аудита, техническому мерчандайзингу и организации промоакций и праздничных мероприятий.
            </p>
            <Button size="lg" className="mt-8 rounded-full bg-brand-green px-6 text-sm font-bold text-white hover:bg-brand-green/90 sm:px-8 sm:text-base">
              Получить расчет стоимости
              <Icon name="ArrowRight" size={16} className="ml-2 shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* Цифры под hero */}
      <section className="border-b border-neutral-100 bg-white py-12">
        <div className="container grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-shadow hover:shadow-xl">
              <CountUp value={s.num} className={`font-heading text-5xl font-black ${s.color}`} />
              <div className="mt-3 font-heading text-lg font-bold">{s.title}</div>
              <p className="mt-2 text-sm text-neutral-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}