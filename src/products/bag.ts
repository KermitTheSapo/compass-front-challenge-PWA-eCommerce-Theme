import axios from "axios";

const Api = `http://localhost:4000/bag`
export const getBag = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const getBagById = async (id) => {
    let apiId = `${Api}/${id}`
    return axios.get(apiId).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const postBag = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const deleteBag = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}