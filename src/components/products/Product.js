
import { NavLink } from "react-router-dom"
import ProductsList from "./Productslist"
import Filterform from "./Filterform"
import { ProductDetails } from "./productdetails"
function Products() {
    return (
        <div>
            <Filterform />
            <ProductsList />
            <ProductDetails/>
        </div>
    )
}
export default Products
