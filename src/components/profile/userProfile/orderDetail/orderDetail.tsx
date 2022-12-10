import { getOrderById } from "../../../../products/order"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AddressDetails from "./addressDetails/addressDetails"
import OrderDetails from "./orderDetails/orderDetails"
import * as S from "./orderDetailStyle"
import PaymentsDetails from "./paymentsDetails/paymentsDetails"
import ProductCardVertical from "./productCardVertical/productCardVertical"
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"

export default function OrderDetail() {
    const navigate = useNavigate()
    const [completed, setCompleted] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const [id, setId] = useState("")
    const [orderProduct, setOrderProduct] = useState({
        _id: "",
        orderId: "",
        orderDate: "",
        name: "",
        total: "",
        subTotal: "",
        upi: "",
        addressList: {
            _id: "",
            pinCode: 0,
            streetAddress: "",
            city: "",
            uf: "",
        },
        product: [
            {
                _id: "",
                name: "",
                paragraph: "",
                description: "",
                price: 0,
                subTotal: 0,
                safe: 0,
                discount: 0,
                image: "",
                ratings: 0,
                quantity: 0,
            }
        ],
        status: "",
    })
    const location = useLocation();
    const resetTab = () => {
        setCompleted(false)
        setProcessing(false)
        setCancelled(false)
    }
    const completedTab = () => {
        resetTab()
        setCompleted(true)
    }
    const processingTab = () => {
        resetTab()
        setProcessing(true)
    }
    const cancelledTab = () => {
        resetTab()
        setCancelled(true)
    }
    useEffect(() => {
        // @ts-ignore
        let params = new URL(document.location).searchParams;
        // @ts-ignore
        setId(params.get("id"))
    }, [])
    useEffect(() => {
        getOrderById(id).then(res => setOrderProduct(res))
    }, [id])
    return (
        <S.OrderDetailContainer>
            <S.OrderHeader>
                <img src={arrow} alt="left arrow icon" onClick={() => navigate(-1)} />
                <S.OrderTitle>Order Details</S.OrderTitle>
            </S.OrderHeader>
            <S.OrderTabs>
                <S.OrderItem color={completed ? "#1B4B66" : "transparent"} onClick={() => completedTab()}>
                    <S.OrderItemLabel color={completed ? "#FFFFFF" : "#626262"}>Items Ordered</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={processing ? "#1B4B66" : "transparent"} onClick={() => processingTab()}>
                    <S.OrderItemLabel color={processing ? "#FFFFFF" : "#626262"}>Invoices</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={cancelled ? "#1B4B66" : "transparent"} onClick={() => cancelledTab()}>
                    <S.OrderItemLabel color={cancelled ? "#FFFFFF" : "#626262"}>Order Shipment</S.OrderItemLabel>
                </S.OrderItem>
            </S.OrderTabs>
            <S.ProductInformation>
                <S.TableHeaders>
                    <S.TableLabel>Product Name</S.TableLabel>
                    <S.ValueInfo>
                        <S.TableLabel>Price</S.TableLabel>
                        <S.TableLabel>Qty</S.TableLabel>
                        <S.TableLabel>Subtotal</S.TableLabel>
                    </S.ValueInfo>
                </S.TableHeaders>
            </S.ProductInformation>
            <S.Separator></S.Separator>
            <S.ProductList>
                {orderProduct.product && orderProduct.product.map((item => (
                    <ProductCardVertical id={item._id} name={item.name} paragraph={item.paragraph} price={item.price} image={item.image} quantity={item.quantity} />
                )))}
            </S.ProductList>
            <S.OrderInformation>
                <S.OrderInfoHeader>
                    <S.OrderInfoTitle>Order Information</S.OrderInfoTitle>
                    <S.Separator></S.Separator>
                </S.OrderInfoHeader>
                <S.OrderInfoContent>
                    <OrderDetails subTotal={orderProduct.subTotal} discount={0.00} total={orderProduct.total} />
                    <PaymentsDetails payment={orderProduct.upi} />
                    <AddressDetails pinCode={orderProduct.addressList && orderProduct.addressList.pinCode} streetAddress={orderProduct.addressList && orderProduct.addressList.streetAddress} city={orderProduct.addressList && orderProduct.addressList.city} name={orderProduct.addressList && orderProduct.name} />
                </S.OrderInfoContent>
            </S.OrderInformation>
            <S.ButtonsNavigation>
                <S.ButtonReorder>Reorder</S.ButtonReorder>
                <S.ButtonRating>Add Rating</S.ButtonRating>
            </S.ButtonsNavigation>
        </S.OrderDetailContainer >
    )
}