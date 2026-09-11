'use client';

import { ArrowDownRight, ArrowRight, CalendarDays, Camera, Check, ChevronLeft, ChevronRight, MapPin, Menu, MessageCircle, Phone, Star, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const INSTAGRAM = 'https://www.instagram.com/johnny_cutzznlocks?igsi=NWs5aGVzM2E4ajc3';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const assetPath = (path: string) => `${BASE_PATH}${path}`;
const pagePath = (path: string) => `${BASE_PATH}${path}`;
function InstagramIcon({size=18}:{size?:number}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>}
const Instagram = InstagramIcon;
const images = ['/portfolio/new-01.jpg','/portfolio/new-02.jpg','/portfolio/new-03.jpg','/portfolio/new-04.jpg','/portfolio/new-05.jpg','/portfolio/new-06.jpg'].map(assetPath);
const barberServices = [['Corte','12€'],['Barba','8€'],['Limpeza de pele','5€'],['Hidratação','5€'],['Coloração de cabelo','15€'],['Coloração de barba','5€'],['Platinado','35€'],['Luzes','25€']];
const dreadlockGroups = [
  {title:'Crochet',items:[['Criação','Sob orçamento'],['Raízes','45€'],['Manutenção completa','80€']]},
  {title:'Enrolar',items:[['Simples','25€'],['Enrolar + penteado','30€'],['Penteado','10€']]},
  {title:'Lavagem',items:[['Simples','a partir de 5€'],['Detox','a partir de 20€']]},
];
const braidServices = [['Corridas','a partir de 20€'],['Soltas s/ extensão','a partir de 25€'],['Soltas c/ extensão','a partir de 40€'],['Twist s/ extensão','20€'],['Twist c/ extensão','35€'],['Tissagem','a partir de 35€']];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0B0B0F]/75 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
    <a href={pagePath('/#top')} className="group flex items-center" aria-label="Johnny Cutz Barbershop — início"><img src={assetPath('/johnny-cutz-logo.png')} alt="Johnny Cutz Barbershop" className="h-14 w-36 object-contain object-left drop-shadow-[0_0_14px_rgba(21,156,255,.18)] sm:w-44"/></a>
    <nav className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/[.03] px-5 py-2.5 text-sm text-white/65 backdrop-blur-md md:flex" aria-label="Navegação principal"><a href={pagePath('/agendamento')}>Agendamento</a><a href={pagePath('/precarios')}>Preçário</a><a href={pagePath('/#recrutamento')}>Recrutamento</a><a href={pagePath('/#trabalhos')}>Trabalhos</a></nav>
    <div className="flex items-center gap-3"><a href={pagePath('/agendamento')} className="cta cta-outline hidden whitespace-nowrap sm:inline-flex"><span className="md:hidden">Agendar</span><span className="hidden md:inline">Pedir horário</span><ArrowRight size={16}/></a><button onClick={()=>setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-white/10 md:hidden" aria-label="Abrir menu">{open?<X/>:<Menu/>}</button></div>
  </div>{open&&<nav className="border-t border-white/10 bg-[#12121A]/95 p-5 backdrop-blur-xl md:hidden"><div className="flex flex-col gap-5 text-lg"><a onClick={()=>setOpen(false)} href={pagePath('/agendamento')}>Agendamento</a><a onClick={()=>setOpen(false)} href={pagePath('/precarios')}>Preçário</a><a onClick={()=>setOpen(false)} href={pagePath('/#recrutamento')}>Recrutamento</a><a onClick={()=>setOpen(false)} href={pagePath('/#trabalhos')}>Trabalhos</a><a onClick={()=>setOpen(false)} href="tel:+351964443476" className="ghost-button justify-center"><Phone size={17}/> Ligar agora</a></div></nav>}</header>;
}

