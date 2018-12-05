import React, {Component} from 'react';
import { connect } from 'react-redux';

import PurchaseList from '../components/PurchaseList/PurchaseList';

class ListManeger extends Component {
    
    render() {
        return (
            <div>
                <PurchaseList 
                    list={this.props.list}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        deleted: state.deletedPosition,
        purchased: state.purchasedItems
    }
}

export default connect(mapStateToProps)(ListManeger);