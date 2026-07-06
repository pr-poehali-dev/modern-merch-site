import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { NEWS, NewsCard, SlideIn } from './shared';

export default function IndexNews() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <SlideIn direction="left">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Новости</h2>
          <p className="mt-3 text-center text-neutral-500">Свежие материалы о жизни компании и полезные советы</p>
        </SlideIn>

        {/* Слайдер новостей: первые 3 видны сразу, остальные — по свайпу/стрелкам */}
        <div className="mt-12">
          <Carousel opts={{ align: 'start' }} className="px-2">
            <CarouselContent>
              {NEWS.map((item) => (
                <CarouselItem key={item.id} className="py-2 sm:basis-1/2 lg:basis-1/3">
                  <NewsCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full bg-brand-green px-8 py-3 text-sm font-bold text-white hover:bg-brand-green/90 md:px-10 md:py-4 md:text-base">
            <Link to="/news">Все новости</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}