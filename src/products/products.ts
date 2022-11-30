import axios from "axios";

const Api = `http://localhost:3000/product/`
export function getProducts() {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}