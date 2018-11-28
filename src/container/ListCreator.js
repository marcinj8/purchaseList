import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserForm from '../components/Form/Form';

class ListCreator extends Component {

    render() {
        return (
            <div>
                <UserForm />
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

export default connect()(ListCreator);