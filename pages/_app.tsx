import Router from 'next/router'
import nprogress from 'nprogress'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'

import './global.css'
import 'nprogress/nprogress.css'


Router.events.on('routeChangeStart', nprogress.start)
Router.events.on('routeChangeError', nprogress.done)
Router.events.on('routeChangeComplete', nprogress.done)

export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <ThemeProvider attribute='class' enableColorScheme enableSystem >
      <Component {...pageProps} />
    </ThemeProvider>
  </RecoilRoot>
}
