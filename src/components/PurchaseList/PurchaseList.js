import React from 'react';

import PurchaseItem from './PurchaseItem/PurchaseItem';

const purchaseList = props => {
    const list = [];

    for (let key in props.list) {
        list.push(
            <PurchaseItem 
                confirm={()=>props.confirm({name: key, quantity: props.list[key][0], unit:props.list[key][1]})}
                resign={()=>props.resign({name: key, quantity: props.list[key][0], unit:props.list[key][1]})}
                key={key}
                item={key}
                quantity={props.list[key][0]}
                unit={props.list[key][1]}/>
        )
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                {list.length > 0
                ? list
                : 'empty'
                }
         </div>
            <button>Clear {props.title.toLowerCase()}</button>
        </div>
    )
}

export default purchaseList;