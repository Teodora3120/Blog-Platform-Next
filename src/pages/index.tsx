// src/pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-8">This is the main content of the home page.</p>
      </div>
    </>

  );
};

export default Home;
