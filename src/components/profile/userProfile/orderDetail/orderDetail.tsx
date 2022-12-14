import { getOrderById } from "../../../../products/order"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import AddressDetails from "./addressDetails/addressDetails"
import OrderDetails from "./orderDetails/orderDetails"
import * as S from "./orderDetailStyle"
import PaymentsDetails from "./paymentsDetails/paymentsDetails"
import ProductCardVertical from "./productCardVertical/productCardVertical"
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"
import options from "@/assets/imgs/itemsOrdered/imgOptions.svg"
import CardOrder from "./cardOrder/cardOrder"
import BottomSheetOrder from "./bottomSheetOrder/bottomSheetOrder"
import Invoice from "../../../../components/invoice/invoice"

export default function OrderDetail() {
    const navigate = useNavigate()
    const [completed, setCompleted] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const [id, setId] = useState("")
    const [showBottomSheetOrder, setShowBottomSheetOrder] = useState(false)
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
            street: "",
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
        setId(params.get("id") as string)
    }, [])
    useEffect(() => {
        getOrderById(id).then(res => setOrderProduct(res))
    }, [id])
    return (
        <S.OrderDetailContainer>
            <S.OrderHeader>
                <S.OrderHeaderDiv>
                    <img src={arrow} alt="left arrow icon" onClick={() => navigate(-1)} />
                    <S.OrderTitle>Items Ordered</S.OrderTitle>
                </S.OrderHeaderDiv>
                <S.ImgOptions src={options} alt="" onClick={() => setShowBottomSheetOrder(true)} />
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

            <S.ProductsParagraph>{orderProduct.product && orderProduct.product.length} Product(s)</S.ProductsParagraph>
            <S.ProductList>
                {
                    completed && <>
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
                        {orderProduct.product && orderProduct.product.map(((item, key) => (
                            <div key={key}>
                                <ProductCardVertical id={item._id} name={item.name} paragraph={item.description} price={item.price} image={item.image} quantity={item.quantity} />
                            </div>
                        )))}
                    </>
                }
                {
                    processing && <>
                        <Invoice />
                    </>
                }
            </S.ProductList>
            <S.CardOrderDiv>
                {orderProduct.product && orderProduct.product.map((item, key => (
                    <div key={key}>
                        <CardOrder image={item.image} name={item.name} description={item.paragraph} price={item.price} quantity={item.quantity} />
                    </div>
                )))}
            </S.CardOrderDiv>
            <S.OrderInformation>
                <S.OrderInfoHeader>
                    <S.OrderInfoTitle>Order Information</S.OrderInfoTitle>
                    <S.Separator></S.Separator>
                </S.OrderInfoHeader>
                <S.OrderInfoContent>
                    <S.bigSeparator></S.bigSeparator>
                    <OrderDetails subTotal={orderProduct.subTotal} discount={0.00} total={orderProduct.total} />
                    <S.bigSeparator></S.bigSeparator>
                    <PaymentsDetails payment={orderProduct.upi} />
                    <S.bigSeparator></S.bigSeparator>
                    <AddressDetails pinCode={orderProduct.addressList && orderProduct.addressList.pinCode} streetAddress={orderProduct.addressList && orderProduct.addressList.street} city={orderProduct.addressList && orderProduct.addressList.city} name={orderProduct.addressList && orderProduct.name} />
                </S.OrderInfoContent>
            </S.OrderInformation>
            <S.ButtonsNavigation>
                <S.ButtonReorder>Reorder</S.ButtonReorder>
                <S.ButtonRating>Add Rating</S.ButtonRating>
            </S.ButtonsNavigation>
            {
                showBottomSheetOrder && <BottomSheetOrder setState={setShowBottomSheetOrder} id={orderProduct._id && orderProduct._id} />
            }
        </S.OrderDetailContainer >
    )
}