import { useRouter } from "next/router";

const SingleNews = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div>
      <h2>Single News</h2>
      <h3>{router.query.slug}</h3>
    </div>
  );
};

export default SingleNews;
