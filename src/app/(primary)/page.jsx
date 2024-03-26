"use client";

import FooterComponent from '@/components/FooterComponent';
import ProductListingsComponent from '@/components/ProductListingsComponent';
import StoreHeadingComponent from '@/components/StoreHeadingComponent';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log(localStorage.setItem('cart', JSON.stringify([])));
  }, []);
  return (
      <div className="flex flex-col justify-between min-h-screen">
        <main>
          <StoreHeadingComponent />
          <ProductListingsComponent />
        </main>
        <FooterComponent />
      </div>
  );
}