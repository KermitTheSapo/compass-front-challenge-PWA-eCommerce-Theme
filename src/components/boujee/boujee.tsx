import ProductPage from "../productPage/productPage";
import { Helmet } from "react-helmet";
import products from "../../products/products.json"
export default function Boujee() {

    return (
        <>
            <Helmet>
                <title>Coral'l | Boujee</title>
            </Helmet>
            <ProductPage name={products[3].name} img={products[3].img} discount={products[3].discount} productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={products[3].paragraph} safe={products[3].safe} value={products[3].price} imgCarousel={products[3].img} ratings={products[3].ratings} />
        </>
    )
}