import React from 'react';

import './NavigationItem.css';

const navigationItem = props => {

    return (
        <div className={
            ['navigation__item',
             props.display
             ? 'navigation__item--active' 
             : 'navigation__item--noActive'].join(' ')
            }>
            {props.name}
        </div>
    )
}

export default navigationItem;