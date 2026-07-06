import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Политика конфиденциальности</span>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h1 className="font-heading text-3xl font-bold md:text-5xl">Политика конфиденциальности</h1>
          <p className="mt-4 text-neutral-500">Дата последнего обновления: 06.07.2026</p>

          <div className="mt-10 space-y-8 text-neutral-700 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">1. Общие положения</h2>
              <p className="mt-3">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                пользователей сайта MGroups (далее — «Компания»). Используя сайт и оставляя свои данные через формы
                обратной связи, пользователь соглашается с условиями настоящей Политики.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">2. Какие данные мы собираем</h2>
              <p className="mt-3">
                При заполнении форм на сайте Компания может собирать следующие персональные данные: ФИО, номер
                телефона, адрес электронной почты, содержание обращения.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">3. Цели обработки данных</h2>
              <p className="mt-3">
                Персональные данные используются исключительно для связи с пользователем, обработки заявок и
                предоставления информации об услугах Компании. Данные не передаются третьим лицам без согласия
                пользователя, за исключением случаев, предусмотренных законодательством РФ.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">4. Хранение и защита данных</h2>
              <p className="mt-3">
                Компания принимает необходимые организационные и технические меры для защиты персональных данных
                от несанкционированного доступа, изменения, раскрытия или уничтожения.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">5. Права пользователя</h2>
              <p className="mt-3">
                Пользователь вправе в любой момент отозвать согласие на обработку персональных данных, направив
                соответствующий запрос на электронную почту info@merch-groups.ru.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-neutral-900">6. Контакты</h2>
              <p className="mt-3">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться по адресу:
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
