'use client'

import { useEffect } from 'react'

export default function Client(props) {
  console.log('🚀 ~ file: page.js:6 ~ props')

  useEffect(() => {
    console.log('============ client page =================')
  })
  if (props.children) {
    return (
      <>
        <h1>client Page</h1>
        {props.children}
      </>
    )
  }
  return <h1>client Page</h1>
}

// getServerSideProps is not supported

// export async function getServerSideProps() {
//   return { props: { data: [{ key: 'value', key1: 'value1', key2: 'value2' }] } }
// }
