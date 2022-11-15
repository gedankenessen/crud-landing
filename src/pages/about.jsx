import React from "react"
import '../components/About/about.css';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';
import { Button } from '../components/Button/Button';
import { Video } from '../components/About/Video/Video';
import { Features } from '../components/About/Features/Features';
import { Demos } from '../components/About/Demos/Demos';
import { Squares } from '../components/About/Squares/Squares';
import { Questions } from '../components/About/FAQ/Questions';

const About = () => (
  <Layout current={'About'}>
    <div className="landing-container">
      <h1>Build your backend from the <span className="highlight">frontend</span>.</h1>
      <Video />
      <Features />
      <Button title="Try CRUD for free" />
      <div className="demo-container">
        <h2 className="stopper">Demo</h2>
        <Demos />
      </div>
      <div className="cta-wrapper">
        <Button title="See CRUD in action" />
      </div>
      <Squares />
      <Questions />
    </div>
  </Layout>
)

export const Head = () => <Seo />;

export default About;
