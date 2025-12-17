import { Product } from "./Products";

export function ProductsGrid({ products, loadCart }) {
  // const [quantity, setQuantity] = useState(1); MAL PORQUE SI NO CAMBIAN TODOS LOS SELECTORS, TIENE QUE SER PARA CADA UNO
  return (
    <div className="products-grid">
      {/* products traidos desde el backend y no desde un arrray local */}
      {products.map((product) => {
        // metemos los selector dentro de cada "producto"
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
