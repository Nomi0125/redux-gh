import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import { facebook_Login } from '../../store/action';
class  Home extends React.Component{
    render(){
    console.log("home props",this.props)
    return (
        <div className="home">
            <h1>Home</h1>
            <button onClick={this.props.facebook_Login}>Login with Facebook</button>
        </div>
    )
}}

const mapStateToProps = (state) =>({
    user:state.users,
})
const mapDispatchToProps = (dispatch) =>({
    facebook_Login: () => dispatch(facebook_Login()),
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);