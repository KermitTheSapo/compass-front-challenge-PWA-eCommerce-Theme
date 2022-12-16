import * as S from "./orderListStyle"
import { useEffect, useState } from "react"
import OrderItem from "../orderItem/orderItem"
import { getOrder } from "../../../../../products/order"
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"
import { useNavigate } from "react-router-dom"
import bag from "@/assets/imgs/my-orders/bag.svg"
export default function OrderList() {
    const navigate = useNavigate()
    const [completed, setCompleted] = useState(true)
    const [processing, setProcessing] = useState(false)
    const [cancelled, setCancelled] = useState(false)
    const [order, setOrder] = useState([{
        _id: "",
        orderId: "",
        orderDate: "",
        name: "",
        total: "",
        subTotal: "",
        upi: "",
        discount: "",
        addressList: {
            _id: "",
            pinCode: 0,
            streetAddress: "",
            city: "",
            uf: ""
        },
        product: [
            {
                _id: "",
                name: "",
                paragraph: "",
                description: "",
                price: 0,
                safe: 0,
                subTotal: 0,
                discount: 0,
                image: "",
                ratings: 0,
                quantity: 0,
            }
        ],
        status: "",
    }])

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
        getOrder().then(res => setOrder(res))
    }, [])
    return (
        <>
            <S.OrderNav>
                <S.OrderDiv>
                    <img src={arrow} alt="left arrow image" onClick={() => navigate(-1)} />
                    <S.OrderTitle>My Orders</S.OrderTitle>
                </S.OrderDiv>
                <img src={bag} alt="" onClick={() => navigate("/bag")} />
            </S.OrderNav>
            <S.OrderTabs>
                <S.OrderItem color={completed ? "#1B4B66" : "transparent"} onClick={() => completedTab()}>
                    <S.OrderItemLabel color={completed ? "#FFFFFF" : "#626262"}>Completed</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={processing ? "#1B4B66" : "transparent"} onClick={() => processingTab()}>
                    <S.OrderItemLabel color={processing ? "#FFFFFF" : "#626262"}>Processing</S.OrderItemLabel>
                </S.OrderItem>
                <S.OrderItem color={cancelled ? "#1B4B66" : "transparent"} onClick={() => cancelledTab()}>
                    <S.OrderItemLabel color={cancelled ? "#FFFFFF" : "#626262"}>Cancelled</S.OrderItemLabel>
                </S.OrderItem>
            </S.OrderTabs>

            <S.OrderList>
                <S.OrderHeader>
                    <S.OrderHeaderLabel>Order ID</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Date</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Price</S.OrderHeaderLabel>
                    <S.OrderHeaderLabel>Status</S.OrderHeaderLabel>
                </S.OrderHeader>

                <S.Separator></S.Separator>

                <S.OrderProducts>
                    <S.OrderQuantity>{order.length} Order(s)</S.OrderQuantity>
                    <S.OrderItemDiv>

                        {
                            completed && <>
                                {order && order.map((item, key) => (
                                    <div key={key}>
                                        <OrderItem orderId={item.orderId} date={item.orderDate} price={item.total} status={item.status} id={item._id} />
                                    </div>
                                ))}
                            </>
                        }
                        {
                            processing && <>
                                {order && order.map((item, key) => (
                                    <div key={key}>
                                        <OrderItem orderId={item.orderId} date={item.orderDate} price={item.total} status={item.status} id={item._id} />

                                    </div>
                                ))}
                            </>
                        }
                        {
                            cancelled && <>
                                {order && order.map((item, key) => (
                                    <div key={key}>
                                        <OrderItem orderId={item.orderId} date={item.orderDate} price={item.total} status={item.status} id={item._id} />
                                    </div>
                                ))}
                            </>
                        }
                    </S.OrderItemDiv>
                </S.OrderProducts>
            </S.OrderList>
        </>
    )
}