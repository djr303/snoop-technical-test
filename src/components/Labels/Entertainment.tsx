import React from 'react';

import entertainment from '../../images/Entertainment.png'
import './Labels.scss';

const ShoppingLabel: React.FC = () => {
    return (
        <div className="label">
            <img height="25" src={entertainment} alt="Entertainment" />
            <h3 className="">Entertainment</h3>
        </div>
    )
}

export default ShoppingLabel;