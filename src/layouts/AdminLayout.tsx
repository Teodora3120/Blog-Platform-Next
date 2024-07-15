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
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    const handleRouteError = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteError);

    if (!user || !user.uid) {
      NProgress.start();
      router.push("/auth/logout").finally(() => NProgress.done());
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteError);
    };
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
