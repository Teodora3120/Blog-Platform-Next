// src/pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import AuthLayout from '@/layouts/AuthLayout';
import DashboardLayout from '@/layouts/Layout';
import { UserProvider } from '@/context/UserContext';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAuthPage = ['/login', '/register'].includes(router.pathname);

  const Layout = isAuthPage ? AuthLayout : DashboardLayout;

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>

  );
}

export default App;
