import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../cart/cartcontext";

const productObj = {
  options: [1, 2, 3, 4, 5],
};

function ProductDetails() {
  const [productDetails, setProductDetails] = useState();
  const [options] = useState(productObj.options);
  const[selectedOption,setSelectedOption] = useState(options[0]);
  const { dispatch } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res.data));
  }, [id]);

  function handleSelectChange(e){
    setSelectedOption(e.target.value)
  }

  return (
    <>
      {productDetails && (
        <div className="productDetails">
          <img src={productDetails.attributes.image} alt="lamp" />
          <div className="productdetailsdetailscontent">
            <h2>{productDetails.attributes.title}</h2>
            <h4>{productDetails.attributes.company}</h4>
            <span>{productDetails.attributes.price}</span>
            <p>{productDetails.attributes.description}</p>
            <div>
              <label>colors</label> <br/>
              {productDetails.attributes.colors.map((color) => (
                <input className="color" type="color" key={color} value={color} />
              ))}
            </div>
            <div>
              <label>Amount</label> <br />
              {selectedOption}
              <select id="company" value={selectedOption} onChange={handleSelectChange}>
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                onClick={() =>
                  {const product = {
                            image : productDetails.attributes.image,
                            title : productDetails.attributes.title,
                            company : productDetails.attributes.company,
                            price : productDetails.attributes.price,
                            color : productDetails.attributes.color
                  };
                  dispatch({
                    type: "ADD_TO_CART",
                    value: { id,...product, qty:+selectedOption },
                  })
                }}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails;
