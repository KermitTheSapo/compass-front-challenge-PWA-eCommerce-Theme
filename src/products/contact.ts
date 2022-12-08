import axios from "axios";

const Api = `http://localhost:4000/contact`
export const getContact = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const postContact = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
// @ts-ignore
export const deleteContact = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
