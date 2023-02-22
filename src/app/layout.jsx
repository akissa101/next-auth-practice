import Header from "@/app/components/Header";
import "./globals.css";
import Provider from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
