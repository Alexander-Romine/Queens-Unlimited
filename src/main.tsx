import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const QUEEN_FAVICON_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'><defs><linearGradient id='qGold' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23ffe066'/><stop offset='50%' stop-color='%23facc15'/><stop offset='100%' stop-color='%23ca8a04'/></linearGradient></defs><g fill='%232e1402' stroke='%232e1402' stroke-width='4.5' stroke-linecap='round' stroke-linejoin='round'><path d='M 9 26 C 17.5 24.5 30 24.5 36 26 L 38 14 L 32 21 L 22.5 11 L 13 21 L 7 14 L 9 26 z'/><path d='M 9 26 C 9 28 10.5 28 11.5 30 C 12.5 31.5 12.5 31 12 33.5 C 10.5 34.5 10.5 36 10.5 36 C 9 37.5 11 38.5 11 38.5 C 17.5 39.5 27.5 39.5 34 38.5 C 34 38.5 35.5 37.5 34 36 C 34 36 34.5 34.5 33 33.5 C 32.5 31 32.5 31.5 33.5 30 C 34.5 28 36 28 36 26 C 27.5 24.5 17.5 24.5 9 26 z'/><circle cx='6' cy='12' r='2.5'/><circle cx='14' cy='9' r='2.5'/><circle cx='22.5' cy='8' r='2.5'/><circle cx='31' cy='9' r='2.5'/><circle cx='39' cy='12' r='2.5'/></g><g fill='url(%23qGold)' stroke='%23633202' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M 9 26 C 17.5 24.5 30 24.5 36 26 L 38 14 L 32 21 L 22.5 11 L 13 21 L 7 14 L 9 26 z'/><path d='M 9 26 C 9 28 10.5 28 11.5 30 C 12.5 31.5 12.5 31 12 33.5 C 10.5 34.5 10.5 36 10.5 36 C 9 37.5 11 38.5 11 38.5 C 17.5 39.5 27.5 39.5 34 38.5 C 34 38.5 35.5 37.5 34 36 C 34 36 34.5 34.5 33 33.5 C 32.5 31 32.5 31.5 33.5 30 C 34.5 28 36 28 36 26 C 27.5 24.5 17.5 24.5 9 26 z'/><path d='M 11.5 30 C 15 29 30 29 33.5 30' fill='none' stroke='%23633202' stroke-width='1.4'/><path d='M 12 33.5 C 18 32.5 27 32.5 33 33.5' fill='none' stroke='%23633202' stroke-width='1.4'/><circle cx='6' cy='12' r='2.2'/><circle cx='14' cy='9' r='2.2'/><circle cx='22.5' cy='8' r='2.2'/><circle cx='31' cy='9' r='2.2'/><circle cx='39' cy='12' r='2.2'/></g></svg>`;

function forceFaviconUpdate() {
  try {
    const dataUri = `data:image/svg+xml,${QUEEN_FAVICON_SVG}`;
    document.querySelectorAll("link[rel*='icon']").forEach((el) => el.remove());
    const link = document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = dataUri;
    document.head.appendChild(link);
  } catch {}
}

forceFaviconUpdate();

createRoot(document.getElementById('root')!).render(<App />);
