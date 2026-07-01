import React from 'react';
import Icon from '@/components/ui/icon';
import { MAP_BG, MARKER, MAP_POINTS, SOFTWARE, QUALITY, SlideIn } from './shared';

export default function IndexCoverage() {
  return (
    <>
      {/* География покрытия */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Левая часть: заголовок + текст + статистика */}
            <SlideIn direction="left">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">География покрытия</h2>
              <p className="mt-3 text-neutral-500">
                Наши мерчендайзеры присутствуют по всей России — в каждом городе под Ваш проект.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  { num: '8', label: 'Федеральных округов' },
                  { num: '87+', label: 'Городов присутствия' },
                  { num: '5 000+', label: 'Ежедневных визитов' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="font-heading text-3xl font-black text-brand-green">{s.num}</span>
                    <span className="text-sm font-medium text-neutral-600">{s.label}</span>
                  </div>
                ))}
              </div>
            </SlideIn>

            {/* Правая часть: карта */}
            <SlideIn direction="right" className="relative overflow-hidden rounded-3xl">
              <img src={MAP_BG} alt="Карта покрытия MGroups" className="w-full" />
              {MAP_POINTS.map((p, i) => (
                <img
                  key={i}
                  src={MARKER}
                  alt=""
                  className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-scale-in drop-shadow-lg md:h-8 md:w-8"
                  style={{ top: p.top, left: p.left, animationDelay: `${i * 0.1}s` }}
                />
              ))}
              {/* Блоки статистики на карте */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg text-center">
                  <div className="font-heading text-2xl font-black text-brand-green">87</div>
                  <div className="text-xs font-medium text-neutral-600">регионов</div>
                </div>
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg text-center">
                  <div className="font-heading text-2xl font-black text-brand-blue">2 244</div>
                  <div className="text-xs font-medium text-neutral-600">сотрудника</div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

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
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          {/* Верхняя часть: заголовок слева, карточка справа */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">

            {/* Заголовок */}
            <SlideIn direction="left" className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">О контроле качества</span>
              <div className="mt-2 h-0.5 w-10 bg-brand-green" />
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight md:text-5xl">Контроль качества</h2>
              <p className="mt-4 text-lg text-neutral-500">Каждый отчёт проходит строгую проверку перед передачей Вам</p>
            </SlideIn>

            {/* Карточка 01 */}
            <SlideIn direction="right" className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
              <span className="absolute right-6 top-4 font-heading text-6xl font-black text-neutral-100 select-none">01</span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10">
                <Icon name="ShieldCheck" size={32} className="text-brand-green" />
              </div>
              <p className="relative text-neutral-700 leading-relaxed">
                <span className="font-bold text-black">{QUALITY[0][0]}</span>{QUALITY[0][1]}
              </p>
            </SlideIn>
          </div>

          {/* Нижние три карточки */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {QUALITY.slice(1).map(([bold, rest], i) => {
              const icons = ['ShieldAlert', 'ClipboardCheck', 'BadgeCheck'];
              const accents = ['bg-brand-blue', 'bg-brand-orange', 'bg-brand-green'];
              return (
                <SlideIn key={bold} direction="left" delay={i * 120} className={`relative overflow-hidden rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-lg ${i === 0 ? accents[0] + ' text-white' : 'bg-white'}`}>
                  <span className={`absolute right-6 top-4 font-heading text-6xl font-black select-none ${i === 0 ? 'text-white/20' : 'text-neutral-100'}`}>0{i + 2}</span>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${i === 0 ? 'bg-white/20' : accents[i] + '/10'}`}>
                    <Icon name={icons[i]} size={32} className={i === 0 ? 'text-white' : `text-${accents[i].replace('bg-', '')}`} />
                  </div>
                  <p className={`relative leading-relaxed ${i === 0 ? 'text-white/90' : 'text-neutral-700'}`}>
                    <span className={`font-bold ${i === 0 ? 'text-white' : 'text-black'}`}>{bold}</span>{rest}
                  </p>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}