import React from "react"
import '../components/index/index.css';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';

const Home = () => (
  <Layout>
    <h1>Build your backend from the <span className="highlight">frontend</span>.</h1>
  </Layout>
)

/*export const Header = () => <Seo />;*/

export default Home;
