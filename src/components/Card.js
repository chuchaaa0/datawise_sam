import React from 'react';

const Card = ({ name, email, price }) => {
  console.log(price) ;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

      <div>
        <h2>PRICE: {name}  {price.toFixed(2)}</h2>
        <p>last updated: {email}</p>
      </div>
    </div>
  );
}

export default Card;
