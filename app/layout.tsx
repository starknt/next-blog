"use client";

import nProgress from "nprogress";
import { Router } from "next/router";

import type { ReactNode } from "react";

import './global.css'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en">
    <head />
    <body>
      {children}
    </body>
  </html>
}
