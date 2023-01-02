import Link from 'next/link'
import NavLink from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <NavLink href="/linkSample">
        <a>link Sample Page</a>
      </NavLink>
    </>
  )
}

export default Index
