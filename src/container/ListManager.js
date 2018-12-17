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
                    class={this.props.navigation.listItem.className}
                    display={this.props.navigation.listItem.display}
                    confirm={this.props.onItemPurchased}
                    resign={this.props.onItemRemoved}
                    clearAll={this.props.clearAll}
                    list={this.props.list}/>
                <PurchaseList
                    title={'Purhased list'}
                    class={this.props.navigation.purchased.className}
                    display={this.props.navigation.purchased.display}
                    confirm={(data)=>this.props.onReturnToPurchaselist(data, 'purchasedItems')}
                    resign={(data) => this.props.onDeleteItem(data, 'purchasedItems')}
                    list={this.props.purchased}/>
                <PurchaseList
                    title={'Deleted list'}
                    class={this.props.navigation.deleted.className}
                    display={this.props.navigation.deleted.display}
                    confirm={(data)=>this.props.onReturnToPurchaselist(data, 'deletedPosition')}
                    resign={(data) => this.props.onDeleteItem(data, 'deletedPosition')}
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
        onReturnToPurchaselist: (data, list) => dispatch(actions.returnToPurchaselist(data, list)),
        onDeleteItem: (data, list) => dispatch(actions.deleteItem(data, list))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManeger);