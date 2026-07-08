import { useParams } from 'react-router-dom';
import { InDevelopmentPage } from '@/pages/services/shared';
import { NETWORKS } from './shared';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

export default function MerchNetworkPage() {
  const { network = '' } = useParams();
  const found = NETWORKS.find((n) => slugify(n.name) === network);
  const title = found ? `Мерчандайзинг для сети ${found.name}` : 'Мерчандайзинг по сетям';

  return <InDevelopmentPage title={title} breadcrumb={['Мерчандайзинг', 'По сетям', found?.name || network]} />;
}
