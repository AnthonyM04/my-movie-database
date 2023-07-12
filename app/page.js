import MovieScroll from './shared/MovieScroll'
import Hero from './shared/hero'

export default function Home() {
  return (
    <main
    // className="text-3xl p-8 font-semibold text-orange-400
    >
      {/* <h1>My Movie Database</h1> */}
      <Hero/>
      <MovieScroll genre="comedy" number={3}/>
      <MovieScroll genre="drama" number={4}/>
      <MovieScroll genre="horror" number={4}/>
    </main>
  )
}
