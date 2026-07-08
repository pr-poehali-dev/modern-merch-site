import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel';

export type CaseCategory = 'Мерчандайзинг' | 'Технический мерчандайзинг' | 'BTL услуги + Организация дегустаций';

export interface CaseWorkBlock {
  title: string;
  desc: string;
}

export interface CaseItem {
  id: number;
  title: string;
  category: CaseCategory;
  description: string;
  photos: string[];
  task: string;
  whatDone: CaseWorkBlock[];
  result: string;
  conclusion: string;
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
  {
    id: 1, title: 'Супермаркет «Фреш»', category: 'Мерчандайзинг',
    description: 'Перестроили выкладку по планограмме и увеличили долю полки бренда — рост продаж в категории составил 23% за квартал.',
    photos: [IMG.shelfWide, IMG.shelfCloseup, IMG.aisleWide],
    task: 'Клиент столкнулся с падением продаж в категории из-за хаотичной выкладки товара и несоблюдения планограммы на полках. Требовалось навести порядок и повысить видимость бренда для покупателя.',
    whatDone: [
      { title: 'Аудит текущей выкладки', desc: 'Провели фотоотчёт по всем точкам и сравнили фактическую выкладку с утверждённой планограммой.' },
      { title: 'Перестройка полочного пространства', desc: 'Выстроили выкладку согласно планограмме, расширили фейсинг ключевых SKU.' },
      { title: 'Регулярный контроль', desc: 'Закрепили мерчандайзера на визитном формате для поддержания порядка на постоянной основе.' },
    ],
    result: 'Рост продаж в категории на 23% за квартал, доля полки бренда увеличилась с 12% до 19%.',
    conclusion: 'Системный подход к выкладке и регулярный контроль позволили клиенту не просто навести порядок на полке, а получить измеримый рост продаж уже в первый квартал работы.',
  },
  {
    id: 2, title: 'Магазин косметики «Белль»', category: 'Мерчандайзинг',
    description: 'Наладили регулярную ротацию ассортимента и контроль ценников — количество жалоб на неактуальные цены снизилось до нуля.',
    photos: [IMG.cosmetics, IMG.neatRows, IMG.shelfCloseup],
    task: 'Сеть магазинов косметики регулярно получала жалобы покупателей на несоответствие цен на ценниках и на кассе, а также на просроченную продукцию на полках.',
    whatDone: [
      { title: 'Внедрение чек-листа контроля', desc: 'Разработали чек-лист проверки актуальности ценников для ежедневных визитов.' },
      { title: 'Ротация по срокам годности', desc: 'Настроили процесс регулярной проверки и ротации продукции по FIFO.' },
      { title: 'Фотоотчётность', desc: 'Каждый визит фиксировался фотографиями для контроля качества со стороны клиента.' },
    ],
    result: 'Количество жалоб на неактуальные цены снизилось до нуля, а списания просроченной продукции сократились на 30%.',
    conclusion: 'Регулярный контроль и прозрачная отчётность помогли выстроить доверие между клиентом и командой мерчандайзеров.',
  },
  {
    id: 3, title: 'Сеть напитков «АкваМир»', category: 'Мерчандайзинг',
    description: 'Внедрили визитный мерчандайзинг в 40 точках сети — товар всегда в наличии, а выкладка соответствует стандартам бренда.',
    photos: [IMG.beverages, IMG.aisleWide, IMG.neatRows],
    task: 'Клиенту требовалось обеспечить единый стандарт выкладки в 40 точках продаж по всему региону при ограниченном бюджете на постоянный персонал.',
    whatDone: [
      { title: 'Разработка маршрута визитов', desc: 'Составили оптимальный маршрут посещения точек для визитных мерчандайзеров.' },
      { title: 'Обучение стандартам бренда', desc: 'Провели обучение полевой команды корпоративным стандартам выкладки.' },
      { title: 'Мониторинг остатков', desc: 'Настроили еженедельный контроль наличия ассортимента в каждой точке.' },
    ],
    result: 'Наличие товара в точках выросло до 98%, стандарты выкладки соблюдаются во всех 40 магазинах сети.',
    conclusion: 'Визитный формат оказался оптимальным решением для сети такого масштаба — задача решена без затрат на постоянный штат.',
  },
  {
    id: 4, title: 'Гипермаркет «Домашний»', category: 'Мерчандайзинг',
    description: 'Организовали выделенного мерчандайзера в зале бытовой химии — рост оборачиваемости товара на 15% за два месяца.',
    photos: [IMG.household, IMG.dairy, IMG.neatRows],
    task: 'В отделе бытовой химии гипермаркета наблюдалась низкая оборачиваемость товара и частые виртуальные остатки.',
    whatDone: [
      { title: 'Выделенный специалист', desc: 'Закрепили сотрудника, работающего в зале на протяжении всего рабочего дня.' },
      { title: 'Устранение виртуальных остатков', desc: 'Провели сверку фактических остатков с данными в системе учёта.' },
      { title: 'Оптимизация выкладки', desc: 'Перестроили выкладку с учётом сезонного спроса и оборачиваемости SKU.' },
    ],
    result: 'Оборачиваемость товара выросла на 15% за два месяца, виртуальные остатки сведены к минимуму.',
    conclusion: 'Выделенный формат обслуживания показал себя эффективным решением для точки с высоким трафиком и широким ассортиментом.',
  },
  {
    id: 5, title: 'Оснащение ТЦ «Галерея»', category: 'Технический мерчандайзинг',
    description: 'Установили торговое оборудование и POS-материалы на 12 точках продаж в рамках запуска нового бренда.',
    photos: [IMG.merchandiser, IMG.shelfWide, IMG.aisleWide],
    task: 'При запуске нового бренда клиенту требовалось в сжатые сроки оснастить 12 точек продаж фирменным оборудованием и POS-материалами.',
    whatDone: [
      { title: 'Логистика оборудования', desc: 'Организовали доставку торгового оборудования во все 12 точек в единый срок.' },
      { title: 'Монтаж POS-материалов', desc: 'Установили брендированные конструкции и рекламные материалы согласно брендбуку.' },
      { title: 'Контроль качества установки', desc: 'Провели финальную проверку каждой точки с фотоотчётом для клиента.' },
    ],
    result: 'Все 12 точек оснащены в срок 10 дней, запуск бренда прошёл без задержек.',
    conclusion: 'Слаженная логистика и монтаж под ключ позволили клиенту сосредоточиться на маркетинге запуска, не отвлекаясь на техническую часть.',
  },
  {
    id: 6, title: 'Сеть «Продукты 24»', category: 'Технический мерчандайзинг',
    description: 'Провели логистику и монтаж брендированных стеллажей в 25 магазинах сети за две недели.',
    photos: [IMG.aisleWide, IMG.neatRows, IMG.merchandiser],
    task: 'Сеть магазинов «Продукты 24» проводила ребрендинг и нуждалась в замене торгового оборудования в 25 точках в сжатые сроки.',
    whatDone: [
      { title: 'Демонтаж старого оборудования', desc: 'Организовали вывоз и утилизацию устаревших стеллажей.' },
      { title: 'Монтаж нового оборудования', desc: 'Установили новые брендированные стеллажи по единому стандарту сети.' },
      { title: 'Контроль сроков', desc: 'Синхронизировали работу бригад так, чтобы уложиться в двухнедельный срок.' },
    ],
    result: 'Ребрендинг всех 25 точек завершён за две недели без остановки работы магазинов.',
    conclusion: 'Чёткое планирование логистики позволило провести масштабное обновление сети в минимальные сроки.',
  },
  {
    id: 7, title: 'Магазин «Бытовая техника Плюс»', category: 'Технический мерчандайзинг',
    description: 'Изготовили и установили индивидуальные POS-конструкции под формат торгового зала клиента.',
    photos: [IMG.household, IMG.shelfCloseup, IMG.merchandiser],
    task: 'Стандартные POS-конструкции не подходили под нестандартную планировку торгового зала клиента.',
    whatDone: [
      { title: 'Замеры торгового зала', desc: 'Выполнили точные замеры пространства для проектирования индивидуальных конструкций.' },
      { title: 'Изготовление под заказ', desc: 'Разработали и изготовили POS-конструкции с учётом особенностей зала.' },
      { title: 'Монтаж на месте', desc: 'Установили готовые конструкции с минимальным простоем магазина.' },
    ],
    result: 'Индивидуальные конструкции органично вписались в пространство и увеличили заметность продукции на 20%.',
    conclusion: 'Нестандартные задачи требуют нестандартных решений — индивидуальное изготовление полностью закрыло потребность клиента.',
  },
  {
    id: 8, title: 'Дрогери «Аптека+»', category: 'Технический мерчандайзинг',
    description: 'Обеспечили замеры и утилизацию устаревшего оборудования перед установкой нового брендированного стенда.',
    photos: [IMG.cosmetics, IMG.dairy, IMG.neatRows],
    task: 'Перед установкой нового брендированного стенда требовалось безопасно демонтировать и утилизировать устаревшее оборудование.',
    whatDone: [
      { title: 'Демонтаж и вывоз', desc: 'Провели аккуратный демонтаж старого оборудования без повреждения торгового зала.' },
      { title: 'Утилизация', desc: 'Организовали экологичную утилизацию списанного оборудования.' },
      { title: 'Подготовка площадки', desc: 'Подготовили место для установки нового брендированного стенда.' },
    ],
    result: 'Площадка подготовлена в срок, новый стенд установлен без задержек по вине предыдущего оборудования.',
    conclusion: 'Полный цикл технических работ «под ключ» избавил клиента от необходимости искать отдельных подрядчиков.',
  },
  {
    id: 9, title: 'Дегустация в «Гастрономе»', category: 'BTL услуги + Организация дегустаций',
    description: 'Провели серию дегустаций новой линейки продукции — конверсия в покупку составила 34% от числа попробовавших.',
    photos: [IMG.snacks, IMG.beverages, IMG.approach],
    task: 'Клиент выводил на рынок новую линейку продукции и нуждался в быстром способе познакомить покупателей со вкусом товара.',
    whatDone: [
      { title: 'Подбор промоперсонала', desc: 'Набрали и обучили промоутеров для проведения дегустаций в торговых точках.' },
      { title: 'Организация точек дегустации', desc: 'Оборудовали дегустационные стойки в ключевых магазинах сети.' },
      { title: 'Сбор обратной связи', desc: 'Фиксировали реакцию покупателей и передавали клиенту отчёты по итогам каждой смены.' },
    ],
    result: 'Конверсия в покупку составила 34% от числа попробовавших продукт, узнаваемость новой линейки выросла.',
    conclusion: 'Дегустации остаются одним из самых эффективных инструментов для запуска нового продукта на полке.',
  },
  {
    id: 10, title: 'Промоакция бренда напитков', category: 'BTL услуги + Организация дегустаций',
    description: 'Организовали промоакцию с розыгрышем по чекам в 18 торговых точках — рост продаж бренда на 40% за период акции.',
    photos: [IMG.beverages, IMG.snacks, IMG.quality],
    task: 'Бренду напитков требовался инструмент для стимулирования продаж в разгар высокого сезона в ограниченный период времени.',
    whatDone: [
      { title: 'Разработка механики акции', desc: 'Предложили формат розыгрыша призов по чекам, адаптированный под аудиторию сети.' },
      { title: 'Промо-поддержка в точках', desc: 'Разместили промо-материалы и обеспечили промоутеров в 18 магазинах.' },
      { title: 'Контроль и отчётность', desc: 'Вели ежедневный учёт участия и динамики продаж по каждой точке.' },
    ],
    result: 'Продажи бренда выросли на 40% за период проведения акции по сравнению с аналогичным периодом.',
    conclusion: 'Грамотно выстроенная промомеханика способна дать заметный краткосрочный эффект без изменения цены товара.',
  },
  {
    id: 11, title: 'Праздничное мероприятие в ТЦ', category: 'BTL услуги + Организация дегустаций',
    description: 'Подобрали и обучили промоперсонал для праздничного мероприятия — более 500 гостей за один день.',
    photos: [IMG.approach, IMG.quality, IMG.merchandiser],
    task: 'Торговый центр планировал масштабное праздничное мероприятие и нуждался в опытной команде для его организации и проведения.',
    whatDone: [
      { title: 'Подбор персонала', desc: 'Собрали команду аниматоров, промоутеров и координаторов под мероприятие.' },
      { title: 'Обучение и репетиция', desc: 'Провели инструктаж и репетицию сценария мероприятия заранее.' },
      { title: 'Координация в день события', desc: 'Обеспечили слаженную работу всей команды в течение всего мероприятия.' },
    ],
    result: 'Мероприятие посетили более 500 гостей, обратная связь от ТЦ и посетителей была положительной.',
    conclusion: 'Тщательная подготовка и опытная команда — залог успешного проведения мероприятия любого масштаба.',
  },
  {
    id: 12, title: 'Ротация промоперсонала в сети супермаркетов', category: 'BTL услуги + Организация дегустаций',
    description: 'Обеспечили непрерывную ротацию промоперсонала для долгосрочной акции в 30 магазинах сети.',
    photos: [IMG.quality, IMG.approach, IMG.beverages],
    task: 'Для долгосрочной промоакции в 30 магазинах сети требовалось обеспечить непрерывное присутствие промоперсонала без перебоев.',
    whatDone: [
      { title: 'Формирование кадрового резерва', desc: 'Создали пул промоутеров с возможностью быстрой замены.' },
      { title: 'График ротации', desc: 'Разработали график, исключающий простои точек без промоперсонала.' },
      { title: 'Контроль качества работы', desc: 'Проводили регулярные проверки соблюдения стандартов промоутерами.' },
    ],
    result: 'Акция прошла без единого дня простоя в течение всего срока в 30 магазинах сети.',
    conclusion: 'Продуманная система ротации кадров обеспечила стабильность долгосрочного проекта для клиента.',
  },
  {
    id: 13, title: 'Сеть кондитерских «Сладкий дом»', category: 'Мерчандайзинг',
    description: 'Внедрили совмещённый мерчандайзинг в 22 точках — сократили издержки на визиты при сохранении качества выкладки.',
    photos: [IMG.snacks, IMG.neatRows, IMG.dairy],
    task: 'Клиенту требовалось сократить расходы на мерчандайзинг без потери качества выкладки в 22 торговых точках.',
    whatDone: [
      { title: 'Анализ загрузки точек', desc: 'Определили точки, которые можно объединить в один маршрут визитов.' },
      { title: 'Внедрение совмещённого формата', desc: 'Перевели часть точек на формат совмещённого мерчандайзинга.' },
      { title: 'Контроль эффективности', desc: 'Отслеживали качество выкладки после перехода на новый формат.' },
    ],
    result: 'Издержки на визиты сократились на 18% при сохранении прежнего качества выкладки товара.',
    conclusion: 'Совмещённый мерчандайзинг — оптимальное решение для категорий с типовыми задачами и ограниченным бюджетом.',
  },
  {
    id: 14, title: 'Модернизация точек сети «ЭлектроМир»', category: 'Технический мерчандайзинг',
    description: 'Заменили устаревшие ценникодержатели на электронные ценники в 8 магазинах сети.',
    photos: [IMG.merchandiser, IMG.aisleWide, IMG.shelfWide],
    task: 'Сеть магазинов электроники хотела автоматизировать управление ценами и сократить время на замену ценников вручную.',
    whatDone: [
      { title: 'Проектирование системы', desc: 'Подобрали и настроили систему электронных ценников под ассортимент сети.' },
      { title: 'Монтаж в точках', desc: 'Установили электронные ценники в 8 магазинах сети.' },
      { title: 'Интеграция с учётной системой', desc: 'Настроили автоматическую синхронизацию цен с базой данных клиента.' },
    ],
    result: 'Время на обновление цен сократилось с нескольких часов до нескольких минут по всей сети.',
    conclusion: 'Технологическая модернизация точек продаж напрямую повышает операционную эффективность клиента.',
  },
  {
    id: 15, title: 'Дегустационный тур бренда молочной продукции', category: 'BTL услуги + Организация дегустаций',
    description: 'Провели дегустационный тур по 10 городам — собрали более 3000 обратных связей от покупателей.',
    photos: [IMG.dairy, IMG.snacks, IMG.approach],
    task: 'Бренду молочной продукции требовалось собрать обратную связь от покупателей в разных регионах перед расширением географии продаж.',
    whatDone: [
      { title: 'Планирование маршрута тура', desc: 'Составили маршрут дегустационного тура по 10 городам присутствия сети.' },
      { title: 'Организация дегустаций на местах', desc: 'Провели дегустации в ключевых торговых точках каждого города.' },
      { title: 'Сбор и анализ обратной связи', desc: 'Систематизировали более 3000 анкет с мнением покупателей о продукте.' },
    ],
    result: 'Собрано более 3000 обратных связей, на основе которых клиент скорректировал рецептуру перед расширением.',
    conclusion: 'Дегустационный тур позволил клиенту принять взвешенное решение о расширении географии на основе реальных данных.',
  },
];

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <Link
      to={`/cases/${item.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={item.photos[0]} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-semibold text-neutral-900">{item.title}</p>
        <p className="mt-1 text-sm text-brand-green">{item.category}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{item.description}</p>
      </div>
    </Link>
  );
}

export function CaseLightbox({ photos, title, initialIndex, open, onOpenChange }: {
  photos: string[];
  title: string;
  initialIndex: number;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => { setIndex(initialIndex); }, [initialIndex, open]);

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl overflow-hidden rounded-3xl p-0">
        <div className="relative aspect-video bg-neutral-900">
          <img src={photos[index]} alt={`${title} — фото ${index + 1}`} className="h-full w-full object-contain" />
          {photos.length > 1 && (
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
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Фото ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-brand-green' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CasesCarousel({ items, viewAllHref }: { items: CaseItem[]; viewAllHref?: string }) {
  const [selected, setSelected] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const useSlider = items.length > 3;

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    api.on('select', () => setSelected(api.selectedScrollSnap()));
  }, [api]);

  if (items.length === 0) return null;

  return (
    <>
      <div>
        {useSlider ? (
          <Carousel opts={{ align: 'start' }} setApi={setApi} className="px-2">
            <CarouselContent>
              {items.map((item) => (
                <CarouselItem key={item.id} className="py-2 sm:basis-1/2 lg:basis-1/3">
                  <CaseCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {useSlider && count > 1 && (
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

      {viewAllHref && (
        <div className="mt-8 flex justify-center">
          <Button asChild className="rounded-full bg-brand-green px-8 py-3 text-sm font-bold text-white hover:bg-brand-green/90 md:px-10 md:py-4 md:text-base">
            <Link to={viewAllHref}>Смотреть все кейсы</Link>
          </Button>
        </div>
      )}
    </>
  );
}