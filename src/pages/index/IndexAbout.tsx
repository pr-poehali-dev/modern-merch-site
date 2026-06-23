import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { CLIENTS, MissionBlock, PhilosophyBlock } from './shared';

export default function IndexAbout() {
  const [clientsExpanded, setClientsExpanded] = useState(false);

  return (
    <>
      {/* Миссия и философия */}
      <section className="py-20 md:py-28">
        <div className="container">
          <MissionBlock />
          <PhilosophyBlock />
        </div>
      </section>

      {/* Клиенты */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-16">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold">Наши клиенты</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENTS.map((src, i) => (
              <div
                key={i}
                className={`flex h-24 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${i >= 6 && !clientsExpanded ? 'hidden sm:flex' : ''}`}
              >
                <img src={src} alt={`Клиент ${i + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          {/* Кнопка "показать все" — только на мобильных */}
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setClientsExpanded(!clientsExpanded)}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
            >
              {clientsExpanded ? 'Свернуть' : 'Показать все'}
              <Icon name={clientsExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
