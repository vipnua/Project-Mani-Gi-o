import instance from "./config"
export const apiGet = (config:String) =>{
    return instance.get(`${config}`);
}
export const getAll = () => {
    return instance.get('product');
}
export const getOne = (id:String) => {
    return instance.get(`/product/${id}`);
}
export const add = (data:any) => {
    return instance.post(`/product/`,data);
}
export const update = (id:String,data:any) => {
    return instance.put(`/product/${id}`,data);
}
export const remove = (id:String) => {
    return instance.delete(`/product/${id}`);
}

