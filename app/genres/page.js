import data from "../data/genres.json";
import GenreCard from "./GenreCard";

export function Page() {
  <section>
        <div className="flex flex-wrap -m-4">
          {data.map(movie => (
            <MovieCard key={movie.id} movie={movie} genre={genre} />
          ))}
        </div>
  </section>
}