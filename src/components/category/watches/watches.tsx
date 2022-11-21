import { Helmet } from "react-helmet"
import Category from "../category"
export default function Watches() {
    return (
        <>
            <Helmet>
                <title>Coral'l | Watches</title>
            </Helmet>
            <Category name={"Watches"} />
        </>
    )
}