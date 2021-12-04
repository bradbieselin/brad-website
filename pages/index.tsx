import { GetStaticProps, NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";
import Experience from "../components/experience";
import { NavBarInterface } from "../lib/contentful/interface";
import { getNavBarContent } from "../lib/contentful/api";

export interface HomePageProps {
  navBar: NavBarInterface;
}

const Home: NextPage<HomePageProps> = ({navBar}) => {
  return (
    <Layout navBar={navBar}>
      <Landing />
      <Experience />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const navBar: NavBarInterface = await getNavBarContent("q9o5iAkR2WqWBHpPriu38")
  return {
    props: {
      navBar
    }
  }
}