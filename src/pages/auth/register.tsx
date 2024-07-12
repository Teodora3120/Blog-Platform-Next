// src/pages/login.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RegisterUser } from '@/api/auth';
import IconInput from '@/components/IconInput';
import AuthLayout from '@/layouts/AuthLayout';

interface RegisterProps {
  layout: React.ComponentType<{ children: React.ReactNode }>;
}

const Register: React.FC<RegisterProps> & { layout: React.ComponentType<{ children: React.ReactNode }> } = ({ layout }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await RegisterUser(email, password, name);
      router.push('/auth/login');
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
        <div className="bg-white p-12 w-full max-w-md rounded-lg shadow-lg">
          <form onSubmit={handleRegister}>
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
                  className="px-20 py-2 mt-4 text-white bg-blue-950 rounded-lg hover:bg-blue-900"
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

Register.layout = AuthLayout;

export default Register;
