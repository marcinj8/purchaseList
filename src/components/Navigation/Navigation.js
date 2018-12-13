import React from 'react';

import NavigationItem from './NavigationItem';

const navigation = props => {
    const navigation = [];

    for(let key in props.navigation) {
        navigation.push(
            <NavigationItem 
                clicked={() => props.showList(key)}
                key={key} 
                display={props.navigation[key].display} 
                name={props.navigation[key].name}/>
        )
    }

    return (
        <div>
            {navigation}
        </div>
    )
}

export default navigation;