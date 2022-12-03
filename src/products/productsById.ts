import axios from "axios";

export function getProductsById(id) {
    const Api = `http://localhost:4000/product/${id}`
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}