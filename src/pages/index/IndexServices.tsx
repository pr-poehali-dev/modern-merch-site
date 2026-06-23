import React from 'react';
import { SERVICES_ROW1, SERVICES_ROW2, ADVANTAGES, ServiceCard, SlideIn } from './shared';

export default function IndexServices() {
  return (
    <>
      {/* Основные услуги */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Основные услуги</h2>
          <p className="mt-3 text-center text-neutral-500">Полный спектр услуг для роста ваших продаж</p>
          {/* Ряд 1: 2 блока */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES_ROW1.map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx} />
            ))}
          </div>
          {/* Ряд 2: 3 блока */}
          <div className="mt-4 grid gap-4 md:grid-cols-3 md:grid-rows-1 md:[&>*]:h-full">
            {SERVICES_ROW2.map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative grid items-center gap-16 lg:grid-cols-2">
          {/* Левая часть */}
          <SlideIn direction="left" className="flex flex-col justify-center">
            <h2 className="font-heading text-5xl font-black leading-none text-neutral-900 md:text-6xl">Merch<br />Groups</h2>
            <div className="mt-8 space-y-5">
              <div className="border-l-4 border-brand-green pl-5">
                <p className="text-xl font-semibold text-neutral-800 leading-snug">
                  Мы не просто красиво выкладываем товар на полки
                </p>
              </div>
              <div className="border-l-4 border-neutral-200 pl-5">
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Мы делаем это из расчёта особенностей{' '}
                  <span className="font-heading font-bold italic text-brand-green">вашей целевой аудитории</span>
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Правая часть — 4 преимущества */}
          <SlideIn direction="right" className="grid gap-5 sm:grid-cols-2">
            {ADVANTAGES.map((a, i) => (
              <div key={a} className="group rounded-2xl bg-neutral-50 p-6 transition-all hover:bg-brand-green/5 hover:shadow-md">
                <div className="mb-3 font-heading text-4xl font-black text-brand-green/20 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{a}</p>
              </div>
            ))}
          </SlideIn>
        </div>
      </section>
    </>
  );
}
