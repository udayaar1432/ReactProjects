import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Cart from "../cart/Cart";
function ProductsList() {
  const [products, setProducts] = useState([]);
  {/* List View */ }
  // w-100

  // Grid View
  // w-50
  return (
    <div className="main">
      <div>
        <h3>{products.length} products</h3>
        <div>
          <button onClick="listView()"><i class="fa fa-bars"></i> List</button>
          <button onClick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
        </div>
        <hr />
      </div>



      <div className="products">
        <div>
          <Link to="/products/01">
            <img
              src={
                "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="lamp"
              loading="lazy"

            />
            <p>Avant-Grade-Lamp</p>
            <span>$179.99</span>
          </Link>
        </div>
        <div>
          <Link to="/products/02">
            <img

              src={
                "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="table"
              loading="lazy"

            />
            <p>Coffee Table</p>
            <span>$179.99</span>
          </Link>
        </div>
        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="bed"
              loading="lazy"

            />
            <p>Comfy Bed</p>
            <span>$129.99</span>
          </a>
        </div>
        {/* </div> */}

        {/* <div className="products"> */}

        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="lamp"
              loading="lazy"

            />
            <p>Chic Chair</p>
            <span>$339.99</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="table"
              loading="lazy"

            />
            <p>Contemporary Sofa</p>
            <span>$159.99</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="bed"
              loading="lazy"

            />
            <p>Futurastic shelves</p>
            <span>$94.99</span>
          </a>
        </div>

        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="lamp"
              loading="lazy"

            />
            <p>Cutting-Edge Bed</p>
            <span>$84.99</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="table"
              loading="lazy"

            />
            <p>Glass Table</p>
            <span>$159.99</span>
          </a>
        </div>
        <div>
          <a href="#">
            <img

              src={
                "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt="bed"
              loading="lazy"

            />
            <p>King Bed</p>
            <span>$189.99</span>
          </a>
        </div>
      </div>

      {/* list */}


      <div className="productlists">
        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img
                  src={
                    "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="lamp"
                  loading="lazy"
                />
              </div>
              <div>
                <p>Avant-Grade-Lamp</p>
              </div>
            </div>
            <div>
              <span>$179.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt="table"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Coffee Table</p>
              </div>
            </div>
            <div>
              <span>$179.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="bed"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Comfy Bed</p>
              </div>
            </div>
            <div>
              <span>$129.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="lamp"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Chic Chair</p>
              </div>
            </div>
            <div>
              <span>$339.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="table"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Contemporary Sofa</p>
              </div>
            </div>
            <div>
              <span>$159.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="bed"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Futurastic shelves</p>
              </div>
            </div>
            <div>
              <span>$94.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img

                  src={
                    "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="lamp"
                  loading="lazy"

                />
              </div>
              <div>
                <p>Cutting-Edge Bed</p>
              </div>
            </div>
            <div>
              <span>$84.99</span>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="m">
            <div className="sm">
              <div>
                <img
                  src={
                    "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt="table"
                  loading="lazy"
                />
              </div>
              <div>
                <p>Glass Table</p>
              </div>
            </div>
            <div>
              <span>$159.99</span>
            </div>
          </div>
        </a>

        <div>
          <a href="#">
            <div className="m">
              <div className="sm">
                <div>
                  <img

                    src={
                      "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    }
                    alt="bed"
                    loading="lazy"

                  />
                </div>
                <div>
                  <p>King Bed</p></div>
              </div>
              <div>
                <span>$189.99</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )


}

export default ProductsList;


const productObj = {
  image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600',
  name: "Avant-Garde Lamp",
  company: 'Modenza',
  price: '$179.99',
  description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live- edge',
  options: [1, 2, 3, 4, 5]
}
function ProductDetails() {

  // const location = useLocation()
  const { id } = useParams();
  const [product] = useState(productObj);
  const [options] = useState(productObj.options);
  console.log(id);

  useEffect(() => {
    //axios.get("/product/id");
    //  write to state
  }, [])

  return (
    <>
      <div className="productdetails">
        <div>
          <img
            src={product.image}
            alt="lamp"
            loading="lazy"
          />
        </div>
        <div className="productdetailscontent">
          <h2>{product.name}</h2>
          <h4>{product.company}</h4>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <div>
            <label>Amount</label> <br />
            <select id="company">
              {options.map(value => <option value={value}>{value}</option>)}
            </select>
          </div>
          <div >
            <button>ADD TO BAG</button>
            {/* <button class="detailsbtn" onClick={() => { <Cart /> }} >ADD TO BAG</button> */}
          </div>
        </div>


      </div>
    </>
  )
}


export { ProductDetails };
