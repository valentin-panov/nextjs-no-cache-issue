import React, { ReactNode } from "react";
import Link from "next/link";
import * as process from "process";

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
      <div>process.env.NODE_ENV: {process.env.NODE_ENV}</div>
      <div>process.env.TEST_ENV: {process.env.TEST_ENV}</div>
      {children}
    </>
  );
}
