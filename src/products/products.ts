import axios from "axios";

const Api = `http://localhost:4000/product`
export const getProducts = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export function getProductsById(id) {
    let apiId = `${Api}/${id}`
    return axios.get(apiId).then((res) => {
        let data = res.data
        return data;
    });
}