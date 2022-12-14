import React from "react"
import { navigate } from 'gatsby';
import '../components/About/about.css';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';
import { Button } from '../components/Button/Button';
import { Video } from '../components/About/Video/Video';
import { Features } from '../components/About/Features/Features';
import { Demos } from '../components/About/Demos/Demos';
import { Questions } from '../components/About/FAQ/Questions';
import { Options } from '../components/About/Options/Options';

const About = () => (
  <Layout current={'About'}>
    <div className="landing-container layout-content">
      <div className="headline-container">
        <h1>Prototype your <span className="highlight">frontend</span> with your <span className="highlight">backend</span>.</h1>
      </div>
      <div className="video-container">
        <Video />
      </div>
      <div className="features-container">
        <Features />
      </div>
      <div className="cta-container">
        <Button title="Try crud for free" onClick={() => navigate('/wiki/installation')} />
      </div>
      <div className="demos-container">
        <Demos />
      </div>
      <div className="cta-container">
        <Button title="See crud in action" onClick={() => navigate('/wiki/first-steps')} />
      </div>
      <div className="questions-container">
        <Questions />
      </div>
      <div className="options-container">
        <Options />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo />;

export default About;
