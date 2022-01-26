import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

const BlogPostTemplate = args => {
  // const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data

  const node = args.pageContext.node
  console.log(node)
  const script = <script src={node.link + '.js'}></script>
  console.log(script)
  return (
    <Layout location={{ location: { pathname: 'path' } }} title='blog'>
      <h1>hello world {script}</h1>
      <div dangerouslySetInnerHTML={{__html:node.content}}></div>
    </Layout>
  )
  // return (
  //   <Layout location={location} title={siteTitle}>
  //     <Seo
  //       title={post.frontmatter.title}
  //       description={post.frontmatter.description || post.excerpt}
  //     />
  //     <article
  //       className="blog-post"
  //       itemScope
  //       itemType="http://schema.org/Article"
  //     >
  //       <header>
  //         <h1 itemProp="headline">{post.frontmatter.title}</h1>
  //         <p>{post.frontmatter.date}</p>
  //       </header>
  //       <section
  //         dangerouslySetInnerHTML={{ __html: post.html }}
  //         itemProp="articleBody"
  //       />
  //       <hr />
  //       <footer>
  //         <Bio />
  //       </footer>
  //     </article>
  //     <nav className="blog-post-nav">
  //       <ul
  //         style={{
  //           display: `flex`,
  //           flexWrap: `wrap`,
  //           justifyContent: `space-between`,
  //           listStyle: `none`,
  //           padding: 0,
  //         }}
  //       >
  //         <li>
  //           {previous && (
  //             <Link to={previous.fields.slug} rel="prev">
  //               ← {previous.frontmatter.title}
  //             </Link>
  //           )}
  //         </li>
  //         <li>
  //           {next && (
  //             <Link to={next.fields.slug} rel="next">
  //               {next.frontmatter.title} →
  //             </Link>
  //           )}
  //         </li>
  //       </ul>
  //     </nav>
  //   </Layout>
  // )
}

export default BlogPostTemplate
