import ProductPage from "../productPage/productPage";
import collosal from "@/assets/imgs/productPage/collosal.png"
import { Helmet } from "react-helmet";
import products from "../../products/products.json"

export default function Collosal() {
    const collosalInfo = products[4]
    return (
        <>
            <ProductPage name={collosalInfo.name} img={collosal} discount={collosalInfo.discount} productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={collosalInfo.description} safe={collosalInfo.safe} value={collosalInfo.price} imgCarousel={collosal} />
            <Helmet>
                <title>Coral'l | Collosal</title>
            </Helmet>
        </>
    )
}