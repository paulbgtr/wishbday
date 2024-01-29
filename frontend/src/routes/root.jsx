import { Layout } from "../components/Layout";
import { Header } from "../pagesComponents/index/Header";
import { Features } from "../pagesComponents/index/Features";
import { Ending } from "../pagesComponents/index/Ending";

const Root = () => {
  return (
    <Layout navbar className="justify-center py-32 gap-36 ">
      <Header />
      <Features />
      <Ending />
    </Layout>
  );
};

export default Root;
