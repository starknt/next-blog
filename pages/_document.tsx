import Document, { Html, Main, NextScript, Head } from "next/document";

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/JetBrainsMono.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  }
}
