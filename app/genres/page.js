import data from "../data/genres.json";
import GenreCard from "./GenreCard";

export function Page() {
  <section>
    {
                {genres.map((genre) => (
                  <GenreCard genre={genre} />
                ))}
    }
  </section>
}