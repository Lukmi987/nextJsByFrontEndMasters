import React from 'react'
import Link from 'next/link'
import Nav from './src/components/nav';

const  Page = () => <div>Index page
  <Nav />

<Link href='/notes'>
  <a>Link to notest</a>
</Link>
</div>

export default Page