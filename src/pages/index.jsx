import React from "react"
import '../components/index/index.css';
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';
import { Button } from '../components/Button/Button';
import { Video } from '../components/index/Video/Video';
import { Squares } from '../components/index/Squares/Squares';
import { Questions } from '../components/index/FAQ/Questions';

const Index = () => (
  <Layout>
    <div className="landing-container">
      <h1>Build your backend from the <span className="highlight">frontend</span>.</h1>
      <Video />
      <div className="arguments-container">
        <div className="argument">
          <h2 className="stopper">Build <span className="highlight">faster</span></h2>
          <p>
            Quickly iterate over your types by sending a POST Request to our server.
            Operate over the latest version of your mock data via simple REST methods.
            Validate ideas in hours - instead of days.
          </p>
        </div>
        <div className="argument">
          <h2>Don't mock data, <span className="highlight">prototype</span> it</h2>
          <p>Don’t implement twice by instead getting your data from a backend right from the start.</p>
        </div>
        <div className="argument">
          <h2><span className="highlight">Share</span> your progress easiyl</h2>
          <p>No need for complicated deploy strategies. Everything is online and ready for you and your team.</p>
        </div>
        <div className="argument">
          <h2>And <span className="highlight">more</span> coming soon</h2>
          <ul>
            <li className="argument-list-item">Generate OpenId schemas from your prototypes</li>
            <li className="argument-list-item">Generate mock-data automatically</li>
          </ul>
        </div>
      </div>
      <Button title="Try CRUD for free" />
      <div className="examples-container">
        <h2 className="stopper">Example usages</h2>
        <p>Let's create an <span className="highlight">user</span> endpoint by sending the following POST request:</p>
        <pre className="example">
          {`
POST https://crud.io/24259317/users
{
  "name": "tom",
  "theme": "dark",
  "birthday": "1996-01-01T00:00:00.000Z"
}
        `}
        </pre>
        <p>CRUD will create the following <span className="highlight">endpoint</span> for us, that we can now access:</p>
        <pre className="example">
          {`
/users/{id}
GET
GET {id}
POST {id}
PUT {id}
DELETE {id}
        `}
        </pre>
        <p>If we change our data model CRUD <span className="highlight">automatically</span> cleans our database:</p>
        <pre className="example">
          {`
POST https://crud.io/24259317/users
{
  "name": "jenna",
  "theme": "light",
  "birthday": "1996-01-01T00:00:00.000Z",
  "lastLogin": "2022-03-15T20:01:22.614Z",
}
        `}
        </pre>
        <pre className="example">
          {`
GET https://crud.io/24259317/users
[{
  "name": "jenna",
  "theme": "light",
  "birthday": "1996-01-01T00:00:00.000Z",
  "lastLogin": "2022-03-15T20:01:22.614Z",
  "id": "42822af8-0d95-42de-aa7f”,
},]`}
        </pre>
      </div>
      <div className="cta-wrapper">
        <Button title="See CRUD in action" />
      </div>
      <Squares squares={[
        {
          title: <h3>Build <span className="highlight">faster</span></h3>,
          description: <p>Quickly iterate over your types - all you need is a POST request.</p>
        },
        {
          title: <h3>Don't mock data, <span className="highlight">prototype</span> it</h3>,
          description: <p>Don't implement twice by instead getting your data from a backend right from the start.</p>
        },
        {
          title: <h3><span className="highlight">Share</span> your progress easily</h3>,
          description: <p>No need for complicated deploy strategies. Everything is online and ready for you and your team.</p>
        },
      ]} />
      <Questions questions={[
        { text: 'Learn more about pricing', link: '/pricing' },
        { text: 'Frequently asked questions', link: '/questions' },
        { text: 'On how we treat your data', link: '/privacy' },
        { text: 'Check out our blog', link: '/blog' },
      ]} />
    </div>
  </Layout>
)

export const Head = () => <Seo />;

export default Index;
