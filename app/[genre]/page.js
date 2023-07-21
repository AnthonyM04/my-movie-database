import MovieScroll from "../shared/MovieScroll"

export async function generateStaticParams() {
  return [
    {genre: 'classic'},
    {genre: 'comedy' },
    {genre: 'drama' },
    {genre: 'horror' },
    {genre: 'mystery'},
    {genre: 'western'}
  ]
}

export function generateMetadata({ params: { genre }}) {
  return {
    title: `${genre} Movies`,
    description: `Here are some of my favorite ${genre} movies.`
  }
}

export function Page({ params: { genre } }) {
  return(
    <main className="p-8">
      <h1 className="text-2xl text-orange-400 font-semibold capitalize">
        {genre} movies
      </h1>
      <MovieScroll genre={genre} number={12} />
    </main>
  )
}
