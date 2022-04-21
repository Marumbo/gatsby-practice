import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function index() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2> Projects</h2>
        <h3>List of projects I have worked on!</h3>
      </div>
    </Layout>
  )
}
