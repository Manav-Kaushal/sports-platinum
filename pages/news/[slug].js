import { Container } from "@components/Container";
import { API_URL, company } from "@utils/config";
import { useRouter } from "next/router";
// import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const SingleNews = ({ news }) => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Container title={`${news.name} | ${company.name}`}>
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                {news.date}, {news.time}
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {news.name}
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
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
              className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
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
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <img src={news.image} alt={news.name} />
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>{news.detail}</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  onClick={() => router.back()}
                  className="inline-flex items-center space-x-2 cursor-pointer hover:text-indigo-500 transition duration-200"
                >
                  <ChevronLeftIcon className="h-4 w-4 mr-1" />
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
  const res = await fetch(`${API_URL}/api/news/${slug}`);
  const singleNews = await res.json();

  return {
    props: { news: singleNews[0] },
  };
}

export default SingleNews;
