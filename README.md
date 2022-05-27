# Sample Netlify + Gatsby + HubSpot GraphQL site
[https://gatsby-netlify-hubspot-graphql.netlify.app/](https://gatsby-netlify-hubspot-graphql.netlify.app/)

This is a sample JAMstack project, using:
- [Gatsby](https://www.gatsbyjs.com/) as a static site generator
- [Netlify](https://www.netlify.com/) for build + hosting
- [HubSpot](https://www.hubspot.com/) as a headless data store 

## To run locally
1. Clone repo locally
2. `npm install` dependencies  
3. Create a `.env.development` file, with the following variables
    ```
    ENV=
    API_KEY=xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxx
    PORTAL_ID=xxxxxxxxxx
    ```
    NOTE: `ENV` should be left blank  
4. Run `gatsby develop` to run locally 
5. Update the various GraphQL queries to be fetching data that exists in your own HubSpot account, using the [HubSpot GraphQL API](https://developers.hubspot.com/docs/cms/data/query-hubspot-data-using-graphql)