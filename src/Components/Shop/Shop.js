import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone'

const Shop = () => {
const [shop, setShop] = useState([]);
 
useEffect(() =>{
 fetch('Data.json')
 .then(res => res.json())
 .then(data => console.log(data))
},[])
    return (
        <div>
          {
          shop.map(phone => <Shop key={Phone.id} shop={Shop} ></Shop>)
          }
        </div>
    );
};

export default Shop;