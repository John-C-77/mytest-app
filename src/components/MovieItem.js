import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieItem({id, title, image,  summary, genres}){
 
    return <div>

     <img src={image} alt={title}/>
             <h2>
                <Link to= {`/movie/${id}`}><h2>*{title}</h2></Link>
             </h2>
             <p>{summary}</p>
             <ul>
                 {genres.map((gen) =>
                 {
        
                   return  <li key={gen}>{gen}</li>
                 })}
             </ul>


    </div>;
}


MovieItem.prototype ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}


export default MovieItem;