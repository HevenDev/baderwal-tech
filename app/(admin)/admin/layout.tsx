import "@/app/globals.css";
import { Metadata } from "next";
import AdminHead from "@/components/AdminHeader/AdminHead";
import Toast from "@/components/providers/Toast/Toastify"

export const metadata: Metadata = {
  title: "Badarwal - Admin",
  description: "Badarwal Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body className="antialiased">
        <AdminHead />
        {children}
        <Toast />
      </body>
    </html>
  );
}
