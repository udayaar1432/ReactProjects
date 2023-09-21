function Filterform() {
    return (
      <div className="filterform">
        <form>
          <section className="choice">
            <div>
              <label>Search Product</label> <br />
              <input id="search" type="text" name="name" />
            </div>
            <div>
              <label>Select Category</label> <br />
              <select id="category">
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div>
              <label>Select Company</label> <br />
              <select id="company">
                <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </div>
            <div>
              <label>Sort By</label> <br />
              <select id="sort">
                <option value="all">all</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
          </section>
          <section className="buttons">
            <div className="range">
              <input type="range" />
            </div>
            <div>
              <label>Free Shipping</label> <br />
              <input id="check" type="checkbox" cheecked />
            </div>
            <div>
              <button className="btnsearch">SEARCH</button>
            </div>
            <div>
              <button type="reset" className="btnreset">
                RESET
              </button>
            </div>
          </section>
        </form>
      </div>
    );
  }
  
  export default Filterform;
  