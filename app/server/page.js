import Home from "../components/home"

async function getData() {
  const res = await fetch(
    `https://5fbc07c3c09c200016d41656.mockapi.io/api/v1/games`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  console.log('🚀  fetch on server data')
  return res.json()
}

export default async function Server() {
  console.log('============== Server page ======================')
  const data = await getData()

  return (
    <>
      <h1>Server Page</h1>
      <Home data={data} />
    </>
  )
}
