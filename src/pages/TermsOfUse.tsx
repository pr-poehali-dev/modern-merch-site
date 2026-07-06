import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Пользовательское соглашение</span>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl font-bold md:text-5xl">Пользовательское соглашение</h1>
          <p className="mt-4 text-neutral-500">Дата последнего обновления: 06.07.2026</p>

          <div className="mt-10 space-y-8 text-neutral-700 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">1. Общие положения</h2>
              <p className="mt-3">
                Настоящее Пользовательское соглашение регулирует отношения между Компанией MGroups (далее —
                «Компания») и пользователями сайта. Используя сайт, пользователь подтверждает, что ознакомился с
                условиями настоящего Соглашения и принимает их в полном объёме.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">2. Предмет соглашения</h2>
              <p className="mt-3">
                Компания предоставляет пользователю доступ к информации об услугах, размещённой на сайте, а также
                возможность оставить заявку через формы обратной связи.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">3. Права и обязанности сторон</h2>
              <p className="mt-3">
                Пользователь обязуется предоставлять достоверную информацию при заполнении форм на сайте и не
                использовать сайт в целях, противоречащих законодательству РФ. Компания обязуется обеспечивать
                корректную работу сайта и своевременно обрабатывать поступающие заявки.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">4. Ответственность</h2>
              <p className="mt-3">
                Компания не несёт ответственности за временную недоступность сайта по техническим причинам, а также
                за действия пользователя, повлёкшие нарушение работы сайта.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">5. Изменение условий</h2>
              <p className="mt-3">
                Компания оставляет за собой право вносить изменения в настоящее Соглашение в одностороннем порядке.
                Актуальная версия всегда доступна на данной странице.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">6. Контакты</h2>
              <p className="mt-3">
                По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться по адресу:
                info@merch-groups.ru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
