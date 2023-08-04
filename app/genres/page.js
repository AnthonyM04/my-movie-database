import data from "../data/genres.json";
import GenreScroll from "../shared/GenreScroll.js";

export function Page() {
  <section>
        <div className="flex flex-wrap -m-4">
          {data.map(movie => (
            <GenreScroll key={movie.id} movie={movie} genre={genre} />
          ))}
        </div>
  </section>
}
