import React from 'react';
import Card from './Card';

const CardList = ({ robots , t1 , r2}) => {
  console.log(robots) ;
  console.log(t1) ;
  console.log(r2) ;
  var ra_arr = Object.keys(robots["rates"]) ;

  console.log(ra_arr) ;
  console.log(robots["rates"][ra_arr[0]]);
  return (
    
    <div>
      {
        ra_arr.map((user, i) => {
          return (
            <Card
              key={i}
              name={ra_arr[i]}
              price={robots["rates"][ra_arr[i]]*r2}
              email={t1}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;