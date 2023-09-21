function ProductsList() {
    return (
      <>
        <div>
          <h3>22 products</h3>
          <hr />
        </div>
        <div className="products">
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="lamp"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Avant-Grade-Lamp</p>
              <span>$179.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt="table"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Coffee Table</p>
              <span>$179.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="bed"
                loading="lazy"
                width={"250px"}
                height={"200px"}
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
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="lamp"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Chic Chair</p>
              <span>$339.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="table"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Contemporary Sofa</p>
              <span>$159.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="bed"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Futurastic shelves</p>
              <span>$94.99</span>
            </a>
          </div>
  
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="lamp"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Cutting-Edge Bed</p>
              <span>$84.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="table"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>Glass Table</p>
              <span>$159.99</span>
            </a>
          </div>
          <div>
            <a href="#">
              <img
                style={{ borderRadius: "8px" }}
                src={
                  "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                alt="bed"
                loading="lazy"
                width={"250px"}
                height={"200px"}
              />
              <p>King Bed</p>
              <span>$189.99</span>
            </a>
          </div>
        </div>
      </>
    );
  }
  
  export default ProductsList;
  