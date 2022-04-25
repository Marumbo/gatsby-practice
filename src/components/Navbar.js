import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title 
        }
      }
    } 
  `)

  const {title} = data.site.siteMetadata

  return (
    <nav>
 
     
        <h2>{title}</h2>
    
      <div className="Link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
