import axios, {AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    baseURL: "http://localhost:3002/items"
}
const instance = axios.create(config)

export const ProductsListAPI = {
    getProducts() {
        return instance.get('').then(response => response.data.data)
    },
    getProduct(id?:string|undefined) {
        return instance.get(`/${id}`).then(response => response.data.data)
    },
    addProduct(product:{}){
        return instance.post('', product)
    },
    changeProduct(id?:string, product?:{}){
        return instance.post(`/${id}`, product)
    },
    deleteProduct(id:number){
        return instance.delete(`/${id}`)
    }
}