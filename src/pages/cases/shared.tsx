import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export type CaseCategory = 'Мерчандайзинг' | 'Технический мерчандайзинг' | 'BTL услуги + Организация дегустаций';

export interface CaseItem {
  id: number;
  title: string;
  category: CaseCategory;
  description: string;
  photos: string[];
}

const IMG = {
  shelfWide: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d4b008e4-d5fe-4964-b0bb-24383acb35ca.jpg',
  shelfCloseup: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/38afcf42-ba2b-4832-8613-d2827433508f.jpg',
  aisleWide: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/9684ea90-80bd-47bd-ac09-b0de4a2f3091.jpg',
  cosmetics: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/1f0f7f8d-8c61-4e0e-90cb-680c47262518.jpg',
  merchandiser: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/ca21f882-5073-49b0-acd8-80a848d1e9d6.jpg',
  neatRows: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/79c41586-f7f2-488b-95d3-5d0e5217ba7d.jpg',
  beverages: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/8b6c9089-c8ff-4a0b-87fb-a030609b1f6b.jpg',
  snacks: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/af368e9f-2d55-42cb-8649-804f10dd148d.jpg',
  household: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/37ff7b7f-e34c-470c-8661-66924baacb18.jpg',
  dairy: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d3446be2-8e16-4216-9c99-eba6d969ce40.jpg',
  approach: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/4bbd1a4c-118d-48f8-b1c4-b90a30637d01.jpg',
  quality: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d536c6e7-cc98-4a48-a349-f359d104bc01.jpg',
};

export const CASE_CATEGORIES: CaseCategory[] = ['Мерчандайзинг', 'Технический мерчандайзинг', 'BTL услуги + Организация дегустаций'];

export const CASES: CaseItem[] = [
  { id: 1, title: 'Супермаркет «Фреш»', category: 'Мерчандайзинг', description: 'Перестроили выкладку по планограмме и увеличили долю полки бренда — рост продаж в категории составил 23% за квартал.', photos: [IMG.shelfWide, IMG.shelfCloseup] },
  { id: 2, title: 'Магазин косметики «Белль»', category: 'Мерчандайзинг', description: 'Наладили регулярную ротацию ассортимента и контроль ценников — количество жалоб на неактуальные цены снизилось до нуля.', photos: [IMG.cosmetics, IMG.neatRows] },
  { id: 3, title: 'Сеть напитков «АкваМир»', category: 'Мерчандайзинг', description: 'Внедрили визитный мерчандайзинг в 40 точках сети — товар всегда в наличии, а выкладка соответствует стандартам бренда.', photos: [IMG.beverages, IMG.aisleWide] },
  { id: 4, title: 'Гипермаркет «Домашний»', category: 'Мерчандайзинг', description: 'Организовали выделенного мерчандайзера в зале бытовой химии — рост оборачиваемости товара на 15% за два месяца.', photos: [IMG.household, IMG.dairy] },

  { id: 5, title: 'Оснащение ТЦ «Галерея»', category: 'Технический мерчандайзинг', description: 'Установили торговое оборудование и POS-материалы на 12 точках продаж в рамках запуска нового бренда.', photos: [IMG.merchandiser, IMG.shelfWide] },
  { id: 6, title: 'Сеть «Продукты 24»', category: 'Технический мерчандайзинг', description: 'Провели логистику и монтаж брендированных стеллажей в 25 магазинах сети за две недели.', photos: [IMG.aisleWide, IMG.neatRows] },
  { id: 7, title: 'Магазин «Бытовая техника Плюс»', category: 'Технический мерчандайзинг', description: 'Изготовили и установили индивидуальные POS-конструкции под формат торгового зала клиента.', photos: [IMG.household, IMG.shelfCloseup] },
  { id: 8, title: 'Дрогери «Аптека+»', category: 'Технический мерчандайзинг', description: 'Обеспечили замеры и утилизацию устаревшего оборудования перед установкой нового брендированного стенда.', photos: [IMG.cosmetics, IMG.dairy] },

  { id: 9, title: 'Дегустация в «Гастрономе»', category: 'BTL услуги + Организация дегустаций', description: 'Провели серию дегустаций новой линейки продукции — конверсия в покупку составила 34% от числа попробовавших.', photos: [IMG.snacks, IMG.beverages] },
  { id: 10, title: 'Промоакция бренда напитков', category: 'BTL услуги + Организация дегустаций', description: 'Организовали промоакцию с розыгрышем по чекам в 18 торговых точках — рост продаж бренда на 40% за период акции.', photos: [IMG.beverages, IMG.snacks] },
  { id: 11, title: 'Праздничное мероприятие в ТЦ', category: 'BTL услуги + Организация дегустаций', description: 'Подобрали и обучили промоперсонал для праздничного мероприятия — более 500 гостей за один день.', photos: [IMG.approach, IMG.quality] },
  { id: 12, title: 'Ротация промоперсонала в сети супермаркетов', category: 'BTL услуги + Организация дегустаций', description: 'Обеспечили непрерывную ротацию промоперсонала для долгосрочной акции в 30 магазинах сети.', photos: [IMG.quality, IMG.approach] },
];

export function CaseCard({ item, onOpen }: { item: CaseItem; onOpen: (item: CaseItem, photoIndex: number) => void }) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c - 1 + item.photos.length) % item.photos.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % item.photos.length); };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div
        className="group relative aspect-square cursor-pointer overflow-hidden"
        onClick={() => onOpen(item, current)}
      >
        <div
          className="flex h-full w-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {item.photos.map((src, i) => (
            <img key={i} src={src} alt={`${item.title} — фото ${i + 1}`} className="h-full w-full shrink-0 object-cover" />
          ))}
        </div>

        {item.photos.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 hover:bg-white"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 hover:bg-white"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Фото ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-semibold text-neutral-900">{item.title}</p>
        <p className="mt-1 text-sm text-brand-green">{item.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.description}</p>
      </div>
    </div>
  );
}

export function CaseLightbox({ item, initialIndex, open, onOpenChange }: {
  item: CaseItem | null;
  initialIndex: number;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => { setIndex(initialIndex); }, [initialIndex, item]);

  if (!item) return null;

  const prev = () => setIndex((i) => (i - 1 + item.photos.length) % item.photos.length);
  const next = () => setIndex((i) => (i + 1) % item.photos.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl p-0">
        <div className="relative aspect-square bg-neutral-100">
          <img src={item.photos[index]} alt={`${item.title} — фото ${index + 1}`} className="h-full w-full object-cover" />
          {item.photos.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Предыдущее фото"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 shadow transition-colors hover:bg-white"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Следующее фото"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 shadow transition-colors hover:bg-white"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {item.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Фото ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-green' : 'w-1.5 bg-neutral-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-6">
          <p className="font-heading text-xl font-bold text-neutral-900">{item.title}</p>
          <p className="mt-1 text-sm text-brand-green">{item.category}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
