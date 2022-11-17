import axios from "axios";
import React, { useState } from "react";
import AddDelete from "./AddDelete";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [shoedata, setshoedata] = useState({ id: "", name: "", price: "" });

  const getData = (e) => {
    let newproducts = { ...shoedata };
    newproducts[e.target.id] = e.target.value;
    setshoedata(newproducts);
  };

  const addShoe = () => {
    axios
      .post("http://localhost:4000/products", shoedata)
      .then((res) => {
        console.log(res);
      })
      .catch(() => {});
  };

  const reset = () => {
    document.getElementById("form").reset();
  };
  return (
    <div>
      <span
        style={{
          fontSize: "50px",
          fontFamily: "sans-serif",
          color: "black",
          fontWeight: "600",
          marginLeft: "30px",
        }}
      >
        Admin{" "}
      </span>
      <br />
      <span
        style={{
          fontSize: "30px",
          fontFamily: "sans-serif",
          color: "black",
          fontWeight: "400",
          marginLeft: "30px",
        }}
      >
        {" "}
        Add Product
      </span>

      <div>
        <form action="" className="form">
          <input
            type="text"
            id="id"
            placeholder="Product id"
            onChange={getData}
            required
          />
          <input
            type="text"
            id="name"
            placeholder="Product name"
            onChange={getData}
            required
          />
          <input
            type="text"
            id="price"
            placeholder="Product price"
            onChange={getData}
            required
          />
          <input
            type="text"
            id="price"
            placeholder="Product Image url"
            onChange={getData}
            required
          />

          <button onClick={addShoe}>save</button>
          <button onClick={reset}>reset</button>
        </form>

        <button
          id="adminbutton"
          onClick={() => {
            navigate("/productlist");
          }}
        >
          product lists
        </button>
      </div>
    </div>
  );
};

export default Admin;
