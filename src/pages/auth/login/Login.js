import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import config from "../../../config";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import jwt from "jsonwebtoken";
import { loginUser, receiveToken, doInit } from "../../../actions/auth";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import Footer from "../../../components/Footer/Footer";

import loginImage from "../../../assets/loginImage.svg";
import SofiaLogo from "../../../components/Icons/SidebarIcons/SofiaLogo";
import GoogleIcon from "../../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../../components/Icons/AuthIcons/LinkedinIcon.js";

class Login extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!config.isBackend && token) return true;
    if (!token) return;
    const date = new Date().getTime() / 1000;
    const data = jwt.decode(token);
    if (!data) return;
    return date < data.exp;
  };

  constructor(props) {
    super(props);

    this.state = {
      email: 'admin@flatlogic.com',
      password: 'password',
    };

    this.doLogin = this.doLogin.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  doLogin(e) {
    e.preventDefault();
    this.props.dispatch(loginUser({ email: this.state.email, password: this.state.password }));
  }

  changeEmail(event) {
    this.setState( { email: event.target.value });
  }

  changePassword(event) {
    this.setState({ password: event.target.value });
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const token = params.get('token');
    if (token) {
      this.props.dispatch(receiveToken(token));
      this.props.dispatch(doInit());
    }
  }

  signUp() {
    this.props.dispatch(push('/register'));
  }

  render() {

    return (
      <div className="auth-page">
        <Container className="col-12">
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={6} className="left-column">
              <Widget className="widget-auth widget-p-lg">
                <div className="d-flex align-items-center justify-content-between py-3">
                  <p className="auth-header mb-0">Login</p>
                  <div className="logo-block">
                    <SofiaLogo />
                    <p className="mb-0">SOFIA</p>
                  </div>
                </div>
                <div className="auth-info my-2">
                  <p>This is a real app with Node.js backend - use <b>"admin@flatlogic.com / password"</b> to login!</p>
                </div>
                <form onSubmit={this.doLogin}>
                  <FormGroup className="my-3">
                    <FormText>Email</FormText>
                    <Input id="email" className="input-transparent pl-3" value={this.state.email} onChange={this.changeEmail} type="email" required name="email" placeholder="Email" />
                  </FormGroup>
                  <FormGroup  className="my-3">
                    <div className="d-flex justify-content-between">
                      <FormText>Password</FormText>
                      <Link to="/error">Forgot password?</Link>
                    </div>
                    <Input id="password" className="input-transparent pl-3" value={this.state.password} onChange={this.changePassword} type="password" required name="password" placeholder="Password"/>
                  </FormGroup>
                  <div className="bg-widget d-flex justify-content-center">
                    <Button className="rounded-pill my-3" type="submit" color="secondary-red">Login</Button>
                  </div>
                  <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                  <div className="d-flex align-items-center my-3">
                    <p className="social-label mb-0">Login with:</p>
                    <div className="socials">
                      <a href="https://flatlogic.com/" target = "_blank" rel = "noopener noreferrer">
                        <GoogleIcon />
                      </a>
                      <a href="https://twitter.com/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                        <TwitterIcon />
                      </a>
                      <a href="https://www.facebook.com/flatlogic" target = "_blank" rel = "noopener noreferrer">
                        <FacebookIcon />
                      </a>
                      <a href="https://github.com/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                        <GithubIcon />
                      </a>
                      <a href="https://www.linkedin.com/company/flatlogic/" target = "_blank" rel = "noopener noreferrer">
                        <LinkedinIcon />
                      </a>
                    </div>
                  </div>
                  <Link to="/register">Don’t have an account? Sign Up here</Link>
                </form>
              </Widget>
            </Col>
            <Col xs={0} lg={6} className="right-column">
              <div>
                <img src={loginImage} alt="Error page" />
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
