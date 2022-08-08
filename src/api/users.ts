import instance from "./config";
export const signin = (req:any) =>{
    return instance.post(`/user`,req);
}
export const signup = (req:any) =>{
    return instance.post(`/user`,req);
}