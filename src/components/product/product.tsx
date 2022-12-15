import ProductPage from "../productPage/productPage";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getProductsById } from "../../products/products";
import { useLocation } from 'react-router-dom';


export default function Product() {
    // @ts-ignore
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    let location = useLocation();
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0
    }])
    useEffect(() => {
        getProductsById(id).then((res) => setProductsList([res]))
    }, [location])

    return (
        <>
            {productsList && productsList.map((item, key) => (
                <div key={key}>
                    <ProductPage name={item.name} img={item.image} discount={item.discount} productDescription="Experience comfortable and easy traveling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long." productParagraph={item.paragraph} safe={item.safe} value={item.price} imgCarousel={item.image} ratings={item.ratings} _id={item._id}/>
                </div>
            ))}
            <Helmet>
                <title>Coral'l | Product</title>
            </Helmet>
        </>
    )
}