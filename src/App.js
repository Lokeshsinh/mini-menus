import { useEffect, useState } from 'react';
import './App.css';
import Dish from './Dish';
import axios from 'axios';
const allDish = [
  {
    id:"1",
    img:"../assests/dosa.jpg",
    category:"braekfast",
    title:"Masala Dosa",
    price:"40$",
    desc:"The creapy on changes"
  },
  {
    id:"2",
    img:"../assests/burger.jpg",
    category:"lunch",
    title:"Chicken Burger",
    price:"100$",
    desc:"The creapy on changes"
  },
  {
    id:"3",
    img:"../assests/idli.jpg",
    category:"braekfast",
    title:"Idli",
    price:"30$",
    desc:"The creapy on changes"
  },
  {
    id:"4",
    img:"../assests/firedrice.jpg",
    category:"dinner",
    title:"Fired Rice",
    price:"70$",
    desc:"The creapy on changes"
  },
  {
    id:"5",
    img:"../assests/pizza.jpg",
    category:"lunch",
    title:"Chesse Pizza",
    price:"40$",
    desc:"The creapy on changes"
  },
  {
    id:"6",
    img:"../assests/puri2.jpg",
    category:"braekfast",
    title:"Puri",
    price:"30$",
    desc:"The creapy on changes"
  },
  {
    id:"7",
    img:"../assests/shake1.jpg",
    category:"shake",
    title:"ButterShake ",
    price:"40$",
    desc:"The creapy on changes"
  },
  {
    id:"8",
    img:"../assests/snad.jpg",
    category:"dinner",
    title:"Sand Wich",
    price:"90$",
    desc:"The creapy on changes"
  },
  {
    id:"9",
    img:"../assests/shake2.jpg",
    category:"shake",
    title:"Mongo Shake ",
    price:"50$",
    desc:"The creapy on changes"
  },
  {
    id:"10",
    img:"../assests/nudle.jpg",
    category:"dinner",
    title:"Nudle",
    price:"40$",
    desc:"The creapy on changes"
  },
  {
    id:"11",
    img:"../assests/shake3.jpg",
    category:"shake",
    title:"Chocalate Shake",
    price:"100$",
    desc:"The creapy on changes"
  },
  {
    id:"12",
    img:"../assests/chick.jpg",
    category:"dinner",
    title:"Roust  Chicken",
    price:"100$",
    desc:"The creapy on changes"
  },
]
function App(){
  const [selectcategory, setCategory] = useState("all")
  const filterSubmit = (category) =>{
    setCategory(category)
    console.log(selectcategory);
  }
  return (
    <section>
      <div className='dish'>
        <div className='dish2'>
          <button onClick={()=>filterSubmit("all")}>All</button>
          <button onClick={()=>filterSubmit("braekfast")}>Breakfast</button>
          <button onClick={()=>filterSubmit("lunch")}>Lunch</button>
          <button onClick={()=>filterSubmit("dinner")}>Dinner</button>
          <button onClick={()=>filterSubmit("shake")}>shanke</button>
        </div>
        <div className='dish3'>
          {allDish.map((dish) =>(selectcategory === "all"|| selectcategory === dish.category) && (
          <Dish 
          key = {dish.id}
          img = {dish.img}
          title={dish.title}
          price={dish.price}
          desc={dish.desc}
          />
          )
        )}
        </div>
      </div>
    </section>
  );
}


export default App;
