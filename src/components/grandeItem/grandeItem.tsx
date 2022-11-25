import ProductPage from "../productPage/productPage";
import { Helmet } from "react-helmet";
import products from "../../products/products.json"
export default function GrandeItem() {
    const grandeInfo = products[1]
    return (
        <>
            <ProductPage name={grandeInfo.name} img={grandeInfo.img} discount={grandeInfo.discount} productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={grandeInfo.description} safe={grandeInfo.safe} value={grandeInfo.price} imgCarousel={grandeInfo.img} ratings={grandeInfo.ratings}/>
            <Helmet>
                <title>Coral'l | Grande</title>
            </Helmet>
        </>
    )
}