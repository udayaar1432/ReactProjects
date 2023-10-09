import ProductsList from "./Productslist"
import Filterform from "./Filterform"
import  ProductDescription  from "./productdetails"
function Products() {
    return (
        <div>
            <Filterform />
            <ProductsList />
            <ProductDescription/>
        </div>
    )
}
export default Products;
