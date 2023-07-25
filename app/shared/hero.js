export default function Hero() {
  return (
    <section className="text-zinc-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="flex flex-col mb-16 items-center text-center
                      md:items-start md:text-left md:mb-0 md:pr-16 md:w-1/2
                      lg:pr-24 lg:flex-grow"
        >
          <h1 className="title-font text-zinc-50 font-semibold text-3xl mb-4 sm:text-4xl">
            Taxi Driver
            <p className="text-zinc-500 ">1976</p>
          </h1>
          <p className="mb-8 leading-relaxed">
            A haunting masterpiece that delves into the gritty underbelly of
            1970s New York City through the eyes of Travis Bickle, a mentally
            unstable Vietnam War veteran turned taxi driver. The film's stark
            cinematography, intense performances, and exploration of alienation
            and violence make it a thought-provoking and enduring classic of
            American cinema.
            <br />
          </p>
          <a
            href="https://www.imdb.com/title/tt0075314"
            className="text-white bg-orange-400 border-0 py-2 px-6 rounded-lg text-lg hover:bg-orange-500 transition"
          >
            Learn more
          </a>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-1/3">
          <img
            className="object-cover object-center rounded-xl"
            alt="Taxi Driver"
            src="https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          />
        </div>
      </div>
    </section>
  );
}
