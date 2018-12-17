import React from 'react';

import PurchaseItem from './PurchaseItem/PurchaseItem';

import './PurchaseList.css'

const purchaseList = props => {
    const list = [];
    const listStyle = ['listContainer', props.display ? props.class + '--active' : props.class + '--closed']

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
        <div className={listStyle.join(' ')}>
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