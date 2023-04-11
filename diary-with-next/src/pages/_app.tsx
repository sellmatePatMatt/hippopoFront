import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MyBottomNavigation from '@/components/BottomNav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <MyBottomNavigation />
    </>
  )
}
