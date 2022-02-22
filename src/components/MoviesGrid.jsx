import movies from '../movies/movies.json'
import { MovieCard } from './MovieCard'
import styles from '../styles/MoviesGrid.module.css'

export function MoviesGrid(){

    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard  key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}