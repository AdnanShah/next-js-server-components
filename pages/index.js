import ClientComponent from "../app/components/client"
import ServerComponent from "../app/components/server"

export default function Page({ data }) {
  console.log('🚀 pages => index.js')

  return (
    <>
      <h1>Client component (getServerSideProps)</h1>
      <ClientComponent>
        <ServerComponent data={data} />
      </ClientComponent>
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
