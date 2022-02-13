import { Button } from "..";
import Link from "next/link";

export const Card = ({ singleNews }) => {
  return (
    <Link href={`/news/${singleNews.slug}`} passHref>
      <div className="group w-full lg:max-w-full lg:flex overflow-hidden shadow-sm cursor-pointer">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${singleNews.image})` }}
          title={singleNews.name}
        />

        <div className="border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none overflow-hidden lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            {/* <p className="text-sm text-green-600 flex items-center">
            <svg
              className="fill-current text-green-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p> */}
            <div className="text-gray-800 transition duration-200 font-semibold text-xl mb-2 group-hover:text-indigo-500 line-clamp-2">
              {singleNews.name}
            </div>
            <p className="text-gray-600 text-base line-clamp-3">
              {singleNews.detail}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="inline-block h-10 w-10 rounded-md"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-sm">
              <p className="text-gray-800 leading-none">John Smith</p>
              <p className="text-gray-600 text-xs">{singleNews.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
