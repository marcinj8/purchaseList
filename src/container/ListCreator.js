import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/actions';
import Form from '../components/Form/Form';

import './ListCreator.css'

class ListCreator extends Component {
    state = {
        itemName: '',
        itemQuantity: '',
        itemUnit: ''
    }

    clearInputs = () => {
        this.setState({
            itemName: '',
            itemQuantity: '',
            itemUnit: ''
        })
    }

    addItemHandler = () => {
        const newItemData = {
            name: this.state.itemName,
            quantity: this.state.itemQuantity,
            unit: this.state.itemUnit
        }
        this.props.onAddItem(newItemData)
        this.clearInputs()
    }

    onItemNameChange = event => { 
        this.setState({
            itemName: event.target.value
        })
    }

    onQuantityChange = event => { 
        this.setState({
            itemQuantity: event.target.value
        })
    }

    onUnitChange = event => { 
        this.setState({
            itemUnit: event.target.value
        })
    }

    render() {
        console.log(this.props.navigation)
        return (
            <div className={[
                    'listCreator__form', 
                    this.props.navigation.display 
                    ? this.props.navigation.className + '--active' 
                    : this.props.navigation.className + '--closed'].join(' ')}>
                <Form 
                    onItemNameChange={this.onItemNameChange}
                    onQuantityChange={this.onQuantityChange}
                    onUnitChange={this.onUnitChange}
                    nameItemValue={this.state.itemName}
                    quantityValue={this.state.itemQuantity}
                    unitValue={this.state.itemUnit}
                    addItem={this.addItemHandler}/>
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
        onAddItem: (data) => dispatch(actions.addItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCreator);