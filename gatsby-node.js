const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {

    const { createPage } = actions
    
const result = await  graphql(`
query Articles {
    allMarkdownRemark {
       nodes {
         frontmatter {
           slug
         }
       }
     }
   }
`)


  // Create pages for each markdown file.
  const projectDetailsTemplate = path.resolve('./src/templates/project-details.js')
 
    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: '/projects/' + node.frontmatter.slug,
            component:  projectDetailsTemplate,
            context: {
                slug: node.frontmatter.slug
            },
        })
    })
}







