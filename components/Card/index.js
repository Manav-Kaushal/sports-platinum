import Link from "next/link";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const Card = ({ singleNews }) => {
  const imgUrl =
    singleNews?.attributes?.image?.data?.attributes?.url ||
    "https://via.placeholder.com/600x600.webp?text=Image+Not+Available";
  return (
    <div className="w-full overflow-hidden shadow-sm select-none group lg:max-w-full lg:flex">
      <div
        className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        title={singleNews?.attributes?.name}
      />

      <div className="flex justify-between p-4 overflow-hidden leading-normal bg-white border-b border-l border-r border-gray-200 rounded-b lg:border-l-0 lg:border-t lg:border-gray-200 lg:rounded-b-none lg:rounded-r grow">
        <div>
          <div className="mb-8">
            {/* <p className="flex items-center text-sm text-green-600">
              <svg
                className="w-3 h-3 mr-2 text-green-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p> */}
            <Link href={`/news/${singleNews?.attributes?.slug}`} passHref>
              <div className="mb-2 text-xl font-semibold text-gray-800 transition duration-200 cursor-pointer hover:text-indigo-500 line-clamp-1">
                {singleNews?.attributes?.name}
              </div>
            </Link>
            <p className="text-base text-gray-600 line-clamp-2">
              {singleNews?.attributes?.detail}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="inline-block w-10 h-10 rounded-md"
              src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
              alt="user profile image"
            />
            <div className="text-sm">
              <p className="font-semibold leading-none text-gray-800">
                John Smith
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {dayjs(singleNews?.attributes?.date).format(
                  "Do MMM YYYY, h:mm A"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
