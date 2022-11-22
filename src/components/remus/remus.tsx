import ProductPage from "../productPage/productPage";
import remus from "@/assets/imgs/remus/remus.png"
import { Helmet } from "react-helmet";
import products from "@/products/products.json"
export default function Remus() {
    return (
        <>
            <ProductPage name={products[2].name} img={remus} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={products[2].description} safe={products[2].safe} value={products[2].price} imgCarousel={remus} />
            <Helmet>
                <title>Coral'l | Remus</title>
            </Helmet>
        </>
    )
}