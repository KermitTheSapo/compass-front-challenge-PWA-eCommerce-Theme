import Category from "../category"
import { Helmet } from "react-helmet";

export default function Eyewear() {
    return (
        <>
            <Category name={"Eyewear"} />
            <Helmet>
                <title>Coral'l | Eyewear</title>
            </Helmet>
        </>
    )
}