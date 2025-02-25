import { ReactNode } from 'react';
import Navbar from '@/components/navs/Navbar';
import Footer from '@/components/footers/AdminFooter';

interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow w-full p-4">
        {children}
      </main>
      <footer className="mt-auto w-full">
        <Footer />
      </footer>
    </div>
  )
}

export default AdminLayout;
