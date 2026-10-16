'use client';
import {useEffect,useState} from 'react';
import {ArrowUp} from 'lucide-react';
export default function BackToTop(){const [visible,setVisible]=useState(false);useEffect(()=>{const update=()=>setVisible(window.scrollY>480);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);return visible?<a className="back-to-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp size={20}/></a>:null;}