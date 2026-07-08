import React from 'react';
import Icon from '@/components/ui/icon';
import { SOFTWARE, SlideIn, CoverageBlock, QualityBlock } from './shared';

export default function IndexCoverage() {
  return (
    <>
      {/* География покрытия */}
      <CoverageBlock />

      {/* Программное обеспечение */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Программное обеспечение</h2>
          <p className="mt-3 text-center text-neutral-500">Единая облачная система онлайн-отчётности Optimum</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {SOFTWARE.map((s, i) => (
              <SlideIn key={s.title} direction={i === 0 ? 'left' : 'right'} delay={i * 150} className="flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50" style={{ minHeight: '480px' }}>
                <div className="p-8">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10">
                    <Icon name={s.mobile ? 'Smartphone' : 'Monitor'} size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-neutral-600">{s.desc}</p>
                </div>
                <div className="mt-auto flex h-80 items-center justify-center p-4">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Контроль качества */}
      <QualityBlock />
    </>
  );
}