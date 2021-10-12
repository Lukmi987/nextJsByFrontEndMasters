import React from 'react'
import { useRouter } from 'next/router';
const  Page = () => {
  const { query } = useRouter();
  // id because it corresponds with name of file
  return <div>Note pager id [].jsx {query.id}</div>
}

export default Page