import {ShopAction, ShopActionsTypes} from "../../types/shop";
import {Dispatch} from "redux";
import {ProductsListAPI} from "../../api/api";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ShopAction>) => {
        const data = await ProductsListAPI.getProducts()
        dispatch({type: ShopActionsTypes.SET_PRODUCTS, payload:data})
        dispatch({type: ShopActionsTypes.IS_ADD_DELETE_PRODUCT, payload: false})
    }
}
export const fetchProduct = (id?:string|undefined) => {
    return async (dispatch: Dispatch<ShopAction>) => {
        dispatch({type:ShopActionsTypes.SET_PRODUCT_LOADING, payload: true})
        const data = await ProductsListAPI.getProduct(id)
        dispatch({type: ShopActionsTypes.SET_PRODUCT, payload:data})
        dispatch({type:ShopActionsTypes.SET_PRODUCT_LOADING, payload: false})
    }
}
export const addDeleteProductSuccess = (isAddProduct: boolean) => ({type: ShopActionsTypes.IS_ADD_DELETE_PRODUCT, payload: isAddProduct})
export const setProduct = (product: {}) => ({type: ShopActionsTypes.SET_PRODUCT, payload: product})