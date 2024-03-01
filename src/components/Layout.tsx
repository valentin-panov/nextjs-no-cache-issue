import React, { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="navbar">
        <Link href="/">HOME</Link>
        <Link href="/ssr">SSR</Link>
      </div>
      {children}
    </>
  );
}
