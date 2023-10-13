import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, []);

  return (
    <div className="main">
      <div>
        {/* <h3>{data.length} products</h3> */}
        <div>
          <button onClick="listView()">List</button>
          <button onClick="gridView()">Grid</button>
        </div>
        <hr />
      </div>
      <>
        {data?.length > 0 && data.map((product) => (
          <div key={product.id}>
            <div>
              <div className="products">
                <div>
                  <Link to={"/product/" + product.id}>
                    <img
                      src={product["attributes"]["image"]}
                      alt="lamp"

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
