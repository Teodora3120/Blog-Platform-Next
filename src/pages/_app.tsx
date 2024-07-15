import '@/styles/globals.css';
import type { AppProps, AppType } from 'next/app';
import { UserProvider } from '@/context/UserContext';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { ReactNode } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<any> & {
    layout?: React.ComponentType<{ children: ReactNode }>;
    getInitialProps?(ctx: any): Promise<any>;
  };
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const Layout = Component.layout || (({ children }: { children: ReactNode }) => <>{children}</>);

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
