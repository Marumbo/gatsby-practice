import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function index({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contacts = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2> Projects</h2>
        <h3>List of projects I have worked on!</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt="thumbnail"
                />
                <h3>{project.frontmatter.title}</h3>
                <p> {project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>

        <p> Like what you see? Email me {contacts}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
