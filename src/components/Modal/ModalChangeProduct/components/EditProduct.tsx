import React, {useState} from 'react';
import {ProductsListAPI} from "../../../../api/api";

interface EditProductProps {
    id?: string
}

const EditProduct:React.FC<EditProductProps> = ({id}) => {
    const [changeProduct, setChangeProduct] = useState({
        name: "",
        imageUrl: "",
        count:"",
        size: {width: "", height: ""},
        weight: "",
    })
    return (
        <div className="EditProduct">
            <div className="content">
                <div className="input-block">
                    <div className="input-block">
                        <div className="input">
                            <input type="text" placeholder="Name (e.g. Apple)" value={changeProduct.name}
                                   onChange={e => setChangeProduct({...changeProduct, name: e.target.value})}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Image URL" value={changeProduct.imageUrl}
                                   onChange={e => setChangeProduct({...changeProduct, imageUrl: e.target.value})}/>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Count (e.g. 1)" value={changeProduct.count}
                                   onChange={e => setChangeProduct({...changeProduct, count: e.target.value})}/>
                        </div>
                        <div className="input-size">
                            <div className="input">
                                <input type="text" placeholder="Wight (e.g. 200)" value={changeProduct.size.width}
                                       onChange={e => setChangeProduct({
                                           ...changeProduct,
                                           size: {...changeProduct.size, width: e.target.value}
                                       })}/>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Height (e.g. 100)" value={changeProduct.size.height}
                                       onChange={e => setChangeProduct({
                                           ...changeProduct,
                                           size: {...changeProduct.size, height: e.target.value}
                                       })}/>
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Weight, g (e.g. 100g)" value={changeProduct.weight}
                                   onChange={e => setChangeProduct({...changeProduct, weight: e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className="button-block">
                    <div className="confirm"><button onClick={()=> ProductsListAPI.changeProduct(id, changeProduct)}>Confirm</button></div>
                    <div className="cancel"><button>Cancel</button></div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;