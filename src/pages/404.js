import React from "react"
import '../components/404/404.css';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';

const About = () => (
  <Layout current={'404'}>
    <div className="not-found-container">
      <h1>404 <span className="highlight">page</span> not <span className="highlight">found</span>.</h1>
      <h1><span className="highlight">404</span> page <span className="highlight">not</span> found <span className="highlight">.</span></h1>
      <h1>404 <span className="highlight">page</span> not <span className="highlight">found</span>.</h1>
      <h1><span className="highlight">404</span> page <span className="highlight">not</span> found <span className="highlight">.</span></h1>
    </div>
  </Layout>
)

export const Head = () => <Seo title={'404'} />;

export default About;
