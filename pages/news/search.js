import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { API_URL } from "@utils/config";
import { useRouter } from "next/router";

export default function Home({ news }) {
  const router = useRouter();
  return (
    <Container title={`Search Results for "${router.query.term}"`}>
      <div>
        <main className="py-6 px-default">
          <h1 className="mb-6 text-4xl font-bold text-left">
            Search Results for "{router.query.term}"
          </h1>
          {news.length === 0 && (
            <h1>No news found for search term - {router.query.term}</h1>
          )}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {news.map((item) => (
              <Card key={item.id} singleNews={item} />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const res = await fetch(
    `${API_URL}/api/sports?filters[name][$containsi]=${term}&populate=image`
  );
  const news = await res.json();

  return {
    props: { news: news.data },
  };
}
