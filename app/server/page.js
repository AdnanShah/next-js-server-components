import ServerComponent from '../../components/server'
import { getData } from '../../lib/fetch-data'

export default async function Server() {
  console.log('============== Server page ======================')
  const data = await getData()

  return <ServerComponent data={data} />
}
