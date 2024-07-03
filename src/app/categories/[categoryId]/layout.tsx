import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex flex-col relative overflow-hidden">
      <Header hasBack={false}>구매하기</Header>
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
