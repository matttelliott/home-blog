import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className='main-heading'>
        <Link to='/'>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className='header-link-home' to='/'>
        {title}
      </Link>
    )
  }

  return (
    <>
      <script src='https://gist.github.com/matttelliott/53baa36bfaef4f41baa134c6023d2629.js'></script>
      <div className='global-wrapper' data-is-root-path={isRootPath}>
        <header className='global-header'>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
