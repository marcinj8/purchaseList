import React from 'react';

import PurchaseItem from './PurchaseItem/PurchaseItem';

const purchaseList = props => {
    const list = [];

    for (let key in props.list) {
        list.push(
            <PurchaseItem 
                purchased={()=>props.purchased({name: key, quantity: props.list[key][0], unit:props.list[key][1]})}
                removed={()=>props.removed({name: key, quantity: props.list[key][0], unit:props.list[key][1]})}
                key={key}
                item={key}
                quantity={props.list[key][0]}
                unit={props.list[key][1]}/>
        )
    }

    return (
        <div>
            <h2>{props.title}</h2>
            {list.length > 0
            ? list
            : 'empty'
            }
        </div>
    )
}

export default purchaseList;