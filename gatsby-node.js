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
          p_propertylisting_collection {
            items {
              dynamic_page_slug_3
            }
          }
        }
      }
    }
  `)

  data.hubs.CRM.p_propertylisting_collection.items.forEach(item => {
    actions.createPage({
      path: item.dynamic_page_slug_3,
      component: path.resolve(`./src/components/item.js`),
      context: {
        itemId: item.dynamic_page_slug_3,
      },
    })
  })
}