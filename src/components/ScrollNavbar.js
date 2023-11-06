import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

function ScrollNavbar({
  handleClick,
  isLoggedIn,
  section1Ref,
  section2Ref,
  section3Ref,
  section4Ref,
}) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-3 sticky top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <ScrollLink
              to="section1"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => handleClick(section1Ref)}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              style={{ cursor: "pointer" }}
            >
              <Image
            src="/1234.png"
            alt="x"
            width={172}
            height={128}
          />
            </ScrollLink>
          </span>
        </div>
        <div>
          
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
            <ScrollLink
              to="section2"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => handleClick(section2Ref)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-400 mr-4"
              style={{ cursor: "pointer" }}
            >
              환경센서 통합관리
            </ScrollLink>
            <ScrollLink
              to="section3"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => handleClick(section3Ref)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-400 mr-4"
              style={{ cursor: "pointer" }}
            >
              생육정보 자동측정
            </ScrollLink>
            <ScrollLink
              to="section4"
              spy={true}
              smooth={true}
              duration={800}
              onClick={() => handleClick(section4Ref)}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-400 mr-4"
              style={{ cursor: "pointer" }}
            >
              생산량 예측 시뮬레이션
            </ScrollLink>

            {isLoggedIn && (
              <Link
                href="/menu/admin"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-white"
              >
                Admin
              </Link>
            )}
          </div>
          <div>
            <Link
              href="/user/login"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          z-index: 2;
        }
      `}</style>
    </>
  );
}

export default ScrollNavbar;
