import { NextPage } from "next";
import Layout from "../components/layout";
import Landing from "../components/landing";
import Experience from "../components/experience";
import ContactForm from "../components/contact-form";

export interface HomePageProps {}

const Home: NextPage<HomePageProps> = () => {
  return (
    <Layout>
      <Landing />
      <Experience />
      <ContactForm />
    </Layout>
  );
};

export default Home;
