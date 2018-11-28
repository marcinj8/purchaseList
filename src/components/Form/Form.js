import React from 'react';

const userForm = props => {
    return (
        <div>
            <h2>Add new item</h2>
            <input placeholder='item'/>
            <input placeholder='quantity'/>
            <input placeholder='unit'/>
            <button>Add item</button>
        </div>
    )
}

export default userForm;