import { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";
import Experience from "../components/experience";

export interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <Layout>
      <Landing />
      <Experience />
    </Layout>
  );
};

export default Home;
