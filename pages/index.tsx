import HomePage from "@/components/pages/HomePage";
import { PageProps } from "@/types";
import Layout from "./layout";

export default function IndexPage(props: PageProps) {
  const { page } = props;

  const sections = {
    hero: page?.heroSection || { title: "", subtitle: "" },
  };

  return (
      <Layout >
      <HomePage page={page} sections={sections} />
      </Layout>
  );
}
