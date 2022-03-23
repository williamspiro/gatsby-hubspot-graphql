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
        url: `https://api.hubspot.com/collector/v3/graphql?portalId=xxxxxxxx&hapikey=xxxxxxx-xxxxxxx-xxxxx-xxxxx-xxxxxxxxxx`,
        typeName: `HubSpotGraphQL`,
        refetchInterval: 60,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}
