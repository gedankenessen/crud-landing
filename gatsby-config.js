module.exports = {
  siteMetadata: {
    title: `crud`,
    description: `Build your backend from the frontend.`,
    github: `@gedankenessen`,
    twitter: `@gedankenessen`,
    author: `gedankenessen`,
    url: `https://gedankenessen.de`,
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        }
      }
    },
  ],
}
