import React, {useEffect} from 'react';
import "./ProductsList.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import ProductCard from "./ProductCard";

interface product{
    imageUrl?:string
    id?:number
    name?:string
}

const ProductsList: React.FC = () => {
    const {products, isAddDeleteProduct} = useTypedSelector(state => state.shop)
    const {fetchProducts} = useAction()
    useEffect(() => {
        fetchProducts()
    }, [])
    useEffect(() => {
        fetchProducts()
    }, [isAddDeleteProduct])
    return (
        <div className="ProductsList">
            <div className="products">
                {(products as []).map((product: product) => <ProductCard key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default ProductsList;