import React from 'react';

import finance from '../../images/FinancesIcon.svg'
import './Labels.scss';

const FinanceLabel: React.FC = () => {
    return (
        <div className="label">
            <img height="25" src={finance} alt="Finance" />
            <h3 className="green">Finances</h3>
        </div>
    )
}

export default FinanceLabel;