import React from 'react';

import PurchaseItem from './PurchaseItem/PurchaseItem';

const purchaseList = props => {
    const list = [];

    for (let key in props.list) {
        list.push(
            <PurchaseItem 
                key={key}
                item={key}
                quantity={props.list[key][0]}
                unit={props.list[key][1]}/>
        )
    }

    return list
}

export default purchaseList;