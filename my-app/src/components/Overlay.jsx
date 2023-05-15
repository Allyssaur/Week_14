const Overlay = ({films, title, year}) => {
//The overlay and the information for each card to give the animation effect when hovering over a card (also see relevant CSS)
    return(
        <div className="card-img-overlay">
            {films.map((film) => (
                <div>
                    <p className="card-title"><b>{ film.title }</b>
                        <div className="card-year">({ film.year })</div>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Overlay;