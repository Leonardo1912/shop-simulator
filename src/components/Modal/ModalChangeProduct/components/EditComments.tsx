import React from 'react';

const EditComments:React.FC = () => {
    return (
        <div className="EditComments">
            <div className="content">
                <div className="input-block">
                    <div className="input"><input type="text"/></div>
                    <div className="input"><input type="text"/></div>
                </div>
                <div className="button-block">
                    <div className="confirm"><button>Confirm</button></div>
                    <div className="cancel"><button>Cancel</button></div>
                </div>
            </div>
        </div>
    );
};

export default EditComments;