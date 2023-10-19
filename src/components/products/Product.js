import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsList from "./Productslist"
import Filterform from "./Filterform"

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterProduct, setfilterProduct] = useState();
  const [data, setData] = useState([]);

  useEffect(()=>{
    getProducts();
  })

function getProducts() {
  console.log(filterProduct);
  console.log(new URLSearchParams(filterProduct).toString());
  const qs = new URLSearchParams(filterProduct).toString();

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products?${qs.length > 0 ? qs :""}`)
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, []);
}
  function handleSearch(form) {
    console.log(form);
    setfilterProduct(form)
    setSearchParams(form);
  }

  return (
    <div>
      <Filterform handleSearch={handleSearch} />
      <ProductsList products={data}/>
    </div>
  )
}
export default Products;
