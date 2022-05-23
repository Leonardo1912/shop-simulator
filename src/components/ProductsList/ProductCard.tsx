import React from 'react';
import "./ProductsCard.scss"
import {Link} from "react-router-dom";
import {setProduct} from "../../store/action-creator/products";
import {useAction} from "../../hooks/useAction";

interface ProductCardProps {
    product: {
        imageUrl?: string,
        name?: string,
        id?: number,
    }
}

const ProductCard:React.FC<ProductCardProps> = ({product}) => {
    const {setProduct} = useAction()
    return (
        <Link to={`/product/${product.id}`} className="ProductCard" onClick={()=>setProduct(product)}>
            <div className="photo"><img src={product.imageUrl} alt=""/></div>
            <div className="product-content" >
                <div className="content-name">{product.name}</div>
            </div>
        </Link>
    );
};

export default ProductCard;