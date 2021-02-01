import React from 'react';

import moneyInsight from '../../images/Travel.png'
import './Labels.scss';

const MoneyInsightLabel: React.FC = () => {
    return (
        <div className="label">
            <img height="25" className="moneyInsight" src={moneyInsight} alt="Monday Insight" />
            <h3 className="aquaDark">Money Insight</h3>
        </div>
    )
}

export default MoneyInsightLabel;