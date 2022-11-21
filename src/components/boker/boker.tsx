import { Helmet } from "react-helmet";
import ProductPage from "../productPage/productPage";

import boker from "../../assets/imgs/home/main/arrivals/boker.png"
import products from "../../products/products.json"
export default function Boker() {
    return (
        <>
            <ProductPage name={products[5].name} img={boker} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Brown Bag" safe={products[5].safe} value={products[5].price} imgCarousel={boker} />
            <Helmet>
                <title>Coral'l | Boker</title>
            </Helmet>
        </>
    )
}