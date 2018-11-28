import React, {Component} from 'react';

import Navigation from '../components/Navigation/Navigation';
import ListManager from './ListManager';
import ListCreator from './ListCreator';

class Layout extends Component {
    state = {
        navigation: {
            newItem: {
                name: 'New Item',
                display: false
            },
            listItem: {
                name: 'Purchase List',
                display: true
            },
            deleted: {
                name: 'Deleted',
                display: false
            },
            purchased: {
                name: 'Purchased',
                display: false
            },
        }
    }

    render() {
        return (
            <div>
                <Navigation 
                    navigation={this.state.navigation}/>
                <ListCreator />
                <ListManager />
            </div>
        )
    }
}

export default Layout;