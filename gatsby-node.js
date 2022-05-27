const path = require(`path`)
const remark = require(`remark`)
const html = require(`remark-html`)
const dateformat = require(`dateformat`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      hubs {
        CRM {
          product_collection {
            items {
              product_slug
            }
          }
        }
      }
    }
  `)

  data.hubs.CRM.product_collection.items.forEach(item => {
    actions.createPage({
      path: item.product_slug,
      component: path.resolve(`./src/components/item.js`),
      context: {
        itemId: item.product_slug,
      },
    })
  })
}
