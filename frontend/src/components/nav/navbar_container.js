import React from "react";
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions'



import NavBar from './navbar';

const mapStateToProps = state => ({
    isAuthenticated: state.session.isAuthenticated
  });

const mapDispatchToProps = dispatch => ({
  openModal: (modal)=>dispatch(openModal(modal)),
  logout: ()=>dispatch(logout())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
  