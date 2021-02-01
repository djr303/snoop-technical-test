import React from 'react';

import shopping from '../../images/Shopping.png'
import './Labels.scss';

const ShoppingLabel: React.FC = () => {
    return (
        <div className="label">
            <img height="25" src={shopping} alt="Shopping" />
            <h3 className="aqua">Shopping</h3>
        </div>
    )
}

export default ShoppingLabel;