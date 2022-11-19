'use client'

import nProgress from 'nprogress'
import { Router } from 'next/router'

import type { ReactNode } from 'react'

import './global.css'
import 'nprogress/nprogress.css'
import { useEffect, useRef } from 'react'
import { createGame } from '@blog/mine-sweeper'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

export default function RootLayout({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current)
      createGame(ref.current)
  }, [])

  return <html lang="en">
    <head />
    <body className="bg-black min-h-screen flex justify-center items-center text-white text-3xl">
      {children}

      <div ref={ref} />
    </body>
  </html>
}
