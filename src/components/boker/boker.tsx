import { Helmet } from "react-helmet";
import ProductPage from "../productPage/productPage";
import products from "../../products/products.json"

export default function Boker() {
    return (
        <>
            <ProductPage name={products[5].name} img={products[5].img} discount={products[5].discount} productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={products[5].paragraph} safe={products[5].safe} value={products[5].price} imgCarousel={products[5].img} ratings={products[5].ratings} />
            <Helmet>
                <title>Coral'l | Boker</title>
            </Helmet>
        </>
    )
}