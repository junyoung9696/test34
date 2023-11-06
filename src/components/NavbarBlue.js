import Link from "next/link";
import { useState, useEffect } from "react";
import Authentication from "./authentication";
import Image from "next/image";

function NavbarBlue() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Authentication setIsLoggedIn={setIsLoggedIn} />
      <nav className="flex items-center justify-between flex-wrap bg-sky-700 p-6 sticky top-0 z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">
            <Image
            src="/1234.png"
            alt="x"
            width={172}
            height={128}
          />
            </Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/menu/chart"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
            >
              환경센서 통합관리
            </Link>
            <Link
              href="/menu/three"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
            >
              생육정보 자동측정
            </Link>
            <Link
              href="/menu/vrar"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
            >
              생산량 예측 시뮬레이션
            </Link>

            {isLoggedIn && (
              <Link
                href="/menu/admin"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-white"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      </nav>
      <style jsx>{`
        Link {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default NavbarBlue;
