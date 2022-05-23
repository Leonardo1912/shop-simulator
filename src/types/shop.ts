export interface shopState {
    products: any[],
    product: {imageUrl?:string, name?:string, count?:number, size?:{wight?:string, height?:string}, weight?:string, comments?:[]},
    isAddDeleteProduct: boolean,
    isLoadingProduct: boolean,
}

export enum ShopActionsTypes {
    SET_PRODUCTS = "SET_PRODUCTS",
    IS_ADD_DELETE_PRODUCT = "IS_ADD_DELETE_PRODUCT",
    SET_PRODUCT = "SET_PRODUCT",
    SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING"
}

interface setProducts {
    type: ShopActionsTypes.SET_PRODUCTS
    payload: any[]
}
interface setProduct {
    type: ShopActionsTypes.SET_PRODUCT
    payload: any[]
}
interface isAddProduct {
    type: ShopActionsTypes.IS_ADD_DELETE_PRODUCT
    payload: boolean
}
interface isLoadingProduct {
    type: ShopActionsTypes.SET_PRODUCT_LOADING
    payload: boolean
}

export type ShopAction = setProducts|isAddProduct|setProduct|isLoadingProduct