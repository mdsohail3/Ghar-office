import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState("");
  const [shoes, setshoes] = useState([]);
  const [cart, setcart] = useState([]);

  const getdata = (e) => {
    setdata(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    async function getshoedata() {
      let { data } = await axios.get("http://localhost:4000/products");
      console.log(data);
      setshoes(data);
    }
    getshoedata();
  }, []);

  const url = "http://localhost:4000/products";

  const addtocart = (e) => {
    fetch(`${url}/${e.target.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setcart([...cart, data]);
        localStorage.setItem("cart", JSON.stringify(cart));
       
      });
  };

  const filteredShoes = shoes.filter((shoe) => {
    return shoe.name.toLowerCase().includes(data.toLowerCase());
  });

  return (
    <div className="user">
      <input placeholder="Enter a product" onChange={getdata} value={data} />

      <span>
        bv{" "}
        <i
          onClick={() => {
            navigate("/cart");
          }}
          className="fa fa-shopping-cart"
          aria-hidden="true"
        ></i>
        <h4
          style={{
            color: "black",
            position: "relative",
            left: "1130px",
            bottom: "50px",
          }}
        >
          My cart
        </h4>
      </span>
      <div className="products">
        {filteredShoes.length ? (
          filteredShoes.map(({ id, name, price, image, color }) => {
            return (
              <div key={id} className="userdiv">
                <h1>Brand:{name}</h1>
                <img src={image} width={"300px"} height={"300px"} />
                <h1>color:{color}</h1>
                <h1>price:{price}</h1>
                <button
                  id={id}
                  style={{ width: "120px", fontSize: "20px", height: "30px" }}
                  onClick={addtocart}
                >
                  Add to cart
                </button>
              </div>
            );
          })
        ) : (
          <h1>OUT OF STOCK / SEARCH PROPER PRODUCT</h1>
        )}
      </div>
      {/* <Cart cart={cart} /> */}
    </div>
  );
};

export default User;
