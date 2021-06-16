import React from "react";
import GetList from "../../component/getjob/getjob_list";
import axios from "axios";

import { connect } from "react-redux";
import "./login.css";

class Cari extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container" style={{ padding: "20px 0" }}>
        <div className="login-wrapper">
          <form>
            <div>
              <label>
                <p>Username</p>
                <input type="text" />
              </label>
            </div>

            <label>
              <p>Password</p>
              <input type="text" />
            </label>
            <div>
              <button onClick={this.props.Login} type="submit">
                Submit
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

export default connect("", mapDispatchToProp)(Cari);