function HeroSection() {
  return <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_12%_35%,rgba(21,156,255,.10),transparent_38%)] pb-16 pt-32 lg:pb-28 lg:pt-44"><div className="absolute -left-40 top-20 size-[32rem] rounded-full bg-[#159CFF]/8 blur-[140px]"/><div className="relative mx-auto grid max-w-7xl items-end gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
    <div className="reveal"><div className="eyebrow hero-eyebrow mb-7"> Fresh cuts • Dreadlocks • Tattoos</div><h1 className="max-w-xl text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[.82] tracking-[-.07em]">Cortes<br/><span className="text-outline">precisos.</span><br/>Locks<br/><span className="block text-[0.84em] text-[#159CFF]">
  autênticos.
</span></h1><p className="mt-8 max-w-md text-base leading-7 text-white/55 sm:text-lg">Identidade, técnica e detalhe em cada sessão. Do fade mais limpo à manutenção completa das tuas locks.</p><div className="hero-actions mt-9 flex flex-wrap items-center gap-4"><a className="cta cta-outline" href={pagePath('/agendamento')}>Pedir agendamento <ArrowDownRight size={18}/></a><a className="mt-1 inline-block basis-full text-sm font-extrabold text-white transition hover:text-white sm:basis-auto sm:mt-0 max-md:self-center" href="#trabalhos">Ver trabalhos</a></div></div>
    <div className="grid h-[500px] grid-cols-5 grid-rows-5 gap-3 sm:h-[650px]"><figure className="image-card col-span-3 row-span-5"><img className="hero-motion" src={images[0]} alt="Trabalho recente de Fade & Locks by Johnny"/></figure><figure className="image-card col-span-2 row-span-3"><img className="hero-motion" src={images[1]} alt="Corte realizado por Johnny"/></figure><figure className="image-card col-span-2 row-span-2"><img className="hero-motion" src={assetPath('/portfolio/johnny-artwork.jpg')} alt="Johnny com dois quadros de arte" style={{objectPosition:'center 30%'}}/></figure></div>
  </div></section>;
}

