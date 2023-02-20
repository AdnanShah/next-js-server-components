'use client'

export default function ClientComponent(props) {
  console.log('🚀 ~ ClientComponent')

  if (props.children) {
    return (
      <>
        <h1>client component</h1>
        {props.children}
      </>
    )
  }

  return <h1>client component</h1>
}
