import React from "react";
import Header from "../component/Header";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Cari from "./content/Cari";
import Detail from "./content/Detail";
import Login from "./content/Login";

import { connect } from "react-redux";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        {this.props.isLogin ? (
          <Switch>
            <div className="app-content">
              <Route path="/" exact component={Cari} />
              <Route path="/detail/:id">
                <Detail />
              </Route>
            </div>
          </Switch>
        ) : (
          <Login />
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(Main);
