import ProductPage from "../productPage/productPage";
import coach from "@/assets/imgs/productPage/coach.png"
import { Helmet } from "react-helmet";
import products from "../../products/products.json"


export default function Coach() {
    const coachInfo = products[0]
    return (
        <>
            <ProductPage name={coachInfo.name} img={coach} discount={coachInfo.discount} productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={coachInfo.description} safe={coachInfo.safe} value={coachInfo.price} imgCarousel={coach} />
            <Helmet>
                <title>Coral'l | Coach</title>
            </Helmet>
        </>
    )
}