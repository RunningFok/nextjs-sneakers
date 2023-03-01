"use client";
import "./globals.css";
import Link from "next/link";
import { Dropdown } from "@nextui-org/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Dropdown>
            <Dropdown.Button flat>Brands</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="airjordan">
                <Link href="/brands/airjordan">Air Jordan</Link>
              </Dropdown.Item>
              <Dropdown.Item key="adidas">
                <Link href="/brands/adidas">Adidas</Link>
              </Dropdown.Item>
              <Dropdown.Item key="hoka" href="/brands/hoka">
                <Link href="/brands/hoka">Hoka</Link>
              </Dropdown.Item>
              <Dropdown.Item key="newbalance" href="/brands/newbalance">
                <Link href="/brands/newbalance">New Balance</Link>
              </Dropdown.Item>
              <Dropdown.Item key="nike" href="/brands/nike">
                <Link href="/brands/nike">Nike</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        {children}
      </body>
    </html>
  );
}
