const Description = ({films, description, runtime, director}) => {      //A card's description

    return(
        <div className="card-description">
            {films.map((film) => (
                <div>
                    <><p className="card-time">Length: {film.runtime}</p>
                    <p className="card-director">Director: {film.director}</p>
                    <p className="card-text">{film.description}</p>
                    </>
                </div>
            ))}
        </div>
    );
}

export default Description;
