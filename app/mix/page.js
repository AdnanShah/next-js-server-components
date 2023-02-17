import Client from '../client/page'
import Server from '../server/page'

export default function MixMatchPage() {
  console.log('🚀 ~ file: page.js:5 ~ MixMatchPage')
  return (
    <div>
      <h1>Mix Pages</h1>
      <div className="box-blue">
        <Client>
          <Server />
        </Client>
      </div>
    </div>
  )
}
