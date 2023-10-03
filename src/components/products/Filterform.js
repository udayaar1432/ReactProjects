import { useState } from "react";

function Filterform() {
  const [categories, setCategories] = useState(["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"]);
  const [company, setCompany] = useState(["all", "Modenza", "Luxora", "Artifex", "Comfora", "Homestead"]);
  const [sort, setSort] = useState(["all", "a-z", "z-a", "high", "low", "medium"]);
  const [form, setForm] = useState({ searchproduct: "", categories: "", company: "", sortby: "", range: "", freeshipping: false })

  // const [options] = useState([
  //   {id: 1,value:all ,text:All}
  //   {id: 2,value:a ,text:A}
  //   {id: 3,value:b ,text:B}
  //   {id: 4,value:c ,text:C}
  // ])
  const handleChange = (ev) => {
    const { name, type, value, checked } = ev && ev.target;
    setForm((prev) => ({ ...prev, [name]: (type == "checkbox" || type == "radio") ? checked : value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({ searchproduct: "", categories: "", company: "", sortby: "", range: "", freeshipping: "" });
  }




  return (
    <div className="filterform">
      <form onSubmit={handleSubmit}>
        <section className="choice">
          <div>
            <label>Search Product</label> <br />
            <input id="search" type="text" name="searchproduct" onChange={handleChange} value={form.searchproduct} />
          </div>
          <div>
            <label>Select Category</label> <br />


            <select id="category" onChange={handleChange} name="categories" value={form.categories}>
              {categories.map((category) => <option>{category}</option>)}

              {/* <option value="all">all</option>
              <option value="Tables">Tables</option>
              <option value="Chairs">Chairs</option>
              <option value="Kids">Kids</option>
              <option value="Sofas">Sofas</option>
              <option value="Beds">Beds</option> */}
            </select>
          </div>
          <div>
            <label>Select Company</label> <br />
            <select id="company" onChange={handleChange} name="company" value={form.company}>
              {company.map((category) => <option>{category}</option>)}
              {/* <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option> */}
            </select>
          </div>
          <div>
            <label>Sort By</label> <br />
            <select id="sort" onChange={handleChange} name="sortby" value={form.sortby} >
              {sort.map((category) => <option>{category}</option>)

              }
              {/* <option value="all">all</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option> */}
            </select>
          </div>
        </section>
        <section className="buttons">
          <div className="range">
            <input type="range" name="range"
              onChange={handleChange} value={form.range} />
          </div>
          <div>
            <label>Free Shipping</label> <br />
            <input id="check" type="checkbox" name="freeshipping" onChange={handleChange} value={form.freeshipping} />
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
    </div >
  );
}

export default Filterform;
