import { Header } from "../../components/headerComponent";
import { ProductsGrid } from "./ProductGrid";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";

export function HomePage({ cart, loadCart }) {
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
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []); // [] sin dependencias. OJO, SI NO LO PONEMOS SE ACTUALIZA SIN PARAR.

  return (
    <>
      <title>Ecommerce</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
