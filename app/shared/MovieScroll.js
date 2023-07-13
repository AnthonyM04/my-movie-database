import MovieCard from "./MovieCard";

async function getData(genre) {
  const res = await fetch(`https://api.sampleapis.com/movies/${genre}`);
  return res.json();
}

export default async function MovieScroll({ genre, number }) {
  const allMovies = await getData(genre);
  const movies = allMovies.slice(allMovies.length - number);
  return (
    <section className="text-zinc-400 ">
      <div className="container px-5 py-12 mx-auto">
        <h2 className=" capitalize font-medium title-font mb-4 text-zinc-50 text-xl ltr border-s-4 p-2 border-orange-400 font-semibold">
           {genre}
        <a  className=" text-zinc-500 hover:text-zinc-50 transition" href={'/' + genre}>  &gt; </a>
        </h2>
        <br />
        <div className="flex flex-wrap bg-zinc-800 -m-4 border-t-8 rounded border-zinc-700">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} genre={genre} />
          ))}
        </div>
      </div>
    </section>
  );
}
