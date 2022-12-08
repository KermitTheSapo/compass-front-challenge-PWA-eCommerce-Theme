import axios from "axios";

const Api = `http://localhost:4000/wishlist`
export const getWishlist = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const postWishlist = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const deleteWishlist = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
