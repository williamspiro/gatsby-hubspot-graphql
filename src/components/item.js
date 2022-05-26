import { graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"

export default ({ data }) => {
  const item = data.hubs.CRM.product
  return (
    <div>
      <h1>{item.name}</h1>
      <h3>${item.price}</h3>
      <p>
        {item.description}
      </p>
      <img src={item.product_image} />
    </div>
  )
}

export const query = graphql`
  query($itemId: String!) {
    hubs {
      CRM {
        product(uniqueIdentifier: "product_slug", uniqueIdentifierValue: $itemId) {
          name
          product_slug
          description
          price
          product_image
        }
      }
    }
  }
`
