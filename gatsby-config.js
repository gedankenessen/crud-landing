module.exports = {
  siteMetadata: {
    title: `Prototype your frontend with your backend.`,
    description: `Prototype faster by having crud create your basic CRUD backend. All you need to do is send over JSON - and crud will handle the rest.`,
    github: `@gedankenessen`,
    twitter: `@gedankenessen`,
    author: `gedankenessen`,
    url: `https://crud.gedankenessen.de`,
    card: `/card.png`,
    color: `#D9A621`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`],
          placeholder: `none`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `#D9A621`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `black`,
        display: `minimal-ui`,
        icon: './static/favicon.png'
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
