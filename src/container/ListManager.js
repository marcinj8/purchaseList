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
                    confirm={this.props.onItemPurchased}
                    resign={this.props.onItemRemoved}
                    clearAll={this.props.clearAll}
                    list={this.props.list}/>
                <PurchaseList
                    confirm={this.props.onReturnToPurchaselist}
                    resign={(data) => this.props.onDeleteItem(data, 'purchasedItems')}
                    title={'Purhased list'}
                    list={this.props.purchased}/>
                <PurchaseList
                    confirm={this.props.onReturnToPurchaselist}
                    resign={(data) => this.props.onDeleteItem(data, 'deletedPosition')}
                    title={'Deleted list'}
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
        onItemPurchased: data => dispatch(actions.purchsedItem(data)),
        onItemRemoved: data => dispatch(actions.removeItem(data)),
        onReturnToPurchaselist: data => dispatch(actions.returnToPurchaselist(data)),
        onDeleteItem: (data, list) => dispatch(actions.deleteItem(data, list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManeger);