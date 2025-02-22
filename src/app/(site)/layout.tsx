"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import "../globals.css";
import "../prism-theme.css";
import Header from "@/components/Header";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";
import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { StripeSessionProvider } from "../context/StripeSessionContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <AuthProvider>
            <Header />
            <ToasterContext />
            <StripeSessionProvider>{children}</StripeSessionProvider>
            <Footer />
            <ScrollToTop />
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
