const MovieCard = ({
  movie: {
    title,
    id,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    popularity,
    original_language,
    original_title,
    backdrop_path,
    video,
    adult,
    genre_ids,
    media_type,
    first_air_date,
    origin_coun,
  },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="/star.svg" alt="Star" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
