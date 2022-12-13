import React from "react";
import { graphql } from "gatsby";
import { Layout } from '../components/Layout/Layout';
import { Seo } from '../components/Seo/Seo';
import { BreadCrumps } from '../components/BreadCrumps/BreadCrumps';
import '../components/Blog/blog-entry.css';

export default function Template({ data }) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};
  return (
    <Layout>
      <h1 className="blog-entry-title">{frontmatter?.title}</h1>
      <BreadCrumps crumps={[
        { crump: 'blog', link: '/blog' },
        { crump: frontmatter?.title, link: `/blog/${frontmatter?.slug}` }
      ]} />
      <p className="blog-entry-date">{frontmatter?.date}</p>
      <div
        className="blog-entry-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout >
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data ?? {}
  const { frontmatter } = markdownRemark ?? {};
  return <Seo title={frontmatter?.title ?? 'Blog'} description={frontmatter?.description} />
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
        date
      }
    }
  }
`
