// src/pages/login.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/api/auth';
import AuthNavbar from '@/components/navs/AuthNavbar';
import Footer from '@/components/footers/Footer';
import IconInput from '@/components/IconInput';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        console.log(email, password)
      await login(email, password);
      router.push('/');
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setError('')
  }, [email, password])

  return (
    <>
    <AuthNavbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-black mb-6 text-2xl font-bold">Welcome to Blog Post 📘</h2>
      <div className="bg-white p-9 rounded-lg shadow-lg">
        <form onSubmit={handleLogin} className="space-y-4">
        <IconInput 
          iconClass='fa-solid fa-envelope'
          placeholder="Sign up with your email..."
          value={email}
          type="email"
          onChange={setEmail}
          />

        <IconInput 
          iconClass='fa-solid fa-lock'
          placeholder="Write your password..."
          value={password}
          type="password"
          onChange={setPassword}
          />

          <div className='flex items-center justify-center'>
          {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
                type="submit"
                className="px-3 py-1  mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
                Login
            </button>
        </div>       
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
