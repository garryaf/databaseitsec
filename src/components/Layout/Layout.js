import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Footer from "../Footer/Footer.js";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs.js";

import Dashboard from "../../pages/dashboard/Dashboard.js";
import Typography from "../../pages/core/typography/Typography.js";
import Colors from "../../pages/core/colors/Colors.js";
import Grid from "../../pages/core/grid/Grid.js";
import Notifications from "../../pages/notifications/Notifications.js";
import Tables from "../../pages/tables/Tables.js";
import Alerts from "../../pages/uielements/alerts/Alerts.js";
import Badges from "../../pages/uielements/badges/Badges.js";
import Charts from "../../pages/uielements/charts/Charts.js";
import Icons from "../../pages/uielements/icons/IconsPage.js";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

import s from "./Layout.module.scss";

class Layout extends React.Component {
  static propTypes = {
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarOpened: false,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.wrap}>
          <Header />
          <Sidebar />
          <main className={s.content}>
            <Breadcrumbs url={this.props.location.pathname} />
            <Switch>
              <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} />
              <Route path="/template/dashboard" exact component={Dashboard}/>
              <Route path="/template/core" exact render={() => <Redirect to={"/template/core/typography"} />} />
              <Route path="/template/core/typography" exact component={Typography} />
              <Route path="/template/core/colors" exact component={Colors} />
              <Route path="/template/core/grid" exact component={Grid} />
              <Route path="/template/typography" exact component={Typography} />
              <Route path="/template/tables" exact component={Tables} />
              <Route path="/template/notifications" exact component={Notifications} />
              <Route path="/template/ui-elements" exact render={() => <Redirect to={"/template/ui-elements/charts"} />} />
              <Route path="/template/ui-elements/alerts" exact component={Alerts} />
              <Route path="/template/ui-elements/badges" exact component={Badges} />
              <Route path="/template/ui-elements/charts" exact component={Charts} />
              <Route path="/template/ui-elements/icons" exact component={Icons} />
              <Route path="/template/ui-elements/maps" exact component={Maps} />
              <Route path='*' exact render={() => <Redirect to="/error" />} />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
