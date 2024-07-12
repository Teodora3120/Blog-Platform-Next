import React from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/context/UserContext';
import AuthLayout from '@/layouts/AuthLayout';

interface LogoutProps {
    layout: React.ComponentType<{ children: React.ReactNode }>;
}

const Logout: React.FC<LogoutProps> & { layout: React.ComponentType<{ children: React.ReactNode }> } = ({ layout }) => {
    const { logout } = useUser();
    const router = useRouter();
    logout();
    router.push('/auth/login')
    return null;
};

Logout.layout = AuthLayout;

export default Logout;
