import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({ children, ...props }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          meta: siteMetadata {
            title
            description
            author
            card
            url
          }
        }
      }
    `
  )

  const title = props.title ?? site.meta?.title;
  const description = props.description ?? site.meta.description;
  const card = props.card ?? site.meta?.card;
  const author = props.author ?? site.meta?.image;
  const url = props.url ?? site.meta?.url;

  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <meta name="description" content={description} />
      <meta name="image" content={`${url}${card}`} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${card}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  )
}

export default Seo
