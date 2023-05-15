const Image = ({films, img}) => {              //The corresponding img for each card pulled from films array / makes cards dynamic
        return(
        <div>
                {films.map((film) =>
                        <img className="movie-img" src={ film.img }></img>
                )}
        </div>
        );
    }

export default Image;