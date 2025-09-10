import { Html, Head, Main, NextScript } from 'next/document';

// antialiased : 폰트 렌더링을 부드럽게 처리 (글골 가장자리쪽 부터)

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
