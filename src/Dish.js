import React from 'react';
import './Dish.css'

function Dish(props) {
    return ( 
        <div className='alldish'>
          <div>
            <img src={props.img} />
            <div>
              <h2>{props.title}</h2>
              <h3>{props.price}</h3>
            </div>
            <hr />
            <p>{props.desc}</p>
          </div>
    
       </div>
     );
}

export default Dish;