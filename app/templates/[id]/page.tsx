import { templatesData } from '@/data/templates';
import ClientPage from './ClientPage';

export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    id: tpl.id,
  }));
}

export default function Page() {
  return <ClientPage />;
}