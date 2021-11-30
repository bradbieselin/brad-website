import { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";

export interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export default Home;
