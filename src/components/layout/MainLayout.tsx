import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="container mx-auto px-4 sm:px-10 2xl:px-42 block mt-20">
        {children}
        <Footer />
      </div>
    </main>
  );
}
