import ClientComponent from '../components/client'
import ServerComponent from '../components/server'
import { getData } from '../../lib/fetch-data'

export default async function MixMatchPage() {
  console.log('🚀 ~ file: page.js:5 ~ MixMatchPage')
  const data = await getData()

  return (
    <>
      <h1>Mix Pages</h1>
      <div className="box-blue">
        <ClientComponent>
          <ServerComponent data={data} />
        </ClientComponent>
      </div>
    </>
  )
}
