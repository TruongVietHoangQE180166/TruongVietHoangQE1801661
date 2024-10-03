import React from 'react';
import "../Style/StyleIndex.css"; // Giả sử bạn có CSS cho styling
import { Button } from "react-bootstrap";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";
import menu5 from "../assets/images/menu5.jpg";
import menu6 from "../assets/images/menu6.jpg";
import menu7 from "../assets/images/menu7.jpg";
import menu8 from "../assets/images/menu8.jpg";
import { useNavigate } from "react-router-dom";
import Pizzacomponent from "./Pizza"; // Import Pizzacomponent

function CardComponent({ addToCart }) {
  const navigate = useNavigate();
  
  const handleShowMore = () => {
    navigate('/full-menu'); // Chuyển hướng đến trang full-menu
  };

  const pizzas = [
    { img: menu1, title: "Margarita Pizza", price: "$19.99", onSale: true },
    { img: menu2, title: "Mushroom Pizza", price: "$19.99", onSale: false },
    { img: menu3, title: "Hawaiian Pizza", price: "$19.99", onSale: true },
    { img: menu4, title: "Pesto Pizza", price: "$19.99", onSale: false },
    { img: menu5, title: "BBQ Chicken Pizza", price: "$21.99", onSale: true },
    { img: menu6, title: "Veggie Pizza", price: "$17.99", onSale: false },
    { img: menu7, title: "Pepperoni Pizza", price: "$20.99", onSale: true },
    { img: menu8, title: "Four Cheese Pizza", price: "$22.99", onSale: false },
  ];

  return (
    <div className="container p-5">
      <h1 className="text-left p-3">Our Menu</h1>

      <div className="row">
        {pizzas.map((pizza, index) => (
          <Pizzacomponent key={index} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>

      <div className="text-center mt-3">
        <Button variant="dark" onClick={handleShowMore}>
          Show More
        </Button>
      </div>
    </div>
  );
}

export default CardComponent;
