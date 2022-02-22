import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/MovieCard.module.css';
import { faStar} from "@fortawesome/free-solid-svg-icons";

export function MovieCard(props) {

  const imageURL = "https://image.tmdb.org/t/p/w200" + props.movie.poster_path;

  const rating = props.movie.vote_average + '/10'
  const enlace = "/"+props.movie.title;
  return (
    <a href={enlace}>
    <li className={styles.movieCard}>
      <img src={imageURL} alt="poster movie" />
      <p className={styles.title}>{props.movie.title}</p>
      <div>
          <FontAwesomeIcon icon={faStar}className={styles.imgStar}/>
          <p className={styles.rating}>{rating}</p>
      </div>
    </li>
    </a>
  );
}
