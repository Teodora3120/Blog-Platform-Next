import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/layouts/layout';  import { db } from '@/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Home: NextPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const docs = querySnapshot.docs.map(doc => doc.data());
        setData(docs);
      } catch (error) {
        console.error("Error fetching Firestore data: ", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
