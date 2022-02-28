import { navigation } from "@utils/Mocks/HeaderData";
import { SearchInput } from "..";
import Link from "next/link";
import AuthContext from "context/AuthContext";
import { useContext } from "react";

export const Header = () => {
  const { user, signout } = useContext(AuthContext);
  return (
    <header className="bg-indigo-600">
      <nav className="px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" passHref>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-auto h-10 cursor-pointer"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <a
                href="/news"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                News
              </a>
              {user ? (
                <>
                  <a
                    href="/news/add"
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    Add News
                  </a>
                  <a
                    href="/auth/dashboard"
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    Dashboard
                  </a>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex items-center ml-10 space-x-4">
            <SearchInput />
            {!user ? (
              <Link href={`/auth/signin`}>
                <button className="btn">Login</button>
              </Link>
            ) : (
              <Link href={`/auth/signout`}>
                <button className="btn" onClick={() => signout()}>
                  Logout
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
