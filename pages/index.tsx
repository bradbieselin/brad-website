import { NextPage } from 'next';
import Layout from '../components/layout';
import NavBar from '../components/navbar';

export interface HomePageProps { };

const Home: NextPage<HomePageProps> = () => {
  return (
    <Layout>
      <NavBar>Hello</NavBar>
    </Layout>
  );
};

export default Home;