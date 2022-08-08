import instance from "./config"
export const apiGet = (config: String) => {
    return instance.get(`/product${config}`);

}
export const getAll = async () => {
    return instance.get(`/product`);
}
export const getOne = (id: String) => {
    return instance.get(`/product/${id}`);
}
export const add = (data: any) => {
    return instance.post(`/product`, data);
}
export const update = (id: String, data: any) => {
    return instance.patch(`/product/${id}`, data);
}
export const remove = (id: String) => {
    return instance.delete(`/product/${id}`);
}
export const searchq = (url:string) => {
    return instance.post(`/productq?${url}`);
}
export const Searchbycate = (url:string) => {
    return instance.post(`/product?${url}`);
}
