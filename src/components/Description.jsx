import { MovieCard } from "./MovieCard";
import movies from "../movies/movies.json";
import styles from "../styles/Description.module.css";
import { useParams } from "react-router-dom";

export function Description() {
  const titleOb = useParams().titleOb;
  const movieObt = movies.find((movie) => movie.title === titleOb);
  const descripcion = movieObt.overview;
  const date = movieObt.release_date;
  
  return (
    <div className={styles.container}>
      <div className={styles.movieCard}>
        <MovieCard key={movieObt.id} movie={movieObt} />
      </div>
      <div className={styles.descripcion}>
        <p> <span className={styles.text}>Fecha de estreno </span>  <br />{date}</p>
        <p><span className={styles.text}>Sinopsis </span> <br />{descripcion}</p>
      </div>
    </div>
  );
}
