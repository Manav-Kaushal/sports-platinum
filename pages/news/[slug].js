import { Container } from "@components/Container";
import { API_URL, company } from "@utils/config";
import { useRouter } from "next/router";
// import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const SingleNews = ({ news }) => {
  console.log({ news });
  const router = useRouter();
  const imgUrl = news.image.data.attributes.url;
  return (
    <Container title={`${news.name} | ${company.name}`}>
      <div className="px-4 py-16 overflow-hidden bg-white xl:py-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-max lg:max-w-7xl">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="font-semibold leading-6 tracking-wide text-indigo-600 uppercase">
                {dayjs(news.date).format("Do MMM YYYY, h:m A")}
              </h2>
              <p className="max-w-[900px] mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {news.name}
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute top-0 right-0 hidden -mt-20 -mr-20 md:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0 hidden -mb-20 -ml-20 md:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-lg text-gray-500 prose-indigo lg:max-w-none">
                  <img src={imgUrl} alt={news.name} />
                </div>
                <div className="mt-6 prose prose-lg text-gray-500 prose-indigo lg:mt-0">
                  <p>{news.detail}</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  onClick={() => router.back()}
                  className="inline-flex items-center space-x-2 transition duration-200 cursor-pointer hover:text-indigo-500"
                >
                  <ChevronLeftIcon className="w-4 h-4 mr-1" />
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/sports?populate=image&slug=${slug}`);
  const singleNews = await res.json();

  return {
    props: { news: singleNews.data[0].attributes },
  };
}

export default SingleNews;
