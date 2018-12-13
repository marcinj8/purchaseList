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
    
    showListHandler = item => {
        let navigation = {...this.state.navigation}
        let navigationItem = navigation[item]
        navigationItem.display= !this.state.navigation[item].display
        navigation[item] = navigationItem

        this.setState({
            navigation: navigation
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Navigation 
                    showList={this.showListHandler}
                    navigation={this.state.navigation}/>
                <ListCreator />
                <ListManager 
                    navigation={this.state.navigation}/>
            </div>
        )
    }
}

export default Layout;