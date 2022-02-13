import React from "react";
import Link from "next/link";
import { Container } from "@components/Container";

const NotFound = () => {
  return (
    <Container title="Page Not Found">
      <div className="flex-shrink-0 my-auto py-16 sm:py-32 px-default">
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          404 error
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
