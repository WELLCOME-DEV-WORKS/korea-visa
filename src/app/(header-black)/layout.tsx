import Header from "@/ui/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerColor = "bg-[#0F0F0F]";
  return (
    <>
      <Header headerColor={headerColor} />
      {children}
    </>
  );
}
