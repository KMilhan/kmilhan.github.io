import Link from 'next/link'
import NavLink from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
        <a href="https://github.com"> To GitHub </a>
      <NavLink href="/linkSample">
          link Sample Page
      </NavLink>
    </>
  )
}

export default Index
