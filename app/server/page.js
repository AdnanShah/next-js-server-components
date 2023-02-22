import { getData } from '../../lib/fetch-data'
import ServerComponent from '../components/server'

export default async function Server() {
  console.log('============== Server page ======================')
  const data = await getData()

  return <ServerComponent data={data} />
}
