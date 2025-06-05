import '@styles/main.scss';
import Header from "@/components/header/header_tmp";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
