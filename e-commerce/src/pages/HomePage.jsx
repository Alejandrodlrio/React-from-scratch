import { Header } from "../components/headerComponent";
import "./HomePage.css";
import { products } from "../starting-code/data/products";
import axios from "axios";
import { useEffect, useState } from "react";

export function HomePage() {
  /*******
   *
   * SIN AXIOS
   *
   *
   ***********/
  // fetch("http://localhost:3000/api/products") //tarda un tiempo en sincronizarse: devuelve una promesa
  //   .then((response) => {
  //     //promesa y la guarda en una respuesta
  //     // response
  //     //   .json() //json tambien es asincrono
  //     //   .then((data) => {
  //     //     console.log(data);
  //     //   });
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  /*******
   *
   * CON AXIOS
   *
   *
   ***********/

  // Se ejecuta una sola vez si no hay cambios
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []); // [] sin dependencias.

  return (
    <>
      <title>Ecommerce</title>
      <Header />
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  ${(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
