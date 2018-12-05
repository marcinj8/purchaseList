import React from 'react';

const userForm = props => {
    return (
        <div>
            <h2>Add new item</h2>
            <input 
                value={props.nameItemValue} 
                name='itemName' 
                onChange={props.onItemNameChange} 
                placeholder='item'/>
            <input 
                value={props.quantityValue} 
                name='itemQuantity' 
                onChange={props.onQuantityChange} 
                type='number'
                placeholder='quantity'/>
            <input 
                value={props.unitValue} 
                name='itemUnit' 
                onChange={props.onUnitChange} 
                placeholder='unit'/>
            <button onClick={props.addItem}>Add item</button>
        </div>
    )
}

export default userForm;