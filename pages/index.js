import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { API_URL } from "@utils/config";

export default function Home({ news }) {
  const newsArray = news.news;
  return (
    <Container>
      <div>
        <main className="px-default py-6">
          <h1 className="text-4xl mb-6 text-center font-bold">Latest News</h1>
          {newsArray.length === 0 && <h1>No News</h1>}
          <div className="grid grid-cols-2 gap-4">
            {newsArray.map((item) => (
              <Card key={item.id} singleNews={item} />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();

  return {
    props: { news },
  };
}
