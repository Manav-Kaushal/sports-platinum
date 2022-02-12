import { Footer, Header } from "..";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="px-4 sm:px-6 lg:px-8 py-4">{children}</div>
      <Footer />
    </div>
  );
};
