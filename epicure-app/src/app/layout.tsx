import '@styles/main.scss';
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { BreadcrumbsProvider } from "@components/breadcrumbs/breadcrumbsContext";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Epicure App",
  description: "Epicure User app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <BreadcrumbsProvider>
          <Header />
            {children}
        </BreadcrumbsProvider>
        <Footer />
      </body>
    </html>
  );
}
