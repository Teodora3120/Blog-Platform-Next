import { ReactNode } from 'react';
import Footer from '@/components/footers/Footer';
import AuthNavbar from '@/components/navs/AuthNavbar';

interface LayoutProps {
    children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            <header>
                <AuthNavbar />
            </header>
            <main className="flex-grow w-full p-4">
                {children}
            </main>
            <footer className="mt-auto w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default AuthLayout;
