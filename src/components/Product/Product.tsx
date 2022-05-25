import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Link, useParams} from "react-router-dom";
import {fetchProduct} from "../../store/action-creator/products";
import {useAction} from "../../hooks/useAction";
import "./Product.scss"
import ModalChangeProduct from "../Modal/ModalChangeProduct/ModalChangeProduct";

interface comments {
    id?: number
    description?: string
    date?: string
}

interface ProductProps {
    setModalChangeProduct: Function
    modalChangeProduct: boolean
}

const Product: React.FC<ProductProps> = ({setModalChangeProduct, modalChangeProduct}) => {
    const {
        product: {imageUrl, name, count, size, weight, comments},
        isLoadingProduct
    } = useTypedSelector(state => state.shop)
    const {id} = useParams<{ id?: string }>()
    const {fetchProduct} = useAction()
    useEffect(() => {
        fetchProduct(id)
    }, [])
    if (isLoadingProduct) {
        return <div>Loading</div>
    }
    const {width, height} = size

    return (
        <>
            <div className="Product">
                <div className="edit">
                    <Link to={`/product/${id}/edit-product`} onClick={() => setModalChangeProduct(true)}>Edit</Link>
                </div>
                <div className="product-content">
                    <div className="image"><img src={imageUrl} alt=""/></div>
                    <div className="description">
                        <div className="name"><span>{name}</span></div>
                        <div className="count"><span>Count: </span><span>{count}</span></div>
                        <div className="size">
                            <div className="width"><span>Wight: </span><span>{width}</span></div>
                            <div className="height"><span>Height: </span><span>{height}</span></div>
                        </div>
                        <div className="weight"><span>Weight: </span><span>{weight}</span></div>
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
            <ModalChangeProduct modalChangeProduct={modalChangeProduct}
                                setModalChangeProduct={setModalChangeProduct}/>
        </>
    );
};

export default Product;