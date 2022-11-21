import { Helmet } from "react-helmet"
import Category from "../category"

export default function Jewellery() {
    return (
        <>
            <Category name={"Remus"} />
            <Helmet>
                <title>Coral'l | Jewellery</title>
            </Helmet>
        </>
    )
}