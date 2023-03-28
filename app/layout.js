"use client";
import "./globals.css";
import Link from "next/link";
import { Dropdown } from "@nextui-org/react";
import SearchInput from "./helper/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="border-b border-gray-300 py-2">
          <div className="flex items-center justify-ebtween max-w-7xl mx-auto">
            <nav className="flex items-center w-auto">
              <Link href="/">Home</Link>

              <Dropdown>
                <Dropdown.Button flat>Nike</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="nikeairforce1">
                    <Link href="/categories/nikeairforce1">
                      Nike Air Force 1
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="nikeairmax">
                    <Link href="/categories/nikeairmax">Nike Air Max</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="nikedunklow">
                    <Link href="/categories/nikedunklow">Nike Dunk Low</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="nikewaffle">
                    <Link href="/categories/nikewaffle">Nike Waffle</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="nikeall">
                    <Link href="/categories/nikeall">All Nike</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat>Air Jordan</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="airjordan1high">
                    <Link href="/categories/airjordan1high">
                      Air Jordan 1 High
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordan1mid">
                    <Link href="/categories/airjordan1mid">
                      Air Jordan 1 Mid
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordan1low">
                    <Link href="/categories/airjordan1low">
                      Air Jordan 1 Low
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordan3">
                    <Link href="/categories/airjordan3">Air Jordan 3</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordan4">
                    <Link href="/categories/airjordan4">Air Jordan 4</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordan5">
                    <Link href="/categories/airjordan5">Air Jordan 5</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="airjordanall">
                    <Link href="/categories/airjordanall">All Air Jordan</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat>Adidas</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="adidagazelle">
                    <Link href="/categories/adidagazelle">Adidas Gazelle</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="adidassamba">
                    <Link href="/categories/adidassamba">Adidas Samba</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="adidassuperstar">
                    <Link href="/categories/adidassuperstar">
                      Adidas Superstar
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="adidasultraboost">
                    <Link href="/categories/adidasultraboost">
                      Adidas Ultraboost
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="adidasall">
                    <Link href="/categories/adidasall">All Adidas</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button flat>Other Sneakers</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="converse">
                    <Link href="/categories/converse">Converse</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="crocs">
                    <Link href="/categories/crocs">Crocs</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="hoka">
                    <Link href="/categories/hoka">Hoka</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="newbalance">
                    <Link href="/categories/newbalance">New Balance</Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="onitsukatiger">
                    <Link href="/categories/onitsukatiger">Onitsuga Tiger</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
             <SearchInput />
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
