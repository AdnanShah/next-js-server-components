export default function Home({ data }) {
  console.log('🚀 ~ app => components => Home (server component)')

  if (!data) {
    return <>loading...</>
  }

  return (
    <div>
      {data.map((game, index) => {
        return (
          <div key={game?.id}>
            <h1>{game?.name}</h1>
            <h3>{game?.genre}</h3>
          </div>
        )
      })}
    </div>
  )
}
