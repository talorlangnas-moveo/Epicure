import '@styles/main.scss';
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { Metadata } from 'next';
// import Template from './template';

export const metadata: Metadata = {
  title: "Epicure App",
  description: "Epicure User app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
