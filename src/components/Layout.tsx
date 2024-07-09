// components/Layout.tsx
import React, { ReactNode } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Blog Platform</NavbarBrand>
    </Navbar>
    <Container>
      {children}
    </Container>
  </>
);

export default Layout;
