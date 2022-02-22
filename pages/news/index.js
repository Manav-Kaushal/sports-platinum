import { Card } from "@components/Card";
import { Container } from "@components/Container";
import { API_URL } from "@utils/config";

const index = ({ news }) => {
  const removeNews = async (id) => {
    await fetch(`${API_URL}/api/sports/${id}`, {
      method: "DELETE",
    })
      .then(() => console.log("Removed, ID:", id))
      .catch((err) => console.log(err));
  };

  return (
    <Container title="News">
      <div>
        <main className="py-6 px-default">
          <h1 className="mb-6 text-4xl font-bold text-center">News</h1>
          {news.length === 0 && <h1>No News</h1>}
          <div className="grid grid-cols-2 gap-6">
            {news.map((item) => (
              <Card key={item.id} singleNews={item} cb={removeNews} />
            ))}
          </div>
        </main>
      </div>
    </Container>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/sports?populate=image`);
  const news = await res.json();

  return {
    props: { news: news.data },
  };
}

export default index;
