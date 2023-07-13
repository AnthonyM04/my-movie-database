import MovieScroll from './shared/MovieScroll'
import Hero from './shared/hero'

export default function Home() {
  return (
    <main>
      <Hero/>
      <MovieScroll genre="comedy" number={4}/>
      <MovieScroll genre="drama" number={4}/>
      <MovieScroll genre="horror" number={4}/>
    </main>
  )
}
