import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { NEWS, NewsCard, NewsTag } from '@/pages/index/shared';

const TAGS: NewsTag[] = ['новость', 'статья', 'полезно знать'];

export default function News() {
  const [active, setActive] = useState<NewsTag | 'все'>('все');
  const filtered = active === 'все' ? NEWS : NEWS.filter((n) => n.tag === active);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <SiteHeader />

      <section className="py-16 md:py-20">
        <div className="container">
          <h1 className="text-center font-heading text-3xl font-bold md:text-5xl">Новости</h1>
          <p className="mt-3 text-center text-neutral-500">Все материалы о жизни компании и полезные советы</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActive('все')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${active === 'все' ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
            >
              Все
            </button>
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${active === tag ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}
