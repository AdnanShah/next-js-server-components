import Home from './home'

export default function ServerComponent({ data }) {
  console.log('🚀 ~ ServerComponent')

  return (
    <>
      <h1>Server component</h1>
      <Home data={data} />
    </>
  )
}
