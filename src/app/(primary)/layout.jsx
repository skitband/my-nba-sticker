"use client";

import NavComponent from "@/components/NavComponent";

export default function MainLayout({ children }) {
    return (
      <div>
        <NavComponent />
        {children}
      </div>
    );
  }