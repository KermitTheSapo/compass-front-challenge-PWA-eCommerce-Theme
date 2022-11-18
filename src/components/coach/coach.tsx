import ProductPage from "../productPage/productPage";
import coach from "../../assets/imgs/productPage/coach.png"
import { Helmet } from "react-helmet";


export default function Coach() {
    return (
        <>
            <ProductPage name="Coach" img={coach} discount="50%OFF" productDescription="Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph="Leather Coach Bag" safe="$78.66" value="$54.69" imgCarousel={coach} />
            <Helmet>
                <title>Coral'l | Coach</title>
            </Helmet>
        </>
    )
}