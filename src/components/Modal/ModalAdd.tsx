import React, {useState} from 'react';
import "./ModalAdd.scss"
import {ProductsListAPI} from "../../api/api";
import {addDeleteProductSuccess} from "../../store/action-creator/products";
import {useAction} from "../../hooks/useAction";

interface ModalAddProps {
    modalAdd: boolean
    setModalAdd: Function
}

const ModalAdd: React.FC<ModalAddProps> = ({modalAdd, setModalAdd}) => {
    const {addDeleteProductSuccess} = useAction()
    const [addProduct, setAddProduct] = useState({
        name: "",
        imageUrl: "",
        count: "",
        size: {width: "", height: ""},
        weight: "",
    })
    return (
        <div className="ModalAdd" style={modalAdd ? {display: "flex"} : {display: "none"}}
             onClick={() => setModalAdd(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="title">Add product</div>
                <div className="input-block">
                    <div className="input">
                        <input type="text" placeholder="Name (e.g. Apple)" value={addProduct.name}
                               onChange={e => setAddProduct({...addProduct, name: e.target.value})}/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Image URL" value={addProduct.imageUrl}
                               onChange={e => setAddProduct({...addProduct, imageUrl: e.target.value})}/>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Count (e.g. 1)" value={addProduct.count}
                               onChange={e => setAddProduct({...addProduct, count: e.target.value})}/>
                    </div>
                    <div className="input-size">
                        <div className="input">
                            <input type="text" placeholder="Wight (e.g. 200)" value={addProduct.size.width}
                                   onChange={e => setAddProduct({
                                       ...addProduct,
                                       size: {...addProduct.size, width: e.target.value}
                                   })}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Height (e.g. 100)" value={addProduct.size.height}
                                   onChange={e => setAddProduct({
                                       ...addProduct,
                                       size: {...addProduct.size, height: e.target.value}
                                   })}/>
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Weight, g (e.g. 100g)" value={addProduct.weight}
                               onChange={e => setAddProduct({...addProduct, weight: e.target.value})}/>
                    </div>
                </div>
                <div className="button-block">
                    <div className="confirm">
                        <button onClick={() => {
                            setModalAdd(false)
                            ProductsListAPI.addProduct(addProduct)
                            addDeleteProductSuccess(true)
                        }}>Confirm
                        </button>
                    </div>
                    <div className="cancel">
                        <button onClick={() => setModalAdd(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;