import { useParams } from 'react-router-dom';
import { InDevelopmentPage } from '@/pages/services/shared';
import { CITIES } from './shared';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/ё/g, 'e');
}

export default function MerchCityPage() {
  const { city = '' } = useParams();
  const found = CITIES.find((c) => slugify(c) === city);
  const title = found ? `Мерчандайзинг в городе ${found}` : 'Мерчандайзинг по городам';

  return <InDevelopmentPage title={title} breadcrumb={['Мерчандайзинг', 'По городам', found || city]} />;
}
