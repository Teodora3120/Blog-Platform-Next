// src/pages/login.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RegisterUser } from '@/api/auth';
import AuthNavbar from '@/components/navs/AuthNavbar';
import Footer from '@/components/footers/Footer';
import IconInput from '@/components/IconInput';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await RegisterUser(email, password, name);
      router.push('/login');
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setError('')
  }, [email, password, name])

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-indigo-100">
        <h2 className="text-blue-900 mb-6 text-2xl font-bold">Welcome to Blog Post 📘</h2>
        <div className="bg-white p-9 rounded-lg shadow-lg">
          <form onSubmit={handleRegister} className="space-y-4">
            <IconInput
              iconClass="fa-solid fa-signature"
              placeholder="Your fullname..."
              value={name}
              type="text"
              onChange={setName}
            />

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
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="px-5 py-1  mt-4 text-white bg-blue-950 rounded-lg hover:bg-blue-900"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
