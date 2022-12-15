import axios from "axios";

const Api = `http://localhost:4000/order`
export const getOrder = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const postOrder = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const deleteOrder = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const getOrderById = async (id) => {
    let apiId = `${Api}/${id}`
    return axios.get(apiId).then((res) => {
        let data = res.data
        return data;
    });
}