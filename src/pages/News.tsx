import { useState, useMemo } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { NEWS, NewsCard, NewsTag } from '@/pages/index/shared';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

const TAGS: NewsTag[] = ['новость', 'статья', 'полезно знать'];
const PER_PAGE = 9;

function parseDate(date: string) {
  const [day, month, year] = date.split('.').map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function News() {
  const [active, setActive] = useState<NewsTag | 'все'>('все');
  const [page, setPage] = useState(1);
  const sorted = useMemo(() => [...NEWS].sort((a, b) => parseDate(b.date) - parseDate(a.date)), []);
  const filtered = active === 'все' ? sorted : sorted.filter((n) => n.tag === active);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = useMemo(
    () => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [filtered, page]
  );

  const selectTag = (tag: NewsTag | 'все') => {
    setActive(tag);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <SiteHeader />

      <section className="py-16 md:py-20">
        <div className="container">
          <h1 className="text-center font-heading text-3xl font-bold md:text-5xl">Новости</h1>
          <p className="mt-3 text-center text-neutral-500">Все материалы о жизни компании и полезные советы</p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => selectTag('все')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${active === 'все' ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
            >
              Все
            </button>
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => selectTag(tag)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${active === tag ? 'bg-brand-green text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink
                    size="default"
                    onClick={() => page > 1 && goToPage(page - 1)}
                    className={page === 1 ? 'pointer-events-none opacity-40' : 'cursor-pointer'}
                  >
                    Пред.
                  </PaginationLink>
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={p === page}
                      onClick={() => goToPage(p)}
                      className="cursor-pointer"
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationLink
                    size="default"
                    onClick={() => page < totalPages && goToPage(page + 1)}
                    className={page === totalPages ? 'pointer-events-none opacity-40' : 'cursor-pointer'}
                  >
                    След.
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}