export function BentoServices() {
  return <section id="servicos" className="section-shell"><div className="section-head"><div><p className="eyebrow">Preçário oficial</p><h2>Um estilo para<br/>cada identidade.</h2></div><p>Barbearia, dreadlocks e tranças com preços transparentes. Serviços “a partir de” podem variar conforme o trabalho.</p></div><div className="grid gap-4 lg:grid-cols-12">
    <article className="bento-card relative overflow-hidden lg:col-span-5"><div className="absolute right-0 top-0 size-52 rounded-full bg-[#159CFF]/10 blur-3xl"/><div className="relative"><h3 className="!mt-0">Barbearia<br/><span className="text-outline">Barbershop</span></h3><div className="mt-10 grid gap-x-8 sm:grid-cols-2">{barberServices.map(([name,price])=><div key={name} className="flex items-center justify-between gap-3 border-t border-white/10 py-3.5 text-sm"><span className="text-white/65">{name}</span><strong className="shrink-0">{price}</strong></div>)}</div></div></article>
    <article className="bento-card text-white lg:col-span-7"><h3 className="!mt-0">Rasta<br/>& Dreadlocks</h3><div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">{dreadlockGroups.map(group=><div key={group.title} className={group.title==='Lavagem'?'sm:col-span-2':''}><p className="!mt-0 text-xs font-black uppercase tracking-[.18em] !text-[#159CFF]">{group.title}</p><div className={`mt-2 ${group.title==='Lavagem'?'grid gap-x-10 sm:grid-cols-2':''}`}>{group.items.map(([name,price])=><div key={name} className="flex items-center justify-between gap-4 border-t border-white/10 py-3 text-sm"><span className="text-white/65">{name}</span><strong className="shrink-0 text-right">{price}</strong></div>)}</div></div>)}</div></article>
    <article className="bento-card relative overflow-hidden lg:col-span-12"><div className="absolute -bottom-24 right-10 size-64 rounded-full bg-[#FFE500]/5 blur-3xl"/><div className="relative grid gap-8 lg:grid-cols-[.65fr_1fr] lg:items-end"><div><h3 className="!mt-0">Tranças<br/><span className="text-[#159CFF]">Braids</span></h3><p>Corridas, soltas, twists e tissagem — com ou sem extensão.</p></div><div className="grid gap-x-10 sm:grid-cols-2">{braidServices.map(([name,price])=><div key={name} className="flex items-center justify-between gap-4 border-t border-white/10 py-3.5 text-sm"><span className="text-white/65">{name}</span><strong className="shrink-0 text-right">{price}</strong></div>)}</div></div></article>
  </div></section>;
}

function InstagramFeed() {
  const [activeWork,setActiveWork]=useState(0);
  const selectedWorks=[
    {src:images[2],category:'Barbearia',label:'Corte de assinatura',className:'min-h-[520px] sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-0'},
    {src:images[3],category:'Hair design',label:'Detalhe personalizado',className:'min-h-[340px] sm:col-span-2 lg:col-span-5 lg:min-h-0'},
    {src:images[5],category:'Tranças',label:'Braids & fade',className:'min-h-[360px] lg:col-span-3 lg:min-h-0'},
    {src:images[4],category:'Processo',label:'Nos bastidores',className:'min-h-[360px] lg:col-span-2 lg:min-h-0'},
  ];
  useEffect(()=>{const timer=window.setInterval(()=>setActiveWork(current=>(current+1)%selectedWorks.length),5000);return()=>window.clearInterval(timer)},[selectedWorks.length]);
  return <section id="trabalhos" className="py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="section-head"><div><p className="eyebrow works-eyebrow">Selected work • @johnny_cutzznlocks</p><h2>Feito na cadeira.<br/>Visto no feed.</h2></div><div><p className="mb-5 max-w-sm text-sm leading-6 text-white/45">Uma seleção de cortes, detalhes e transformações que definem o trabalho do Johnny.</p><a className="ghost-button border-[#159CFF]/55" href={INSTAGRAM} target="_blank" rel="noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#explore-instagram-gradient)" strokeWidth="2" aria-hidden="true"><defs><linearGradient id="explore-instagram-gradient" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#FCAF45"/><stop offset=".45" stopColor="#E1306C"/><stop offset="1" stopColor="#833AB4"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="url(#explore-instagram-gradient)" stroke="none"/></svg> Explorar no Instagram</a></div></div><div className="works-mobile"><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#15151D]"><img src={selectedWorks[activeWork].src} alt={`${selectedWorks[activeWork].label} por Johnny Cutz`} className="size-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/></a><div className="mt-4 flex items-center justify-center gap-2">{selectedWorks.map((work,index)=><button key={work.src} type="button" aria-label={`Ver trabalho ${index+1}`} onClick={()=>setActiveWork(index)} className={`size-2 rounded-full ${index===activeWork?'bg-white':'bg-white/25'}`}/>)}</div></div><div className="works-desktop grid gap-3 sm:grid-cols-2 lg:h-[760px] lg:grid-cols-12 lg:grid-rows-2">{selectedWorks.map(work=><a key={work.src} href={INSTAGRAM} target="_blank" rel="noreferrer" className={`group relative overflow-hidden rounded-[1.75rem] bg-[#15151D] ${work.className}`}><img src={work.src} alt={`${work.label} por Johnny Cutz`} className="size-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-100"/><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/></a>)}</div><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 max-md:flex-col max-md:items-start max-md:gap-5"><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-[.16em] text-[#FFE500] hover:text-white">Ver todos os trabalhos</a></div></div></section>;
}

const slots=['10:00','11:00','15:00','16:30','18:00','19:30'];
const dayNames=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const monthNames=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const isWorkingDay=(date:Date)=>date.getDay()!==0;
const dateKey=(date:Date)=>`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function nextWorkingDay(date:Date){const result=new Date(date);while(!isWorkingDay(result))result.setDate(result.getDate()+1);return result}
function shiftWorkingDays(date:Date,amount:number){const result=new Date(date);const direction=amount<0?-1:1;let remaining=Math.abs(amount);while(remaining){result.setDate(result.getDate()+direction);if(isWorkingDay(result))remaining--}return nextWorkingDay(result)}
function workingDaysFrom(start:Date,count=5){const result:Date[]=[];const cursor=nextWorkingDay(start);while(result.length<count){if(isWorkingDay(cursor))result.push(new Date(cursor));cursor.setDate(cursor.getDate()+1)}return result}
function initialBookingDate(){const today=new Date();today.setHours(12,0,0,0);return nextWorkingDay(today)}

function BookingTeaser(){
  return <section id="agendar" className="section-shell booking-section">
    <div className="booking-banner">
      <img className="booking-art" src={assetPath('/johnny-stencil-dark.png')} alt="" aria-hidden="true" loading="lazy" width={1024} height={1536}/>
      <div className="booking-copy">
        <p className="eyebrow booking-eyebrow">O teu estilo. A nossa assinatura.</p>
        <h2>O teu próximo<br/>look começa <span>aqui.</span></h2>
        <p className="booking-description">Da primeira ideia ao último detalhe. Escolhe o teu serviço e pede o teu próximo horário.</p>
        <div className="booking-actions">
          <a href={pagePath('/agendamento')} className="cta"><CalendarDays size={18}/> Marcar online <ArrowRight size={17}/></a>
          <a href="tel:+351964443476" className="ghost-button"><Phone size={17}/> Ligar agora</a>
        </div>
        <a className="booking-prices" href={pagePath('/precarios')}>Barbearia · Dreadlocks · Tranças <span>Ver preçário <ArrowRight size={16}/></span></a>
        <a href="https://www.google.com/maps/search/?api=1&query=Av.+de+Santa+Maria+18A+Agualva-Cacem" target="_blank" rel="noreferrer" className="booking-address"><MapPin size={18}/><span>Av. de Santa Maria 18A, <strong>Agualva-Cacém</strong></span></a>
      </div>
    </div>
  </section>;
}

export function BookingWidget() {
  const [page,setPage]=useState(0); const [date,setDate]=useState(initialBookingDate); const [time,setTime]=useState('15:00'); const [name,setName]=useState(''); const [service,setService]=useState('Corte'); const [done,setDone]=useState(false);
  const dates=useMemo(()=>workingDaysFrom(shiftWorkingDays(initialBookingDate(),page*5)),[page]);
  const monthLabel=useMemo(()=>{const first=dates[0];const last=dates[dates.length-1];return first.getMonth()===last.getMonth()?`${monthNames[first.getMonth()]} ${first.getFullYear()}`:`${monthNames[first.getMonth()]} – ${monthNames[last.getMonth()]} ${last.getFullYear()}`},[dates]);
  const formattedDate=useMemo(()=>`${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}`,[date]);
  const summary=useMemo(()=>`${date.getDate()} ${monthNames[date.getMonth()].slice(0,3)} • ${time}`,[date,time]);
  const whatsAppMessage=useMemo(()=>encodeURIComponent(`Olá Johnny! 👋\n\nGostaria de pedir um agendamento.\n\n*Nome:* ${name}\n*Serviço:* ${service}\n*Data pretendida:* ${formattedDate}\n*Hora pretendida:* ${time}\n\nAguardo confirmação. Obrigado!`),[name,service,formattedDate,time]);
  const whatsAppUrl=`https://wa.me/351964443476?text=${whatsAppMessage}`;
  function changePage(direction:number){const nextPage=Math.max(0,page+direction);const nextDates=workingDaysFrom(shiftWorkingDays(initialBookingDate(),nextPage*5));setPage(nextPage);setDate(nextDates[0])}
  function submit(e:React.FormEvent){e.preventDefault();if(name){window.open(whatsAppUrl,'_blank','noopener,noreferrer');setDone(true)}}
  return <section id="agendar" className="section-shell pb-28"><div className="rounded-[2rem] border border-white/10 bg-[#12121A] p-5 sm:p-8 lg:p-12"><div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="eyebrow">Marca como preferires</p><h2 className="mt-5">O teu próximo<br/>look começa aqui.</h2></div><div className="flex flex-col gap-3 sm:flex-row sm:items-center"><a href="tel:+351964443476" className="cta justify-center"><Phone size={18}/> Ligar agora</a><a href="https://www.google.com/maps/search/?api=1&query=Av.+de+Santa+Maria+18A" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 text-base text-white/50 hover:text-white"><MapPin size={18} className="shrink-0 text-[#159CFF]"/> <span>Av. de Santa Maria 18A, <strong className="font-bold">Agualva-Cacém</strong></span></a></div></div>
  {done?<div className="grid min-h-[360px] place-items-center rounded-3xl border border-[#159CFF]/30 bg-[#159CFF]/5 p-8 text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#FFE500] text-black"><Check size={30}/></span><h3 className="mt-6 text-3xl font-black">Pedido pronto, {name.split(' ')[0]}!</h3><p className="mx-auto mt-3 max-w-md text-white/50">Preparámos a mensagem para <strong className="text-white">{service}, {summary}</strong>. Envia-a no WhatsApp para o Johnny confirmar o horário.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><a href={whatsAppUrl} target="_blank" rel="noreferrer" className="ghost-button"><MessageCircle size={18}/> Abrir WhatsApp</a><button onClick={()=>setDone(false)} className="ghost-button">Alterar pedido</button></div></div></div>:<form onSubmit={submit} className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]"><div className="rounded-3xl bg-[#0B0B0F] p-5 sm:p-7"><div className="flex items-center justify-between"><button type="button" aria-label="Datas anteriores" className="calendar-arrow" onClick={()=>changePage(-1)} disabled={page===0}><ChevronLeft size={18}/></button><div className="text-center"><p className="font-bold capitalize">{monthLabel}</p><p className="text-xs text-white/35">Próximos dias disponíveis</p></div><button type="button" aria-label="Datas seguintes" className="calendar-arrow" onClick={()=>changePage(1)}><ChevronRight size={18}/></button></div><div className="mt-7 grid grid-cols-5 gap-2">{dates.map(d=><button type="button" onClick={()=>setDate(d)} key={dateKey(d)} className={`date-button ${dateKey(date)===dateKey(d)?'active':''}`}><span>{dayNames[d.getDay()]}</span><strong>{d.getDate()}</strong></button>)}</div><p className="mb-3 mt-8 text-xs font-bold uppercase tracking-[.18em] text-white/40">Horário pretendido</p><div className="grid grid-cols-3 gap-2">{slots.map(s=><button type="button" onClick={()=>setTime(s)} key={s} className={`time-button ${time===s?'active':''}`}>{s}</button>)}</div><p className="mt-4 text-xs leading-5 text-white/30">Segunda a sábado, das 10h às 12h e das 15h às 20h. O horário fica sujeito a confirmação.</p></div><div className="flex flex-col rounded-3xl border border-white/10 p-5 sm:p-7"><div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[#159CFF]/15 text-[#159CFF]"><CalendarDays size={19}/></span><div><p className="text-xs uppercase tracking-[.16em] text-white/35">O teu pedido</p><p className="font-bold">{summary}</p></div></div><p className="mt-6 text-sm leading-6 text-white/45">Preenche só o essencial. O WhatsApp identifica o teu número automaticamente.</p><label className="form-label mt-5">Nome<input required value={name} onChange={e=>setName(e.target.value)} placeholder="O teu nome"/></label><label className="form-label mt-4">Serviço<select value={service} onChange={e=>setService(e.target.value)}><optgroup label="Barbearia">{barberServices.map(([serviceName])=><option key={serviceName} value={serviceName}>{serviceName}</option>)}</optgroup><optgroup label="Rasta / Dreadlocks">{dreadlockGroups.flatMap(group=>group.items.map(([serviceName])=><option key={`${group.title}-${serviceName}`} value={`${group.title} — ${serviceName}`}>{group.title} — {serviceName}</option>))}</optgroup><optgroup label="Tranças / Braids">{braidServices.map(([serviceName])=><option key={serviceName} value={serviceName}>{serviceName}</option>)}</optgroup></select></label></div><button className="ghost-button mt-7 w-full justify-center" type="submit"><MessageCircle size={18}/> Pedir pelo WhatsApp</button><div className="my-3 flex items-center gap-3 text-[.65rem] font-bold uppercase tracking-[.18em] text-white/25"><span className="h-px flex-1 bg-white/10"/>ou<span className="h-px flex-1 bg-white/10"/></div><a href="tel:+351964443476" className="cta w-full justify-center"><Phone size={18}/> Ligar agora</a></div></form>}</div></section>;
}

function RecruitmentSection(){
  const recruitmentUrl='https://wa.me/351964443476?text='+encodeURIComponent('Olá Johnny! 👋\n\nVi a área de recrutamento no site e gostava de saber mais sobre oportunidades para trabalhar contigo.');
  return <section id="recrutamento" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 lg:px-8"><div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(125deg,#0b2f70_0%,#103a80_48%,#0b2458_100%)] p-7 text-white sm:p-10 lg:p-14"><span className="recruitment-tag" aria-hidden="true">Johnny Cutz</span><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.22em] text-[#FFE500]">Recrutamento</p><h2 className="mt-4 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[.9] tracking-[-.055em]">Tens talento?<br/><span className="text-white">Há lugar para ti.</span></h2><p className="mt-5 max-w-xl leading-7 text-white/85">Procuramos pessoas com técnica, atitude e vontade de crescer nas áreas de barbearia, dreadlocks ou tranças.</p></div><a href={recruitmentUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#07090D]/60 px-6 text-sm font-extrabold text-white hover:-translate-y-0.5 hover:bg-[#07090D]/80"><MessageCircle size={18}/> Quero fazer parte</a></div></div></section>;
}

export function Footer(){
  return <footer id="sobre" className="site-footer">
    <div className="footer-layout">
      <div className="footer-identity">
        <a href={pagePath('/#top')} aria-label="Johnny Cutz — início"><img src={assetPath('/johnny-cutz-logo.png')} alt="Johnny Cutz Barbershop" width={208} height={80}/></a>
        <p>Fresh cuts & dreadlocks.<br/>O teu estilo, em Agualva-Cacém.</p>
      </div>
      <div className="footer-contact">
        <h2>Vamos falar</h2>
        <a href="tel:+351964443476"><Phone size={18}/><span>964 443 476</span></a>
        <a href="https://www.google.com/maps/search/?api=1&query=Av.+de+Santa+Maria+18A+Agualva-Cacem" target="_blank" rel="noreferrer"><MapPin size={18}/><span>Av. de Santa Maria 18A<br/><strong>Agualva-Cacém</strong></span></a>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18}/><span>@johnny_cutzznlocks</span></a>
      </div>
      <nav className="footer-navigation" aria-label="Navegação do rodapé">
        <h2>Explora</h2>
        <a href={pagePath('/#top')}>Início</a>
        <a href={pagePath('/precarios')}>Preçário</a>
        <a href={pagePath('/#trabalhos')}>Trabalhos</a>
        <a href={pagePath('/#recrutamento')}>Recrutamento</a>
        <a href={pagePath('/agendamento')}>Agendar</a>
      </nav>
    </div>
    <div className="footer-bottom"><span>Johnny Cutz Barbershop</span><a href={pagePath('/#top')}>Voltar ao topo ↑</a></div>
  </footer>;
}

export default function Home(){return <main><Navbar/><HeroSection/><BookingTeaser/><RecruitmentSection/><InstagramFeed/><Footer/></main>}
