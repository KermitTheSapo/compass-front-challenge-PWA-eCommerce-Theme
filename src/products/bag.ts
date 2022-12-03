import axios from "axios";

const Api = `http://localhost:4000/bag`
export const getBag = async () => {
    return axios.get(Api).then((res) => {
        let data = res.data
        return data;
    });
}

export const postBag = async (value) => {
    return axios.post(Api, value).then((res) => {
        let data = res.data
        return data;
    });
}
export const deleteBag = async (value) => {
    return axios.delete(`${Api}/${value}`).then((res) => {
        let data = res.data
        return data;
    });
}