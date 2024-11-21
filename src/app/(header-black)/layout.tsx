import Footer from "@/ui/Footer";
import Header from "@/ui/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseColor = "bg-[#0F0F0F]";
  return (
    <>
      <Header headerColor={baseColor} />
      {children}
      <Footer footerColor={baseColor} />
    </>
  );
}
