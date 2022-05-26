import { graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"

export default ({ data }) => {
  const item = data.hubs.CRM.p_propertylisting
  return (
    <div>
      <h1>{item.address}</h1>
      <h3>${item.price}</h3>
      <p>
        <ul>
          <li>bedrooms: {item.bedrooms}</li>
          <li>bathrooms: {item.batrooms}</li>
          <li>sq feet: {item.square_feet}</li>
        </ul>
      </p>
      <img src={item.property_image} />
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
