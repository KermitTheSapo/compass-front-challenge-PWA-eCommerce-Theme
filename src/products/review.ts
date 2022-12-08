import axios from "axios";

const Api = `http://localhost:4000/review`
export const getReview = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const postReview = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const deleteReview = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
