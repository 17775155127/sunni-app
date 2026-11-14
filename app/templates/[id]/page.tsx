import { templatesData } from '@/data/templates';
import ClientPage from './ClientPage';

// 1. 告诉 Next.js 打包时要生成哪些静态页面
export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    id: tpl.id,
  }));
}

// 2. 接收参数，并传给客户端组件
export default function Page({ params }: { params: { id: string } }) {
  return <ClientPage id={params.id} />;
}