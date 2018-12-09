import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/actions';
import PurchaseList from '../components/PurchaseList/PurchaseList';

class ListManeger extends Component {

    render() {
        return (
            <div>
                <PurchaseList 
                    title={'Purhase list'}
                    purchased={this.props.onItemPurchased}
                    removed={this.props.onItemRemoved}
                    deleted={this.props.onItemDeleted}
                    list={this.props.list}/>
                <PurchaseList 
                    title={'Purhased'}
                    list={this.props.purchased}/>
                <PurchaseList 
                    title={'Deleted'}
                    list={this.props.deleted}/>
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

const mapDispatchToProps = dispatch => {
    return {
        onItemPurchased: item => dispatch(actions.purchsedItem(item)),
        onItemRemoved: item => dispatch(actions.removeItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManeger);