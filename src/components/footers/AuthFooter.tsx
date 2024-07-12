import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-indigo-100 w-full">
      <footer className="flex justify-between p-4 text-blue-950 text-center w-full max-w-4xl">
        <p className="text-left">© 2024 <span className="text-blue-900">Blog Post</span></p>
        <p className="text-right">All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
