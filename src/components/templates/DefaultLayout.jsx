import { Footer } from "../atoms/layaut/Footer";
import { Header } from "../atoms/layaut/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
