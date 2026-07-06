import "./globals.css";

export const metadata = {
  title: "Labour Link | Your Trusted Workers",
  description: "Connect with verified professionals and trusted shops for all your home service needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
