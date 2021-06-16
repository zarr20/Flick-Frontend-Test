import React from "react";
import GetList from "../../component/getjob/getjob_list";
import axios from "axios";

import { connect } from "react-redux";
import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
      login: false,
    };
  }

  componentDidMount() {}

  handlerLogin() {
    console.log(this.props.Login);
  }

  loginAuth = (credentials) => {
    var self = this;
    axios
      .post("https://reqres.in/api/login", credentials)
      .then(function (response) {
        self.setState({ login: true });
      })
      .catch(function (error) {
        self.setState({ login: false });
        alert("Email / Password Salah");
      });
    // this.state.login && this.props.Login;
  };

  handlerInputChange = (e) => {
    if (e.target.name == "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.name == "password") {
      this.setState({ password: e.target.value });
    }
  };

  handleSubmit = (email, password) => {
    // console.log(email);

    const data = {
      email: email,
      password: password,
    };

    this.loginAuth(data);
  };

  render() {
    this.state.login && this.props.Login();
    return (
      <div className="container" style={{ padding: "20px 0" }}>
        <div className="login-wrapper">
          <form>
            <div>
              <label>
                <p>Username</p>
                <input
                  type="text"
                  name="email"
                  onChange={this.handlerInputChange}
                  value={this.state.email}
                />
              </label>
            </div>

            <label>
              <p>Password</p>
              <input
                onChange={this.handlerInputChange}
                type="text"
                name="password"
                value={this.state.password}
              />
            </label>
            <div>
              <button
                onClick={() =>
                  this.handleSubmit(this.state.email, this.state.password)
                }
                name="submit"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    Login: () => {
      dispatch({ type: "LOGGED_IN" });
    },
  };
};

export default connect("", mapDispatchToProp)(Login);
