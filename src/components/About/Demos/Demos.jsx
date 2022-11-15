import React from 'react';
import { Demo } from './Demo';

const demos = [
  {
    text: <p>Let's create an <span className="highlight">user</span> endpoint by sending the following POST request:</p>,
    code: <pre className="demo">
      {
        `
POST https://crud.io/24259317/users
{
  "name": "tom",
  "theme": "dark",
  "birthday": "1996-01-01T00:00:00.000Z"
}`
      }
    </pre>
  },
  {
    text: <p>CRUD will create the following <span className="highlight">endpoint</span> for us, that we can now access:</p>,
    code: <pre className="demo">
      {
        `
/users/{id}
GET
GET {id}
POST {id}
PUT {id}
DELETE {id}`
      }
    </pre>
  },
  {
    text: <p>If we change our data model CRUD <span className="highlight">automatically</span> cleans our database:</p>,
    code: <div>
      <pre className="demo">
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
      <pre className="demo">
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
  }

];

export const Demos = () => (
  <div className="demos-container">
    {demos.map((demo, key) => <Demo key={key} {...demo} />)}
  </div>
)
