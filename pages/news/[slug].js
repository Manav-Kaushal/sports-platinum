import { Container } from "@components/Container";
import { company } from "@utils/config";
import { useRouter } from "next/router";

const SingleNews = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Container title={`${slug} | ${company.name}`}>
      <h2>Single News</h2>
      <h3>{slug}</h3>
    </Container>
  );
};

export default SingleNews;
