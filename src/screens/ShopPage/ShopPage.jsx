import React, { useState } from 'react';
import './ShopPage.css';
import Card from './Card';
// import image1 from './image1.webp';
// import image2 from './image2.webp';
// import image3 from './image3.webp';
// import image4 from './image4.webp';

function ShopPage() {

  // const [color, setColor] = useState("red");

  const [shopcaption,setshopcaption]=useState("It supports Floating Tencel");
 
  return (
    <>
    <div className="shoppage">
       <div className='shop-content' id='left-side'>
         <h1>Our Legacy</h1>
         <h1>Mens</h1>
         <br />
         <br />

         <div className="shop-items">
            <h3>New Arrivals</h3>
            <ul className='list-type'>
               <li>Core Collection</li>
               <li>Shirting</li>
               <li>Jersey</li>
               <li>Outerwear</li>
               <li>Jeans</li>
               <li>Leather</li>
               <li>Knitwear</li>
               <li>Suiting</li>
               <li>Trousers</li>
               <li>Shorts</li>
            </ul>
         </div>
       </div>
       <div className='shop-content' id='right-side'>
          


              <Card/>
              <Card/>
              <Card/>

              <Card/>
              <Card/>
              <Card/>


              <Card/>
              <Card/>
              <Card/>

              <Card/>
              <Card/>
              <Card/>

           
       </div>
       </div>
     
     
    </>
  )
}

export default ShopPage