import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ListaUsuarios extends Component {
    render() {
        return (
            <ul>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps)(ListaUsuarios);