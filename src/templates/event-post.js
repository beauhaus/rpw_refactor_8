import React from 'react'
import { graphql } from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
// import Layout from '../components/layout'
import Navlink from '../components/navlink'


/* necessity to use graphql query export 
 * https://frontendmasters.com/courses/gatsby/getting-post-data-by-slug/
 */

export const query = graphql`
query ($slug: String){
  mdx(frontmatter: { slug: { eq: $slug } }) {
    frontmatter {
      slug
    }
    body 
  }
}`

// title
      // hours
      // tags

/* destructured and aliased to "event" 
 * (see link above)
 */
const EventPostTemplate = ({data: {mdx: event }}) => {
  // console.log("data: ", data)

  return (
    <div>

      {/* <h1>{event.frontmatter.title}</h1>
      <p>{event.frontmatter.hours}</p>
      <p>{event.frontmatter.tags}</p> */}
      
      <MDXRenderer>{event.body}</MDXRenderer>
      <Navlink to="/" textContent={"home"}/>
    </div>
  )
}

export default EventPostTemplate;

/*
thx to jason Langstorf
https://frontendmasters.com/courses/gatsby/generating-post-pages/
*/