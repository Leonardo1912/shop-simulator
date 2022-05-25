import React, {useState} from 'react';
import "./ModalChageProduct.scss"
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import EditProduct from "./components/EditProduct";
import EditComments from "./components/EditComments";

interface ModalChangeProductProps {
    modalChangeProduct: boolean
    setModalChangeProduct: Function
}

const ModalChangeProduct: React.FC<ModalChangeProductProps> = ({modalChangeProduct, setModalChangeProduct}) => {
    const [productComments, setProductComments] = useState(true)
    let navigate = useNavigate()
    const {id} = useParams<{ id?: string}>()
    return (
        <div className="ModalChangeProduct" style={modalChangeProduct ? {display: "flex"} : {display: "none"}}
             onClick={() => {
                 setModalChangeProduct(false)
                 navigate(`/product/${id}`)
             }}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="title">{productComments ? <div>Edit product</div> : <div>Edit comments</div>}</div>
                <div className="header">
                    <Link to={`/product/${id}/edit-product`} onClick={() => setProductComments(true)}>Product</Link>
                    <Link to={`/product/${id}/edit-comments`} onClick={() => setProductComments(false)}>Comments</Link>
                </div>
                <div className="content">
                    <Routes>
                        <Route path={"/edit-product"} element={<EditProduct id={id}/>}/>
                        <Route path={"/edit-comments"} element={<EditComments/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default ModalChangeProduct;