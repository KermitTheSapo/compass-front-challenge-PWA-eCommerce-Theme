import axios from "axios";

const Api = `https://compass-ecommerce.onrender.com/product`
// @ts-ignore
export const getProducts = async (limit, offset) => {
    return axios.get(`${Api}?limit=${limit}&offset=${offset}`).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const getProductsById = async (id) => {
    let apiId = `${Api}/${id}`
    return axios.get(apiId).then((res) => {
        let data = res.data
        return data;
    });
}