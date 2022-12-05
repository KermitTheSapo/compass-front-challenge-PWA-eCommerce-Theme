import axios from "axios";

const Api = `http://localhost:4000/address`
export const getAddress = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}

export const postAddress = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
export const deleteAddress = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}
