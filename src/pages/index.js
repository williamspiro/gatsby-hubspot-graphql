import { graphql, Link } from "gatsby"
import React from "react"

export default ({ data }) => (
  <div>
    <h1>Gatsby + Netlify site with dynamic routes and CRM custom object data from HubSpot collector/v3/graphql GraphQL API</h1>
    {data.hubs.CRM.p_propertylisting_collection.items.map((item, i) => (
      <Link key={i} to={item.dynamic_page_slug_3}>
        <h2>
          {item.address}
        </h2>
      </Link>
    ))}
  </div>
)

export const query = graphql`
  query {
    hubs {
      CRM {
        p_propertylisting_collection {
          items {
            dynamic_page_slug_3
            address
          }
        }
      }
    }
  }
`
