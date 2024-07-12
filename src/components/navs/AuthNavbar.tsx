// src/components/Navbar.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

const AuthNavbar = () => {
   const [currentLocation, setCurrentLocation] = useState('')

   useEffect(() => {
    setCurrentLocation(window.location.pathname)
   }, [])
  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Blog Post</div>
        <ul className="flex space-x-4">
          <li><Link href="/register" className={`${currentLocation === '/register' ? '' : "text-gray-200"}`}>Register</Link></li>
          <li><Link href="/login" className={`${currentLocation === '/login' ? '' : "text-gray-200"}`}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default AuthNavbar;
