import {ShopAction, ShopActionsTypes, shopState} from "../../types/shop";

const initialState: shopState = {
    products: [],
    product: {},
    isAddDeleteProduct: false,
    isLoadingProduct: true,
}



export const shopReducer = (state = initialState, action: ShopAction) => {
    switch (action.type) {
        case ShopActionsTypes.SET_PRODUCTS:{
            return {...state, products: action.payload}
        }
        case ShopActionsTypes.IS_ADD_DELETE_PRODUCT:{
            return {...state, isAddDeleteProduct: action.payload}
        }
        case ShopActionsTypes.SET_PRODUCT:{
            return {...state, product: action.payload}
        }
        case ShopActionsTypes.SET_PRODUCT_LOADING:{
            return {...state, isLoadingProduct: action.payload}
        }

        default :
            return state
    }
}