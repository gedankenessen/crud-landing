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
      <div className="headline-container">
        <h1>Prototype your backend with your <span className="highlight">frontend</span>.</h1>
      </div>
      <div className="video-container">
        <Video />
      </div>
      <div className="features-container">
        <Features />
      </div>
      <div className="cta-container">
        <Button title="Try CRUD for free" />
      </div>
      <div className="demos-container">
        <Demos />
      </div>
      <div className="cta-container">
        <Button title="See CRUD in action" />
      </div>
      <div className="squares-container">
        <Squares />
      </div>
      <div className="questions-container">
        <Questions />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo />;

export default About;
