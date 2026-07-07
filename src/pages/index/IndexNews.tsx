import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel';
import { NEWS, NewsCard, SlideIn } from './shared';

function parseDate(date: string) {
  const [day, month, year] = date.split('.').map(Number);
  return new Date(year, month - 1, day).getTime();
}

export default function IndexNews() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);
  const sortedNews = useMemo(() => [...NEWS].sort((a, b) => parseDate(b.date) - parseDate(a.date)), []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    api.on('select', () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SlideIn direction="left">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Новости</h2>
          <p className="mt-3 text-center text-neutral-500">Свежие материалы о жизни компании и полезные советы</p>
        </SlideIn>

        {/* Слайдер новостей: первые 3 видны сразу, остальные — по свайпу/стрелкам */}
        <div className="mt-12">
          <Carousel opts={{ align: 'start' }} setApi={setApi} className="px-2">
            <CarouselContent>
              {sortedNews.map((item) => (
                <CarouselItem key={item.id} className="py-2 sm:basis-1/2 lg:basis-1/3">
                  <NewsCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {count > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Слайд ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === selected ? 'w-6 bg-brand-green' : 'w-2 bg-neutral-200 hover:bg-neutral-300'}`}
              />
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full bg-brand-green px-8 py-3 text-sm font-bold text-white hover:bg-brand-green/90 md:px-10 md:py-4 md:text-base">
            <Link to="/news">Все новости</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}