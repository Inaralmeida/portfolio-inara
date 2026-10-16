import type {NextConfig} from 'next';
const basePath=process.env.GITHUB_ACTIONS==='true'?'/portfolio-inara':'';
const nextConfig:NextConfig={output:'export',...(basePath?{basePath,assetPrefix:basePath+'/'}:{}),env:{NEXT_PUBLIC_BASE_PATH:basePath},images:{unoptimized:true},trailingSlash:true};
export default nextConfig;