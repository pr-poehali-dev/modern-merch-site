import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import funcUrls from '../../backend/func2url.json';

type ContactPopupFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactPopupForm({ open, onOpenChange }: ContactPopupFormProps) {
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
      onOpenChange(false);
    } catch (err) {
      toast.error('Не удалось отправить заявку. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-neutral-900">Нужна консультация?</DialogTitle>
          <p className="mt-1 text-sm text-neutral-500">Оставьте заявку — мы перезвоним в течение рабочего дня</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-2 space-y-5">
          <div>
            <Label htmlFor="popup-fullName">ФИО</Label>
            <Input
              id="popup-fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Иван Иванов"
              className="mt-2 bg-white"
            />
          </div>
          <div>
            <Label htmlFor="popup-phone">Телефон</Label>
            <Input
              id="popup-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 900 000 00 00"
              className="mt-2 bg-white"
            />
          </div>
          <div>
            <Label htmlFor="popup-message">Ваш вопрос</Label>
            <Textarea
              id="popup-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Расскажите, чем мы можем помочь"
              className="mt-2 min-h-[100px] bg-white"
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
              id="popup-consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="popup-consent" className="text-xs font-normal leading-relaxed text-neutral-500">
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
      </DialogContent>
    </Dialog>
  );
}
