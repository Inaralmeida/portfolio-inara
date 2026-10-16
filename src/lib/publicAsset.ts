/** Prefix assets only on GitHub Pages, never on Vercel. */
export const publicAsset=(name:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH??''}/${name.replace(/^\/+/, '')}`;
