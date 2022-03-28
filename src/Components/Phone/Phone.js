import React from 'react';

const Phone = (props) => {
const {phone, handleAddToCart} = props;
const {name, url, Price, id} = phone;

    return (
       <div className='phone'>
            <img src={url} alt=""></img>
              <div className='phone-info'>
                    <p className='phone-name'>{name}</p>
                    <p>Price: ${Price}</p>
                    <p><small>id: ${id} </small></p>
                    
              </div>
              <button onClick={() =>handleAddToCart(phone)}           className='bnt-cart'>
                <p className='btn-text'> Add To Cart</p>
               
              </button>
        </div>
    );
};

export default Phone;