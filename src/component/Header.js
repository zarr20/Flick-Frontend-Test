import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";

const Header = (props) => (
  <header className="header">
    <div className="container">
      <Link to={"/"}>
        <img className="logo" src="https://www.flick.id/img/flick-black.svg" />
      </Link>

      <div className="title">Front-end Test - Job Search</div>
      {props.isLogin ? (
        <div className="logout">
          <input onClick={props.Logout} type="submit" value="Logout" />
        </div>
      ) : (
        ""
      )}
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    Logout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Header);
