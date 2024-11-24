import "./globals.css";

export const metadata = {
  title: "Memory Card",
  description: "Create by BossNattawat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0284c7] antialiased`}>
        {children}
      </body>
    </html>
  );
}
