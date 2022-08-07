
import instance from "./config"
export const apiGet = (config: String) => {
    return instance.get(`/product${config}`);

}
export const search = (key: String) => {
    return instance.post(`/product?${key}`);
}
export const getAll = async () => {
    return instance.get(`/product`);
}
=======
import instance from "./config"
export const apiGet = (config: String) => {
    return instance.get(`/product/${config}`);
}
export const getAll = async () => {
    return instance.get(`/product`);
}
