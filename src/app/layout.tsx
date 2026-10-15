import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Inara Almeida | Engenharia de Software & Front-end',description:'Projetos, trajetória e stack de Inara Almeida, desenvolvedora front-end.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
