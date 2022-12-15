import axios from "axios";

const Api = `https://compass-ecommerce.onrender.com/product/category`
// @ts-ignore
export const getCategory = async (limit, offset, category) => {
    return axios.get(`${Api}/${category}?limit=${limit}&offset=${offset}`).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const getCategoryById = async (id) => {
    let apiId = `${Api}/${id}`
    return axios.get(apiId).then((res) => {
        let data = res.data
        return data;
    });
}