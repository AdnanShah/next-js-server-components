import Client from '../app/client/page'
import Home from '../app/components/home'

export default function Page({ data }) {
  console.log('🚀 pages => index.js')

  return (
    <>
      <h1>Client component (getServerSideProps)</h1>
      <Client>
        <Home data={data} />
      </Client>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://5fbc07c3c09c200016d41656.mockapi.io/api/v1/games`
  )

  const data = await res.json()

  return { props: { data } }
}
