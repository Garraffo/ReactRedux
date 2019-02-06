import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(<h4>Select a user</h4>)
        }
        return(
            <div>
                <img src={this.props.user.thumbnail}/>
                <h2>{this.props.user.nombre} {this.props.user.apellido}</h2>
                <h3>Edad: {this.props.user.edad}</h3>
                <h3>Descripción: {this.props.user.descripcion}</h3>
            </div>
        );

    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);