import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';

const Contact = () => (
  <Layout current='Contact'>
    <h1>Contact</h1>
    <h3>email:</h3>
    <h3><Link to={'mailto:team@gedankenessen.de'} target='_blank'>team@gedankenessen.de</Link></h3>
    <h3>website:</h3>
    <h3><Link to={'https://www.gedankenessen.de'} target='_blank'>www.gedankenessen.de</Link></h3>
    <h3>github:</h3>
    <h3><Link to={'https://www.github.com/gedankenessen'} target='_blank'>www.github.com/gedankenessen</Link></h3>
  </Layout>
)

export const Head = () => <Seo title='Contact' />;

export default Contact;
