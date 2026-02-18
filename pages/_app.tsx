import type { AppProps } from 'next/app'
import '@/styles/globals.css'  // Your Tailwind imports

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
