import React from "react";
import LoginForm from "./LoginForm";
import UserForm from "./UserForm";
import { connect } from "react-redux";
import { login } from "../store/index";
import Users from "./Users";

function Layout(props) {
  const { loginUser, logAdmin } = props;
  console.log(loginUser);
  return (
    <div>
      <>
        {loginUser == true ? (
          <UserForm />
        ) : logAdmin == true ? (
          <Users />
        ) : (
          <LoginForm />
        )}
      </>
    </div>
  );
  // return <Users />;
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser,
    logAdmin: state.loginAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Boolean) => dispatch(login(Boolean)),
    // loginAdmin: (Boolean) => dispatch(loginAdmin(Boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
