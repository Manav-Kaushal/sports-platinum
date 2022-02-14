import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Container } from "@components/Container";
import Link from "next/link";
import { API_URL } from "@utils/config";

export default function Home({ news }) {
  console.log({ news });
  return (
    <Container>
      <div>
        <main className="py-6 px-default">
          <h1 className="mb-6 text-4xl font-bold text-center">Latest News</h1>
          {news.length === 0 && <h1>No News</h1>}
          <div className="grid grid-cols-2 gap-6">
            {news.map((item) => (
              <Card key={item.id} singleNews={item.attributes} />
            ))}
          </div>
          {news.length > 0 && (
            <div className="mt-4">
              <Link href="/news" passHref>
                <Button className="btn-blue">More News</Button>
              </Link>
            </div>
          )}
        </main>
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${API_URL}/api/sports?populate=image&_sort=date:ASC&_limit=5`
  );
  const news = await res.json();

  return {
    props: { news: news.data },
  };
}
