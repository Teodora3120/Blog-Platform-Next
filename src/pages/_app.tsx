import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@/context/UserContext';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { ReactNode } from 'react';

interface MyAppProps extends AppProps {
  Component: React.ComponentType<any> & {
    layout?: React.ComponentType<{ children: ReactNode }>;
    getInitialProps?(ctx: any): Promise<any>;
  };
}

export default class MyApp extends React.Component<MyAppProps> {

  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }: { children: ReactNode }) => <>{children}</>);

    return (
      <>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </>
    );
  }
}
