import '@styles/main.scss';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
