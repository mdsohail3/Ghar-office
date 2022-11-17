import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartproducts, setcartproducts] = useState([]);

  useEffect(() => {
    let item = localStorage.getItem("cart");
    item = JSON.parse(item);
    setcartproducts(item);
    console.log(item);
  }, []);

  var cartnumber=0;
  if (cartproducts !== null) {
    for (let i = 0; i < cartproducts.length; i++) {
      cartnumber = cartnumber + Number(cartproducts[i].price);
    }
  }
  console.log(cartnumber);


  return (
    <div>
      <h1
        style={{
          fontStyle: "italic",
          color: "darkslateblue",
          fontSize: "80px",
          textAlign: "center",
        }}
      >
        YOUR CART
      </h1>
      <h2 style={{color:"black", position:"relative",left:"1000px", top:"150px"}}>Total amount: {cartnumber}</h2>
      {cartproducts &&
        cartproducts.map(({ id, name, price, image }) => {
          return (
            <div
              key={id}
              style={{
                border: "2px solid black",
                color: "lightblue",
                width: "200px",
                margin: "20px",
              }}
            >
              <h1> Brand:{name}</h1>
              <img src={image} width={"150px"} />
              <h1>Price:{price}</h1>

            </div>
          );
          
        })}
    </div>
  );
};

export default Cart;
