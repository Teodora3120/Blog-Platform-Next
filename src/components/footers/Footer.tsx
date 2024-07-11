import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <footer className="flex justify-between p-4 text-black text-center w-full max-w-4xl mx-auto">
        <p className="text-left">© 2024 <span className="text-indigo-500">Blog Post</span></p>
        <p className="text-right">All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
