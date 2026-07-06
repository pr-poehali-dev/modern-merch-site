import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { NEWS } from '@/pages/index/shared';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[«»,.:;!?"']/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function NewsDetail() {
  const { id } = useParams();
  const item = NEWS.find((n) => String(n.id) === id);

  const { html, headings } = useMemo(() => {
    if (!item?.content) return { html: '', headings: [] as { id: string; text: string }[] };

    const collected: { id: string; text: string }[] = [];
    const used = new Set<string>();

    const withIds = item.content.replace(/<h2>(.*?)<\/h2>/g, (_match, text) => {
      let slug = slugify(text);
      let unique = slug;
      let i = 2;
      while (used.has(unique)) {
        unique = `${slug}-${i}`;
        i += 1;
      }
      used.add(unique);
      collected.push({ id: unique, text });
      return `<h2 id="${unique}">${text}</h2>`;
    });

    return { html: withIds, headings: collected };
  }, [item]);

  if (!item) {
    return <Navigate to="/news" replace />;
  }

  const scrollToHeading = (headingId: string) => {
    const el = document.getElementById(headingId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <Link to="/news" className="hover:text-brand-green transition-colors">Новости</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800 line-clamp-1">{item.title}</span>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl">{item.title}</h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Icon name="User" size={15} />
              {item.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Calendar" size={15} />
              {item.date}
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div>
              {(item.intro || item.desc).split('\n\n').map((p, i) => (
                <p key={i} className="mt-4 text-base leading-relaxed text-neutral-600 first:mt-0 md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {headings.length > 0 && (
            <div className="mt-12 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 md:p-8">
              <h2 className="font-heading text-lg font-bold text-neutral-900">Содержание</h2>
              <ul className="mt-4 space-y-2">
                {headings.map((h, i) => (
                  <li key={h.id}>
                    <button
                      onClick={() => scrollToHeading(h.id)}
                      className="flex items-center gap-2 text-left text-sm text-neutral-600 transition-colors hover:text-brand-green"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-[11px] font-bold text-brand-green">{i + 1}</span>
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {html && (
            <article
              className="mt-12 text-base leading-relaxed text-neutral-700 md:text-lg [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-neutral-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:scroll-mt-24 md:[&_h2]:text-3xl [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:before:content-[''] [&_li]:before:mt-2.5 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-brand-green [&_strong]:text-neutral-900 [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </section>

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}