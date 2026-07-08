import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { FadeIn, CITIES, NETWORKS } from './shared';

export default function MerchCoverage({
  citiesExpanded,
  setCitiesExpanded,
  networksExpanded,
  setNetworksExpanded,
}: {
  citiesExpanded: boolean;
  setCitiesExpanded: (v: boolean) => void;
  networksExpanded: boolean;
  setNetworksExpanded: (v: boolean) => void;
}) {
  return (
    <>
      {/* 7. Мерчандайзинг по городам */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Мерчандайзинг по городам</h2>
            <p className="mt-3 text-neutral-500">Работаем во всех крупных городах России</p>
          </FadeIn>
          <div className="mt-12 flex flex-wrap gap-3">
            {CITIES.map((city, i) => (
              <FadeIn key={city} delay={Math.floor(i / 6) * 60} className={i >= 14 && !citiesExpanded ? 'hidden sm:block' : ''}>
                <Link
                  to={`/merchandising/city/${city.toLowerCase().replace(/\s+/g, '-').replace(/ё/g, 'e')}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-brand-green hover:bg-brand-green/5 hover:text-brand-green shadow-sm"
                >
                  <Icon name="MapPin" size={13} className="text-brand-green" />
                  {city}
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setCitiesExpanded(!citiesExpanded)}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
            >
              {citiesExpanded ? 'Свернуть' : 'Показать все'}
              <Icon name={citiesExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Мерчандайзинг по сетям */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Мерчандайзинг по сетям</h2>
            <p className="mt-3 text-neutral-500">Сотрудничаем со всеми крупными торговыми сетями России</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {NETWORKS.map((net, i) => (
              <FadeIn key={net.name} delay={i * 50} className={i >= 8 && !networksExpanded ? 'hidden sm:block' : ''}>
                <Link
                  to={`/merchandising/network/${net.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                  className="group flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-neutral-200"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-lg font-black"
                    style={{ backgroundColor: net.color }}
                  >
                    {net.name.charAt(0)}
                  </div>
                  <span className="text-center text-xs font-semibold text-neutral-700 group-hover:text-brand-green transition-colors leading-tight">{net.name}</span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setNetworksExpanded(!networksExpanded)}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
            >
              {networksExpanded ? 'Свернуть' : 'Показать все'}
              <Icon name={networksExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}