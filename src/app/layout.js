import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// フォント設定
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata = {
  title: '介護サポート | 高齢者の生活を豊かにする介護施設紹介サービス',
  description: '当社は、介護が必要なご高齢の方やそのご家族様に対して、最適な介護施設を見つけるお手伝いをする会社です。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body cz-shortcut-listen="true" className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
