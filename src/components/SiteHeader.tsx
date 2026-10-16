'use client';
import {useEffect,useState} from 'react';
import {Menu,X,Download} from 'lucide-react';
const links=[['#inicio','Início'],['#projetos','Projetos'],['#sobre','Sobre mim'],['#experiencia','Experiência'],['#stack','Tecnologias'],['#contato','Contato']];
export default function SiteHeader(){
 const [open,setOpen]=useState(false);
 const [active,setActive]=useState('#inicio');
 useEffect(()=>{
  const update=()=>{
   const sections=links.map(([href])=>({href,el:document.querySelector(href)})).filter((x):x is {href:string;el:Element}=>!!x.el);
   sections.sort((a,b)=>(a.el.getBoundingClientRect().top-b.el.getBoundingClientRect().top));
   const y=window.scrollY+Math.max(135,window.innerHeight*.22);
   let current='#inicio';
   for(const s of sections){if(s.el.getBoundingClientRect().top+window.scrollY<=y)current=s.href;}
   setActive(current);
  };
  update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);
  return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)};
 },[]);
 return <header className="site-header"><div className="shell header-inner">
  <a className="wordmark" href="#inicio" onClick={()=>setOpen(false)}>Inara Almeida<span>.</span></a>
  <nav className={open?'site-nav open':'site-nav'} aria-label="Navegação principal">
   {links.map(([href,label])=><a key={href} href={href} aria-current={active===href?'location':undefined} className={active===href?'is-active':''} onClick={()=>{setOpen(false);setActive(href)}}>{label}</a>)}
  </nav>
  <a className="header-cta" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/curriculo-inara-almeida.pdf`} download="Curriculo-Inara-Almeida.pdf">Baixar currículo <Download size={17}/></a>
  <button type="button" className="nav-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>;
}