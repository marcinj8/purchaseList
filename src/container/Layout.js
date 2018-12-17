import React, {Component} from 'react';

import Navigation from '../components/Navigation/Navigation';
import ListManager from './ListManager';
import ListCreator from './ListCreator';

class Layout extends Component {
    state = {
        navigation: {
            newItem: {
                name: 'New Item',
                className: 'newItem',
                display: false
            },
            listItem: {
                name: 'Purchase List',
                className: 'listItem',
                display: true
            },
            purchased: {
                name: 'Purchased',
                className: 'purchased',
                display: false
            },
            deleted: {
                name: 'Deleted',
                className: 'deleted',
                display: false
            },
        }
    }
    
    showListHandler = item => {
        let navigation = {...this.state.navigation}
        let navigationItem = navigation[item]
        navigationItem.display= !this.state.navigation[item].display
        navigation[item] = navigationItem

        this.setState({
            navigation: navigation
        })
    }

    render() {
        return (
            <div>
                <Navigation 
                    showList={this.showListHandler}
                    navigation={this.state.navigation}/>
                <ListCreator 
                    navigation={this.state.navigation.newItem}/>
                <ListManager 
                    navigation={this.state.navigation}/>
            </div>
        )
    }
}

export default Layout;