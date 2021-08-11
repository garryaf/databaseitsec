import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";
import { getHistory } from "../index";
import { AdminRoute, UserRoute, AuthRoute } from "../RouteComponents";

import ErrorPage from "../pages/error/ErrorPage.js";

import LayoutComponent from "../components/Layout/Layout.js";
import Login from "../pages/login/Login.js";
import Register from "../pages/register/Register.js";
import DocumentationLayout from "../documentation/DocumentaionLayout";

import "../styles/app.scss";

class App extends React.PureComponent {
  render() {
    if (this.props.loadingInit) {
      return <div/>;
    }

    return (
      <div>
        <ToastContainer/>
        <ConnectedRouter history={getHistory()}>
          <HashRouter>
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/template/dashboard" />} />
              <Route path="/template" exact render={() => <Redirect to="/template/dashboard"/>} />
              <UserRoute
                path="/template"
                dispatch={this.props.dispatch}
                component={LayoutComponent}
              />
              <AdminRoute
                path="/admin"
                currentUser={this.props.currentUser}
                dispatch={this.props.dispatch}
                component={LayoutComponent}
              />
              <Route path="/documentation" exact
                     render={() => <Redirect to="/documentation/getting-started/overview"/>}/>
              <Route path="/documentation" component={DocumentationLayout}/>
              <AuthRoute path="/login" exact component={Login} />
              <AuthRoute path="/register" exact component={Register} />
              <Route path="/error" exact component={ErrorPage} />
              <Redirect from="*" to="/template/dashboard" />
              <Route path='*' exact={true} render={() => <Redirect to="/error" />} />
            </Switch>
          </HashRouter>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loadingInit: state.auth.loadingInit
});

export default connect(mapStateToProps)(App);
