import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link rel="apple-touch-icon" href="/assets/logos/5.png/" />
          <link rel="icon" href="/assets/logos/1.jpg/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
