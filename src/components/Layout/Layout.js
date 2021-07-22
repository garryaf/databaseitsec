import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";
import Footer from "../Footer/Footer.js";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs.js";

import Dashboard from "../../pages/dashboard/Dashboard.js";
import Profile from "../../pages/profile/Profile";
import UserListPage from "../Users/list/UsersListPage.js";
import UserViewPage from "../Users/view/UsersViewPage.js";
import ChangePasswordFormPage from "../Users/changePassword/ChangePasswordFormPage";
import UsersFormPage from "../Users/form/UsersFormPage";
import Typography from "../../pages/core/typography/Typography.js";
import Colors from "../../pages/core/colors/Colors.js";
import Grid from "../../pages/core/grid/Grid.js";
import Notifications from "../../pages/uielements/notifications/Notifications.js";
import Tables from "../../pages/tables/Tables.js";
import Alerts from "../../pages/uielements/alerts/Alerts.js";
import Badges from "../../pages/uielements/badges/Badges.js";
import Buttons from "../../pages/uielements/buttons/Buttons.js";
import Cards from "../../pages/uielements/cards/Cards.js";
import Carousel from "../../pages/uielements/carousel/Carousel.js";
import Charts from "../../pages/uielements/charts/Charts.js";
import Jumbotron from "../../pages/uielements/jumbotron/Jumbotron.js";
import Icons from "../../pages/uielements/icons/IconsPage.js";
import Lists from "../../pages/uielements/lists/Lists.js";
import Navbars from "../../pages/uielements/navbar/Navbars.js";
import Navs from "../../pages/uielements/navs/Navs.js";
import Modal from "../../pages/uielements/modal/Modal.js";
import Progress from "../../pages/uielements/progress/Progress";
import Popover from "../../pages/uielements/popovers/Popovers";
import Elements from "../../pages/forms/elements/Elements";
import Validation from "../../pages/forms/validation/Validation";
import Wizard from "../../pages/forms/wizard/Wizard";
import BarCharts from "../../pages/charts/bar/BarCharts";
import LineCharts from "../../pages/charts/line/LineCharts";
import PieCharts from "../../pages/charts/pie/PieCharts";
import OtherCharts from "../../pages/charts/other/OtherCharts";
import Maps from "../../pages/maps/google/GoogleMapPage.js";
import VectorMap from "../../pages/maps/vector/Vector.js";
import Calendar from "../../pages/extra/calendar/Calendar";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

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
              <Route path="/template/user" exact render={() => <Redirect to={"/template/user/profile"} />}/>
              <Route path="/template/user/profile" exact component={Profile} />
              <Route path="/admin" exact render={() => <Redirect to="/admin/users" />} />
              <Route path="/admin/users" exact component={UserListPage} />
              {/*<Route path="/admin/users/new" exact component={UserFormPage} />*/}
              {/*<Route path="/admin/users/:id/edit" exact component={UserFormPage} />*/}
              <Route path="/admin/users/:id" exact component={UserViewPage} />
              <Route path="/template/password" exact component={ChangePasswordFormPage} />
              <Route path="/template/edit" exact component={UsersFormPage} />
              <Route path="/template/core" exact render={() => <Redirect to={"/template/core/typography"} />} />
              <Route path="/template/core/typography" exact component={Typography} />
              <Route path="/template/core/colors" exact component={Colors} />
              <Route path="/template/core/grid" exact component={Grid} />
              <Route path="/template/calendar" exact component={Calendar} />
              <Route path="/template/tables" exact component={Tables} />
              <Route path="/template/ui-elements" exact render={() => <Redirect to={"/template/ui-elements/charts"} />} />
              <Route path="/template/ui-elements/alerts" exact component={Alerts} />
              <Route path="/template/ui-elements/badges" exact component={Badges} />
              <Route path="/template/ui-elements/buttons" exact component={Buttons} />
              <Route path="/template/ui-elements/cards" exact component={Cards} />
              <Route path="/template/ui-elements/carousel" exact component={Carousel} />
              <Route path="/template/ui-elements/jumbotron" exact component={Jumbotron} />
              <Route path="/template/ui-elements/icons" exact component={Icons} />
              <Route path="/template/ui-elements/lists" exact component={Lists} />
              <Route path="/template/ui-elements/modal" exact component={Modal} />
              <Route path="/template/ui-elements/navbars" exact component={Navbars} />
              <Route path="/template/ui-elements/navs" exact component={Navs} />
              <Route path="/template/ui-elements/notifications" exact component={Notifications} />
              <Route path="/template/ui-elements/progress" exact component={Progress} />
              <Route path="/template/ui-elements/popovers" exact component={Popover} />
              <Route path="/template/forms" exact render={() => <Redirect to={"/template/forms/elements"}/>} />
              <Route path="/template/forms/elements" exact component={Elements} />
              <Route path="/template/forms/validation" exact component={Validation} />
              <Route path="/template/forms/wizard" exact component={Wizard} />
              <Route path="/template/charts" exact render={() => <Redirect to={"/template/charts/other"}/>} />
              <Route path="/template/charts/line" exact component={LineCharts} />
              <Route path="/template/charts/pie" exact component={PieCharts} />
              <Route path="/template/charts/bar" exact component={BarCharts} />
              <Route path="/template/charts/other" exact component={OtherCharts} />
              <Route path="/template/maps" exact render={() => <Redirect to={"/template/maps/google"}/>} />
              <Route path="/template/maps/google" exact component={Maps} />
              <Route path="/template/maps/vector" exact component={VectorMap} />
              <Route path="/template/extra" exact render={() => <Redirect to={"/template/extra/calendar"}/>} />
              <Route path="/template/extra/charts" exact component={Charts} />
              <Route path="/template/extra/login" exact component={Login} />
              <Route path="/template/extra/register" exact component={Register} />
              <Route path="/register" exact component={Register} />
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
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
