import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 class="main-heading">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </h1>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <div className="header-border"></div>
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      {/* <footer>
        <div className='copyright'>
          RyanAllred.ai © {new Date().getFullYear()}
        </div>
      </footer> */}
    </div>
  )
}

export default Layout
