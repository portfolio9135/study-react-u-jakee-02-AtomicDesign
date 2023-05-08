import { Header } from "../atoms/layaut/Header";

export const HeaderOnry = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
