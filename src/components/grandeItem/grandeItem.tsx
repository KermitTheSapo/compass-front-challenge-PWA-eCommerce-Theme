import ProductPage from "../productPage/productPage";
import grandeItem from "@/assets/imgs/grande/grandeItem.png"
import { Helmet } from "react-helmet";
import products from "../../products/products.json"
export default function GrandeItem() {
    const grandeInfo = products[1]
    return (
        <>
            <ProductPage name={grandeInfo.name} img={grandeItem} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={grandeInfo.description} safe={grandeInfo.safe} value={grandeInfo.price} imgCarousel={grandeItem} />
            <Helmet>
                <title>Coral'l | Grande</title>
            </Helmet>
        </>
    )
}