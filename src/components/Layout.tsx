import React, { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="navbar">
        <Link href="/" rel={"prefetch"}>
          HOME
        </Link>
        <Link href="/ssr" rel={"prefetch"}>
          SSR
        </Link>
      </div>
      {children}
    </>
  );
}
