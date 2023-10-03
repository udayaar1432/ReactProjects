
import { NavLink } from "react-router-dom"
import ProductsList, { ProductDetails } from "./Productslist"
import Filterform from "./Filterform"

function Products() {
    return (
        <div>
            <Filterform />
            <ProductsList />
            {/* <ProductDetails/> */}
        </div>
    )
}
export default Products 