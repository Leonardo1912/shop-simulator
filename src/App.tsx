import React, {useState} from 'react';
import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import ModalAdd from "./components/Modal/ModalAdd";
import ModalDelete from "./components/Modal/ModalDelete";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product/Product";

const App = () => {
    const [modalAdd, setModalAdd] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [modalChangeProduct, setModalChangeProduct] = useState(false)
    return (
        <div>
            <ModalAdd modalAdd={modalAdd} setModalAdd={setModalAdd}/>
            <ModalDelete setModalDelete={setModalDelete} modalDelete={modalDelete}/>
            <Header setModalAdd={setModalAdd} setModalDelete={setModalDelete}/>
            <Routes>
                <Route path={"/"} element={<ProductsList/>}/>
                <Route path={"/product/:id"} element={<Product setModalChangeProduct={setModalChangeProduct}
                                                               modalChangeProduct={modalChangeProduct}/>}>
                    <Route path={":edit"} element={<Product setModalChangeProduct={setModalChangeProduct}
                                                             modalChangeProduct={modalChangeProduct}/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;