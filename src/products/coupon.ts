import axios from "axios";

const Api = `http://localhost:4000/coupon`
export const getCoupon = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}

export const postCoupon = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
export const deleteCoupon = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
