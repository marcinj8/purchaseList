import React from 'react';

import './PurchaseItem.css';

const purchaseItem = props => {
    return (
        <div className='purchaseItem__item'>
            <h2>{props.title}</h2>
            {props.item} : {props.quantity} {props.unit}
            <span onClick={props.confirm} className='purchaseItem__button--succes'>v</span>
            <span onClick={props.resign} className='purchaseItem__button--danger'>x</span>
        </div>
    )
}

export default purchaseItem;