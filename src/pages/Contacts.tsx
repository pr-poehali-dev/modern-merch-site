import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import funcUrls from '../../backend/func2url.json';

const PHONE_CARDS = [
  {
    name: 'Лилия',
    role: 'Руководитель проектов',
    num: '+7 931 342 23 37',
    tel: '+79313422337',
    photo: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/7168f727-885a-4b46-b242-3bd3156a5e92.jpg',
  },
  {
    name: 'Николоз',
    role: 'Менеджер по развитию',
    num: '+7 926 473 53 70',
    tel: '+79264735370',
    photo: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/b4a63390-7242-43e6-947f-eb108946bf2d.jpg',
  },
];

export default function Contacts() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !message.trim()) {
      toast.error('Заполните все поля');
      return;
    }
    if (!consent) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(funcUrls['contact-form'], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: fullName, phone, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Ошибка отправки');
      }
      toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      setFullName('');
      setPhone('');
      setMessage('');
      setConsent(false);
    } catch (err) {
      toast.error('Не удалось отправить заявку. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Контакты</span>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container">
          <h1 className="text-center font-heading text-3xl font-bold md:text-5xl">Контакты</h1>
          <p className="mt-3 text-center text-neutral-500">Свяжитесь с нами удобным способом — мы всегда на связи</p>

          {/* Карточки сотрудников */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
            {PHONE_CARDS.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="group flex flex-col items-center gap-6 rounded-3xl border border-neutral-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg hover:border-brand-green/30 sm:flex-row sm:text-left"
              >
                <img src={p.photo} alt={p.name} className="h-40 w-40 shrink-0 rounded-2xl object-cover" />
                <div>
                  <div className="text-2xl font-bold text-neutral-900 group-hover:text-brand-green transition-colors">{p.num}</div>
                  <div className="mt-2 text-base font-semibold text-neutral-700">{p.name}</div>
                  <div className="text-sm text-neutral-400">{p.role}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Адрес + Email */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-100 bg-neutral-50 px-6 py-3 text-sm font-semibold text-neutral-700">
              <Icon name="MapPin" size={18} className="text-brand-green shrink-0" />
              Россия, г. Москва, ул. Циолковского, д. 1, оф. 1
            </div>
            <a
              href="mailto:info@merch-groups.ru"
              className="inline-flex items-center gap-3 rounded-full bg-brand-green/10 px-7 py-3.5 text-base font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
            >
              <Icon name="Mail" size={20} />
              info@merch-groups.ru
            </a>
          </div>

          {/* Карта + форма */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-neutral-100 shadow-sm">
              <iframe
                title="Карта с адресом"
                src="https://yandex.ru/map-widget/v1/?text=Москва&z=12"
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-sm md:p-8">
              <h2 className="font-heading text-2xl font-bold text-neutral-900">Нужна консультация?</h2>
              <p className="mt-2 text-sm text-neutral-500">Оставьте заявку — мы перезвоним в течение рабочего дня</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <Label htmlFor="fullName">ФИО</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Иван Иванов"
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 900 000 00 00"
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Ваш вопрос</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Расскажите, чем мы можем помочь"
                    className="mt-2 min-h-[120px] bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-brand-green py-6 text-base font-bold text-white hover:bg-brand-green/90"
                >
                  {loading ? 'Отправляем...' : 'Отправить'}
                </Button>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(v) => setConsent(v === true)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="consent" className="text-xs font-normal leading-relaxed text-neutral-500">
                    Нажимая на кнопку «Отправить» я принимаю{' '}
                    <Link to="/privacy-policy" target="_blank" className="font-medium text-brand-green underline hover:no-underline">
                      политику конфиденциальности
                    </Link>{' '}
                    и даю согласие на{' '}
                    <Link to="/terms-of-use" target="_blank" className="font-medium text-brand-green underline hover:no-underline">
                      обработку персональных данных
                    </Link>.
                  </Label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}