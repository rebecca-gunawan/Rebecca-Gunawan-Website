import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Block Ctrl/Cmd+S (save page) and Ctrl/Cmd+U (view source)
    const blockShortcuts = (e) => {
      if ((e.ctrlKey || e.metaKey) && ['s', 'u'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
    };
    // Belt-and-suspenders: block right-click directly on any <img> that
    // isn't covered by the ProtectedImage overlay
    const blockImgContext = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('keydown', blockShortcuts);
    document.addEventListener('contextmenu', blockImgContext);
    return () => {
      document.removeEventListener('keydown', blockShortcuts);
      document.removeEventListener('contextmenu', blockImgContext);
    };
  }, []);

  return <Component {...pageProps} />;
}
