import Icon from '@/components/ui/icon';
import { FadeIn, CLIENTS, CasesShowcase, WorkflowBlocks } from './shared';

export default function MerchShowcase({ clientsExpanded, setClientsExpanded }: { clientsExpanded: boolean; setClientsExpanded: (v: boolean) => void }) {
  return (
    <>
      {/* 4. Наши мерчандайзеры обеспечат */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Наши мерчандайзеры обеспечат:</h2>
          </FadeIn>
          <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { text: 'Привлекательную и эффективную выкладку товара в магазинах', icon: 'LayoutGrid' },
              { text: 'Актуальные ценники и маркировки — без ошибок и неточностей', icon: 'Tag' },
              { text: 'Своевременное пополнение запасов, чтобы товар всегда был в наличии', icon: 'RefreshCw' },
              { text: 'Рост лояльности покупателей к вашему бренду', icon: 'Heart' },
              { text: 'Безупречный порядок и презентабельный вид продукции на полках', icon: 'Sparkles' },
              { text: 'Профессиональные консультации для покупателей, чтобы подчеркнуть сильные стороны вашего товара', icon: 'MessageSquare' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80} className="h-full">
                <div className="flex h-full gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/20">
                    <Icon name={item.icon} size={24} className="text-brand-green" />
                  </div>
                  <p className="text-white/85 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Наши клиенты */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-16">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-heading text-2xl font-bold">Наши клиенты</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENTS.map((src, i) => (
              <FadeIn key={i} delay={i * 40} className={`${i >= 6 && !clientsExpanded ? 'hidden sm:block' : ''}`}>
                <div className="flex h-24 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <img src={src} alt={`Клиент ${i + 1}`} className="max-h-full max-w-full object-contain" />
                </div>
              </FadeIn>
            ))}
          </div>
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

      {/* 6. Примеры работ */}
      <CasesShowcase />

      {/* 7. Наш подход / Контроль качества */}
      <WorkflowBlocks />
    </>
  );
}