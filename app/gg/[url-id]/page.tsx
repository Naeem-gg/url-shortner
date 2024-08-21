import { getUrl } from '@/db/getUrl'
import React from 'react'

const page = async({params}:{params:{['url-id']:string}}) => {
    console.log(params['url-id'])
    const ogUrl = await getUrl(params['url-id'])

  return (  
    <div>
      {params['url-id']}
      <h1>{ogUrl}</h1>
    </div>
  )
}

export default page
