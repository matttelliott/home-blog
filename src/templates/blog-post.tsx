import * as React from 'react'
import Layout from '../components/layout'
import Gist from '../components/gist'

const BlogPostTemplate = ({ pageContext, location }) => {
  const { node } = pageContext
  const [, , , , id] = node.link.split('/')
  return (
    <Layout location={location} title='blog'>
      <h1>{node.title}</h1>
      <Gist id={id}></Gist>
    </Layout>
  )
}

export default BlogPostTemplate
