import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

const BlogPostTemplate = ({ pageContext, location }) => {
  // const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data

  const { node } = pageContext
  return (
    <Layout location={location} title='blog'>
      <h1>{node.title}</h1>
      <h3>
        <Link to='{node.link}'>
          <img
            height='32'
            width='32'
            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
            alt='GitHub'
            title='GitHub'
          />
          Github
        </Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: node.content }}></div>
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
