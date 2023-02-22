import Home from "./home"

export default function ServerComponent({ data }) {
  console.log('🚀 ~ ServerComponent (this should not be in browser)')

  return (
    <>
      <h1>Server component</h1>
      <Home data={data} />
    </>
  )
}
