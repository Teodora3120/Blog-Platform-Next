
import Head from 'next/head';
import React from "react";
import AdminLayout from '@/layouts/AdminLayout';

interface DashboardProps {
    layout: React.ComponentType<{ children: React.ReactNode }>;
}

const Dashboard: React.FC<DashboardProps> & { layout: React.ComponentType<{ children: React.ReactNode }> } = ({ layout }) => {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
                <p className="mb-8">This is the main content of the home page.</p>
            </div>
        </>
    )
};

Dashboard.layout = AdminLayout;
export default Dashboard;