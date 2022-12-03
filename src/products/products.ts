import axios from "axios";

const Api = `http://localhost:4000/product`
export const getProducts = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}