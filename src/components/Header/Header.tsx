import React from 'react';
import "./Header.scss"

interface HeaderAddProps {
    setModalAdd: Function
    setModalDelete: Function
}

const Header:React.FC<HeaderAddProps> = ({setModalAdd, setModalDelete}) => {
    return (
        <div className="Header">
            <div className="button-block">
                <div className="add"><button onClick={()=>setModalAdd(true)} >ADD</button></div>
                <div className="delete"><button onClick={()=>setModalDelete(true)}>DELETE</button></div>
            </div>
        </div>
    );
};

export default Header;