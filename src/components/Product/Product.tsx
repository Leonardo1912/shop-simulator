import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../store/action-creator/products";
import {useAction} from "../../hooks/useAction";

interface comments {
    id?: number
    description?: string
    date?: string
}

const Product: React.FC = () => {
    const {
        product: {imageUrl, name, count, weight, comments},
        isLoadingProduct
    } = useTypedSelector(state => state.shop)
    const {id} = useParams<{ id?: string}>()
    const {fetchProduct} = useAction()
    useEffect(() => {
        fetchProduct(id)
    }, [])
    if (isLoadingProduct) {
        return <div>Loading</div>
    }

    return (
        <div className="Product">
            <div className="edit">
                <button>Edit</button>
            </div>
            <div className="product-content">
                <div className="image"><img src={imageUrl} alt=""/></div>
                <div className="description">
                    <div className="name">{name}</div>
                    <div className="count">{count}</div>
                    <div className="size">
                        <div className="width">{/*{wight}*/}</div>
                        <div className="height">{/*{height}*/}</div>
                    </div>
                    <div className="weight">{weight}</div>
                    <div className="comments">
                        {(comments as []).map((comment: comments) =>
                            <div key={comment.id}>
                                <div className="comment">
                                    <div className="comment-description">{comment.description}</div>
                                    <div className="comment-date">{comment.date}</div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;