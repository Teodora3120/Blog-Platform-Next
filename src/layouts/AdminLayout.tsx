import { ReactNode, useEffect } from 'react';
import Navbar from '@/components/navs/Navbar';
import Footer from '@/components/footers/AdminFooter';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/router';


interface LayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.uid) {
      router.push("/auth/logout")
    }
  }, [user, router]);

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
