import { Link } from "react-router-dom";

function ProductsList(props) {
  const { products } = props;


  return (
    <div className="main">
      <div>
      <h3>{products.length} products</h3>

        <div>
          <button onClick="listView()">List</button>
          <button onClick="gridView()">Grid</button>
        </div>
        <hr />
      </div>
      <>
        {products?.length > 0 && products.map((product) => (
          <div key={product.id}>
            <div>

              <div className="products">
                <div>
                  <Link to={"/product/" + product.id}>
                    <img
                      src={`${product["attributes"]["image"]}`}
                      alt="lamp"
                      loading="lazy"
                    />
                    <p>{product["attributes"]["title"]}</p>
                    <span>{product["attributes"]["price"]}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
export default ProductsList;
