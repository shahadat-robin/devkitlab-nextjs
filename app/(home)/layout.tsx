import type { PropsWithChildren } from 'react';
import Footer from './_layout/footer';
import AppHeader from './_layout/header';
import RootProvider from './provider';

export default function FrontendLayout({ children }: PropsWithChildren) {
  return (
    <RootProvider>
      <AppHeader />
      <main>{children}</main>
      <Footer />
    </RootProvider>
  );
}
