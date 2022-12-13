import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from '../../components/Layout/Layout';
import { Seo } from '../../components/Seo/Seo';
import { BreadCrumps } from '../../components/BreadCrumps/BreadCrumps';
import '../../components/Blog/blog-index.css';

export const BlogEntry = ({ title, date, description, slug }) => (
  <Link to={`/blog/${slug}`} className="blog-index-entry-link">
    <div className="blog-index-entry-container">
      <h3 className="blog-index-entry-headline">{title}</h3>
      <p className="blog-index-entry-date">{date}</p>
      <p className="blog-index-entry-description">{description}</p>
    </div>
  </Link>
)

export default function Template({ data }) {
  const entries = data?.allMarkdownRemark?.edges;
  return (
    <Layout current="blog">
      <h1 className="blog-index-title">Blog</h1>
      <BreadCrumps crumps={[{ crump: 'blog', link: '/blog' },]} />
      <div className="blog-index-entries">
        {entries.map(({ node }) => <BlogEntry key={node.id} {...node.frontmatter} />)}
      </div>
    </Layout >
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data ?? {}
  const { frontmatter } = markdownRemark ?? {};
  return <Seo title={frontmatter?.title ?? 'blog'} description={frontmatter?.description} />
}

export const pageQuery = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog-entry"}}}) {
    edges {
      node {
        id
        frontmatter {
          slug
          title
          description
          date
        }
      }
    }
  }
}
`
