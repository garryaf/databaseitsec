import React, {Component} from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from 'react-router-dom';
import Scrollspy from "./ScrollSpyComponent";

export default class Pages extends Component {
    render() {
        return (
            <Row>
                <Col md={10}>
                    <Breadcrumb>
                        <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
                        <BreadcrumbItem>Documentation</BreadcrumbItem>
                        <BreadcrumbItem active>Pages</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
                <Col lg={9}>
                    <Container id="Auth" className="my-4">
                        <h3>Auth</h3>
                        <p>Auth is a built-in module for an admin template dashboard. It contains all actions and handlers for any token authorization for your application.</p>
                        <p><b>Important note.</b> Credentials validation must be on the server side.</p>
                        <p>Another important part of authentication is <code>PrivateRoute</code> component. That’s how it looks like.</p>
                        <SyntaxHighlighter language='javascript' style={tomorrow}>{'const PrivateRoute = ({ dispatch, component, ...rest }) => {\n' +
                        '    if (!Login.isAuthenticated(localStorage.getItem(\'token\'))) {\n' +
                        '        dispatch(logoutUser());\n' +
                        '        return (<Redirect to=\'/login\'/>)\n' +
                        '    } else {\n' +
                        '        return (\n' +
                        '            <Route {...rest} render={props => (React.createElement(component, props))}/>\n' +
                        '        );\n' +
                        '    }\n' +
                        '};'}</SyntaxHighlighter>
                        <p>We are getting <code>token</code> from local storage, that must be saved in local storage after successful loginUser function completion. Depends on the result of this action, <code>PrivateRoute</code> returns page (react component) or redirect to the login page. If you don’t need login functionality in your app, you can use <code>Route</code> instead of <code>PrivateRoute</code>.</p>
                    </Container>
                    <Container id="Dashboard" className="my-4">
                        <h3>Dashboard</h3>
                        <p>The main screen of any application built on the top of the admin dashboard template. That is more informative pages of all application. There are 2 types of dashboards: analytics and visits.</p>
                        <p>All of this component can be used on any page of the application.</p>
                        <p className="my-2">
                            <Link className="btn btn-primary mr-sm" to="/template/dashboard">Dashboard</Link>
                        </p>
                    </Container>
                </Col>
                <Col lg={3}>
                    <Scrollspy
                        title="PAGES"
                        prefix="pages"
                        ids={[
                            'Auth',
                            'Dashboard'
                        ]} />
                </Col>
            </Row>
        )
    }
}
