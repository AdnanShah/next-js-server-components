export default async function fetchData(type) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`)

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
}

export const getData = async () => {
  const res = await fetch(
    `https://5fbc07c3c09c200016d41656.mockapi.io/api/v1/games`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
