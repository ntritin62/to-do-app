import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { ModalProvider } from '@/context/ModalContext';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <Header />
          <div className="grid grid-cols-4 gap-20 mt-15 h-[calc(100vh-130px)]">
            <Sidebar />
            <main className="mb-3 col-span-3 mr-20  border-[#BFC3CA] border-solid border-[2px] shadow-2xl bg-bg">
              {children}
            </main>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
