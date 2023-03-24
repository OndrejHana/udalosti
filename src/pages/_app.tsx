import Script from "next/script";
import "../styles/globals.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(<>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-S6LXJBNV29"/>
      <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S6LXJBNV29');
        `
      }}
      />

   <Component {...pageProps} />
   </>);
}
