import { graphql } from "gatsby";
import React from "react";
import {Layout} from '../components/Layout/Layout';
import {Seo} from '../components/Seo/Seo';
import { BreadCrumps } from '../components/BreadCrumps/BreadCrumps';
import '../components/Wiki/wiki-index.css';

export default function Template({ data }) {
  const { markdownRemark } = data ?? {}
  const { frontmatter, html } = markdownRemark ?? {};

  return (
    <Layout current="wiki">
      <h1 className="wiki-index-title">{frontmatter?.title}</h1>
      <BreadCrumps crumps={[{crump: 'wiki', link: '/wiki'},]}/>
      <div
        className="wiki-index-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout >
  )
}

export const Head = ({ data }) => {
  const { markdownRemark } = data ?? {}
  const { frontmatter } = markdownRemark ?? {};
  return <Seo title={frontmatter?.title ?? 'Wiki'} description={frontmatter?.description} />
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
