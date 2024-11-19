import Header from "@/ui/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerColor = "bg-[#004098]";
  return (
    <>
      <Header headerColor={headerColor} />
      {children}
    </>
  );
}
