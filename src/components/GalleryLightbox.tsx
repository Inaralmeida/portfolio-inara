'use client';
import {useEffect} from 'react';
import {ChevronLeft,ChevronRight,X} from 'lucide-react';
import type {Project} from '@/data/projects';

type Props={project:Project;index:number;onIndexChange:(index:number)=>void;onClose:()=>void};
export default function GalleryLightbox({project,index,onIndexChange,onClose}:Props){
 const items=project.gallery??[];
 const total=items.length;
 useEffect(()=>{
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==='Escape'){event.stopPropagation();onClose()}
   if(event.key==='ArrowLeft')onIndexChange((index-1+total)%total);
   if(event.key==='ArrowRight')onIndexChange((index+1)%total);
  };
  document.addEventListener('keydown',onKey);
  return()=>document.removeEventListener('keydown',onKey);
 },[index,total,onIndexChange,onClose]);
 useEffect(()=>{const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old}},[]);
 if(!total)return null;
 const item=items[index];
 return <div className="gallery-lightbox-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}>
  <section className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={'Galeria de '+project.name}>
   <div className="gallery-lightbox-header"><span>{String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span><button type="button" aria-label="Fechar galeria" onClick={onClose}><X size={25}/></button></div>
   <div className="gallery-lightbox-stage">
    <button type="button" className="gallery-lightbox-arrow" aria-label="Imagem anterior" onClick={()=>onIndexChange((index-1+total)%total)}><ChevronLeft size={30}/></button>
    <img key={item.src} src={(process.env.NEXT_PUBLIC_BASE_PATH||'')+item.src} alt={item.title+': '+item.description}/>
    <button type="button" className="gallery-lightbox-arrow" aria-label="Próxima imagem" onClick={()=>onIndexChange((index+1)%total)}><ChevronRight size={30}/></button>
   </div>
   <div className="gallery-lightbox-caption"><strong>{item.title}</strong><p>{item.description}</p></div>
  </section>
 </div>;
}
