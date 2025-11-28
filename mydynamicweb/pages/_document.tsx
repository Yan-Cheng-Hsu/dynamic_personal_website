import { Html, Head, Main, NextScript } from 'next/document'

// Script to set theme before page renders to prevent flash
const themeScript = `
  (function() {
    var saved = localStorage.getItem('theme');
    var theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
