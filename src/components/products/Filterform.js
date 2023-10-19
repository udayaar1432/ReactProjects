import { useState } from "react";
function Filterform(props) {
  const [category] = useState(["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"]);
  const [company] = useState(["all", "Modenza", "Luxora", "Artifex", "Comfora", "Homestead"]);
  const [sort] = useState(["all", "a-z", "z-a", "high", "low", "medium"]);
  const [form, setForm] = useState({ search: "", category: "", company: "", order: "", price: "", shipping: false })

  const handleChange = (ev) => {
    const { name, type, value, checked } = ev && ev.target;
    setForm((prev) => ({ ...prev, [name]: (type == "checkbox" || type == "radio") ? checked : value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    props.handleSearch(form);
    setForm({ search: "", category: "", company: "", order: "", price: "", shipping: "" });
  }

  return (
    <div className="filterform">
      <form onSubmit={handleSubmit}>
        <section className="choice">
          <div>
            <label>Search Product</label> <br />
            <input id="search" type="text" name="search" onChange={handleChange} value={form.search} />
          </div>
          <div>
            <label>Select Category</label> <br />
            <select id="category" onChange={handleChange} name="category" value={form.category}>
              {category.map((category) => <option>{category}</option>)}
            </select>
          </div>
          <div>
            <label>Select Company</label> <br />
            <select id="company" onChange={handleChange} name="company" value={form.company}>
              {company.map((category) => <option>{category}</option>)}
            </select>
          </div>
          <div>
            <label>Sort By</label> <br />
            <select id="sort" onChange={handleChange} name="order" value={form.order} >
              {sort.map((category) => <option>{category}</option>)
              }
            </select>
          </div>
        </section>
        <section className="buttons">
          <div className="price">
            <input type="range" name="price" min="0"
              max="100000" onChange={handleChange} value={form.price} />
          </div>
          <div>
            <label>Free Shipping</label> <br />
            <input id="check" type="checkbox" name="shipping" onChange={handleChange} value={form.shipping} />
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
