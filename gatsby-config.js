const path = require(`path`)

module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src`),
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `hubs`,
        url: `https://api.hubspot${process.env.ENV}.com/collector/v3/graphql?portalId=${process.env.PORTAL_ID}&hapikey=${process.env.API_KEY}`,
        typeName: `HubSpotGraphQL`,
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}
