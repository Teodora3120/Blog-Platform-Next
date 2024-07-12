// src/components/Navbar.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const AuthNavbar = () => {
  const [currentLocation, setCurrentLocation] = useState('')
  const router = useRouter();

  useEffect(() => {
    setCurrentLocation(router.pathname)
    console.log(router.pathname)
  }, [router.pathname])

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Blog Post</div>
        <ul className="flex space-x-4">
          {currentLocation === '/auth/login' && (<li><Link href="/auth/register" className='text-white font-semibold'>Register</Link></li>)}
          {currentLocation === '/auth/register' && (<li><Link href="/auth/login" className='text-white font-semibold'>Login</Link></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default AuthNavbar;
