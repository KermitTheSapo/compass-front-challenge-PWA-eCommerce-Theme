import ProductPage from "../productPage/productPage";
import boujee from "@/assets/imgs/boujee/boujee.png"
import { Helmet } from "react-helmet";
import products from "../../products/products.json"
export default function Boujee() {

    return (
        <>
            <Helmet>
                <title>Coral'l | Boujee</title>
            </Helmet>
            <ProductPage name={products[3].name} img={boujee} discount="50%OFF" productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={products[3].paragraph} safe={products[3].safe} value={products[3].price} imgCarousel={boujee} />
        </>
    )
}