import React from "react";
import LoginForm from "./LoginForm";
import UserForm from "./UserForm";
import { connect } from "react-redux";
import { login } from "../store/index";

function Layout(props) {
  const { loginUser } = props;
  return <div>{!loginUser ? <LoginForm /> : <UserForm />}</div>;
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Boolean) => dispatch(login(Boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);