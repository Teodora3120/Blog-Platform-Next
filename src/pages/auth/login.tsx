import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LoginUser } from '@/api/auth';
import AuthNavbar from '@/components/navs/AuthNavbar';
import Footer from '@/components/footers/Footer';
import IconInput from '@/components/IconInput';
import { useUser } from '@/context/UserContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useUser();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // firebase login
      const user = await LoginUser(email, password);
      // save user in context
      login(user);
      router.push('/');
    } catch (error: any) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        setError('Invalid credentials');
      } else if (error.code === 'auth/user-not-found') {
        setError('User not found.');
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    setError('');
  }, [email, password]);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-indigo-100">
        <h2 className="text-blue-900 mb-6 text-2xl font-bold">Welcome to Blog Post 📘</h2>
        <div className="bg-white p-9 rounded-lg shadow-lg">
          <form onSubmit={handleLogin} className="space-y-4">
            <IconInput
              iconClass="fa-solid fa-envelope"
              placeholder="Sign up with your email..."
              value={email}
              type="email"
              onChange={setEmail}
            />
            <IconInput
              iconClass="fa-solid fa-lock"
              placeholder="Write your password..."
              value={password}
              type="password"
              onChange={setPassword}
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-5 py-1 mt-4 text-white bg-blue-950 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
