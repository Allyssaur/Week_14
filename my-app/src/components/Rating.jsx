import React from 'react';

//The Rating system for each film.  I have yet to make this actually functional with the API BE array but will work on it after uploading.

const Rating = () => {
        return <form className="rating">
                  <label>
                      <input type="radio" name="stars" value="1" />
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>   
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                    <label>
                      <input type="radio" name="stars" value="5" />
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                      <span className="icon">★</span>
                    </label>
                  </form>;
}

export default Rating;