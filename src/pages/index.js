import {graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {
//console.log(data)
const image = getImage(data.file.childImageSharp)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>IOT, Mobile and Web developer</p>
          <Link className={styles.btn} to="/projects">
            My Porfolio Projects!
          </Link>
        </div>
        <GatsbyImage image={image} alt="banner"/>
      </section>
    </Layout>
  )
}



export const query = graphql `
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
        formats: [AUTO, WEBP]

      )
    }
  }
}

`
 