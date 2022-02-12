import { Hero } from "@sections/Hero";
import { useRouter } from "next/router";
import { Footer, Header } from "..";

export const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      {router.pathname === "/" && <Hero />}
      {children}
      <Footer />
    </div>
  );
};
