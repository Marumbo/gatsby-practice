import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {

  //console.log(data);

  const {title, description, copyright} = data.site.siteMetadata

 // console.log(title);

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
        <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`
