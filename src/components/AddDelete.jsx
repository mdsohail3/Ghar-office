import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDelete = () => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [products, setproducts] = useState({ id: "", name: "", price: "" });
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        return (response = response.json());
      })
      .then((response1) => {
        setdata(response1);
      });
  }, []);

  const url = "http://localhost:4000/products";
  const deleteProduct = (e) => {
    console.log(e.target.id);
    axios.delete(`${url}/${e.target.id}`).then((respo) => {
      setdata(respo);
    });
  };

  const newProduct = (e) => {
    const updatednewproduct = { ...products };
    updatednewproduct[e.target.id] = e.target.value;
    setproducts(updatednewproduct);
  };
  const updateProduct = (e) => {
    axios.put(`${url}/${e.target.id}`, products).then((respo) => {
      console.log(respo);
    });
  };

  return (
    <div className="adddelete">
      <button
        id="addproduct"
        onClick={() => {
          navigate("/Admin");
        }}
      >
        Add Product Page
      </button>
      <table border={"2px"} align={"center"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>IMAGE</th>
            <th>EDIT NAME</th>
            <th>EDIT PRICE</th>

            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, price, image }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <img src={image} alt="" width={"250px"} height={"250px"} />
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    className="inputwid"
                    onChange={newProduct}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="price"
                    className="inputwid"
                    onChange={newProduct}
                  />
                </td>

                <td>
                  <button
                    id={id}
                    onClick={updateProduct}
                    style={{
                      width: "150px",
                      fontSize: "20px",
                      height: "40px",
                      borderRadius: "10px",
                    }}
                  >
                    EDIT <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  <button
                    id={id}
                    onClick={deleteProduct}
                    style={{
                      width: "150px",
                      fontSize: "20px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "brown",
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddDelete;
