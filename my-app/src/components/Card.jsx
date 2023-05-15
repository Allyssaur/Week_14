import React from 'react';
import Image from './CardImage';
import Overlay from './Overlay';
import Description from './CardDescription';
import CommentButton from './CommentButton';
import Rating from './Rating';

const Card = ({films}) => {     //The 'class' for a single film card
        return(
            <div className="col">
                <div className="card h-100"  id='cardsize'>
                    <Image films={films} />
                <div className="card-body">
                    <Overlay films={films} />
                    <Description films={films} />
                </div>
                <div className="card-footer">
                    <CommentButton films={films} />
                    <Rating />
                </div>
                </div>
            </div>
        );
    }
    
export default Card;