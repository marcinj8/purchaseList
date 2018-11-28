import React from 'react';

import './PurchaseItem.css';

const purchaseItem = props => {
    return (
        <div className='purchaseItem__item'>
            {props.item} : {props.quantity} {props.unit}
            <span className='purchaseItem__button purchaseItem__button--succes'>v</span>
            <span className='purchaseItem__button purchaseItem__button--danger'>x</span>
        </div>
    )
}

export default purchaseItem;