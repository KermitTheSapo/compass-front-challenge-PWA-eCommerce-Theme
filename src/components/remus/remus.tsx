import ProductPage from "../productPage/productPage";
import { Helmet } from "react-helmet";
import products from "../..//products/products.json"
export default function Remus() {
    return (
        <>
            <ProductPage name={products[2].name} img={products[2].img} discount={products[2].discount} productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={products[2].description} safe={products[2].safe} value={products[2].price} imgCarousel={products[2].img} ratings={products[2].ratings} />
            <Helmet>
                <title>Coral'l | Remus</title>
            </Helmet>
        </>
    )
}