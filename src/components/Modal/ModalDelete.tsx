import React, {useState} from 'react';
import "./ModalDelete.scss"
import {ProductsListAPI} from "../../api/api";
import {useAction} from "../../hooks/useAction";

interface ModalDeleteProps {
    modalDelete: boolean
    setModalDelete: Function
}

const ModalDelete: React.FC<ModalDeleteProps> = ({modalDelete, setModalDelete}) => {
    const [id, setId] = useState<number>(0)
    const {addDeleteProductSuccess} = useAction()
    return (
        <div className="ModalDelete" style={modalDelete ? {display: "flex"} : {display: "none"}}
             onClick={() => setModalDelete(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="title">Delete product</div>
                <div className="input">
                    <input type="number" value={id} onChange={e => setId(Number(e.target.value))}
                           placeholder="Enter the ID of the product you want to remove"/>
                </div>
                <div className="button-block">
                    <div className="confirm">
                        <button onClick={() => {
                            setModalDelete(false)
                            ProductsListAPI.deleteProduct(id)
                            addDeleteProductSuccess(true)
                        }}>Confirm
                        </button>
                    </div>
                    <div className="cancel">
                        <button onClick={() => setModalDelete(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;