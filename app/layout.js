import "./globals.css";

import Navbar from "./ui/navigation";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}