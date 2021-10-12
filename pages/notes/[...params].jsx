import React from 'react'
import { useRouter } from 'next/router';
const  Page = () => {
  const { query } = useRouter();
  console.log(query.params);
  return <div>Note pager id [].jsx
    <div>
      {query.params.map((param)=> <>my param is{param}</>)}
    </div>

  </div>
}

export default Page