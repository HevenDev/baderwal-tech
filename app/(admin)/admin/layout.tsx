import "@/app/globals.css";
import { Metadata } from "next";
import AdminHead from "@/components/AdminHeader/AdminHead";

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
      </body>
    </html>
  );
}
