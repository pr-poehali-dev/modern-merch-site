import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';

const Custom404 = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <section className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <div className="mx-auto flex h-60 w-60 items-center justify-center rounded-3xl bg-brand-green/10">
            <span className="font-heading text-6xl font-black text-brand-green">404</span>
          </div>
          <h1 className="mt-8 font-heading text-3xl font-black md:text-5xl">Страница не найдена</h1>
          <p className="mt-6 text-lg text-neutral-500">Запрашиваемая Вами страница не найдена, была перемещена или более не существует.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
          >
            <Icon name="ArrowLeft" size={16} />
            Перейти на главную
          </Link>
        </div>
      </section>

      <SiteCTA />
      <SiteFooter />
    </div>
  );
};

export default Custom404;