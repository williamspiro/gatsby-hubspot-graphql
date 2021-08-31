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
        url: `https://api.hubspotqa.com/collector/v3/graphql?portalId=102940484&hapikey=6a871f43-20c9-4d1d-bda5-3c49618dd4c0`,
        typeName: `HubSpotGraphQL`,
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preact`
  ],
}
