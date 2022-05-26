import { graphql, Link } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>Gatsby + Netlify site with dynamic routes and CRM object from HubSpot <a href"https://developers.hubspot.com/docs/cms/data/query-hubspot-data-using-graphql">collector/v3/graphql GraphQL API</a></h1>
    {data.hubs.CRM.product_collection.items.map((item, i) => (
      <Link key={i} to={item.product_slug}>
        <h2>
          {item.name}
        </h2>
      </Link>
    ))}
  </div>
)

export const query = graphql`
  query {
    hubs {
      CRM {
        product_collection {
          items {
            name
            product_slug
            description
            price
            product_image
          }
        }
      }
    }
  }
`
