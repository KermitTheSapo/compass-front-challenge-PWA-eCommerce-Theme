import { postWishlist } from "../../../products/wishlist";
import { deleteBag, getBag } from "../../../products/bag";
import * as S from "./productStyle"

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
    quantity: number;
    id: string;
    safe: number;
    discount: number;
    ratings: number;
    setState: React.Dispatch<React.SetStateAction<{
        _id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        description: string;
        imgAlt: string;
        paragraph: string;
        link: string;
        ratings: number;
        discount: number;
        safe: number;
        quantity: number;
    }[]>>;
}

export default function Product({ productTitle, productParagraph, productPrice, img, quantity, id, setState, safe, discount, ratings }: Props) {
    const removeProduct = () => {
        getBag().then((res) => setState(res))
        deleteBag(id)
        getBag().then((res) => setState(res))
        alert("deleted")
    }
    const moveToWishlist = () => {
        const product = {
            name: productTitle,
            paragraph: productParagraph,
            description: productParagraph,
            price: productPrice,
            safe: safe,
            discount: discount,
            link: "asasas",
            imgAlt: "sdfasd",
            image: img,
            ratings: ratings,
            quantity: 1
        }
        postWishlist(product)
        alert("moved")
    }
    return (
        <S.ProductContainer>
            <S.ImgProduct src={img} alt="image of a product" />
            <S.ProductContent>
                <S.ProductInformation>
                    <S.ProductName>{productTitle}</S.ProductName>
                    <S.ProductValues>
                        <S.ProductPrice>${productPrice}</S.ProductPrice>
                        <S.ProductQuantity>{quantity}</S.ProductQuantity>
                        <S.ProductSubtotal>${(productPrice * quantity).toFixed(2)}</S.ProductSubtotal>
                    </S.ProductValues>
                </S.ProductInformation>
                <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                <S.ProductQuantity>Qty- {quantity}</S.ProductQuantity>
                <S.ButtonsAction>
                    <S.WishlistParagraph onClick={() => { moveToWishlist() }}>Move to Wishlist</S.WishlistParagraph>
                    <S.RemoveParagraph onClick={() => removeProduct()}>Remove</S.RemoveParagraph>
                </S.ButtonsAction>
            </S.ProductContent>
        </S.ProductContainer>
    )
}