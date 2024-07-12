import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import avatarImage from '../../assets/avatar-profile.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    router.push('/auth/logout');
  };

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Blog Post</div>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className='font-semibold'>
              Home
            </Link>
          </li>
          <li>
            <i className="c-pointer fa-solid fa-bell mr-2" />
          </li>
          <li className="relative">

            <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
              <Image
                src={avatarImage}
                alt="Profile"
                width={500}
                height={500}
                className="w-8 h-8 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <Link href="/admin/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
