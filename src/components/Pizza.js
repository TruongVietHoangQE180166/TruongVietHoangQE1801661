import React from 'react';
import { Card, Button } from "react-bootstrap";

const Pizzacomponent = (props) => {
  const { pizza, addToCart } = props; // Nhận props từ component cha

  return (
    <div className="col-md-3 mb-3">
      <Card>
        <div style={{ position: 'relative' }}>
          <Card.Img variant="top" src={pizza.img} />
          {pizza.onSale && <span className="card-sale-tag">SALE</span>}
        </div>
        <Card.Body>
          <Card.Title>{pizza.title}</Card.Title>
          <Card.Text>Price: {pizza.price}</Card.Text>
          <Button 
            variant="dark" 
            className="w-100 text-center" 
            onClick={() => {
              console.log("Button clicked!");
              addToCart(pizza);
            }}
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Pizzacomponent;
