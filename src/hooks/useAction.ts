import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ShopActionCreators from "../store/action-creator/products"

export const useAction =() => {
    const dispatch = useDispatch()
    return bindActionCreators(ShopActionCreators, dispatch)
}