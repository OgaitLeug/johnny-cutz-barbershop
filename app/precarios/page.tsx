import { BentoServices, Footer, Navbar } from '../JohnnyCutzPage';

export const dynamic = 'force-static';
export const metadata = { title: 'Preçário | Johnny Cutz Barbershop', description: 'Consulta os preços de barbearia, dreadlocks e tranças da Johnny Cutz em Agualva-Cacém.' };

export default function PricesPage() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return <main><Navbar/><div className="pt-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><a href={`${base}/`} className="ghost-button">← Voltar ao início</a></div><BentoServices/><div className="mx-auto flex max-w-7xl flex-wrap items-center gap-5 px-5 pb-20 lg:px-8"><a href={`${base}/agendamento`} className="cta">Pedir agendamento →</a><p className="text-sm text-white/55">Escolhe o serviço. O horário será confirmado pelo Johnny.</p></div></div><Footer/></main>;
}
