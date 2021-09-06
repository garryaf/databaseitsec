import React, { useState } from "react";
import {
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import SofiaLogo from "../../../components/Icons/SidebarIcons/SofiaLogo";
import MenuIcon from "../../../components/Icons/HeaderIcons/MenuIcon";
import SearchBarIcon from "../../../components/Icons/HeaderIcons/SearchBarIcon";

export default function Navbars() {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Simple Navbar Example</div>
                <div className="mt-2 mb-3 body-3 muted">
                  <p>Navbar is Bootstrap’s powerful, responsive navigation header.
                    Includes support for branding, navigation, and more, including support for collapse plugin.</p>
                  <ul>
                    <li>Navbars require a wrapping <code>&lt;Navbar&gt;</code> with <code>expand=&quot;*&quot;</code> for
                      responsive collapsing and color scheme classes.</li>
                    <li>Navbars and their contents are fluid by default. Use optional containers
                      to limit their horizontal width.</li>
                  </ul>
                </div>
                <div>
                  <Navbar className="p-3 overflow-auto" color="default" dark expand="md">
                    <NavbarBrand href="/">Navbar</NavbarBrand>
                    <NavbarToggler className="ml-auto"/>
                    <Collapse navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Navbar With Brand Logo</div>
                <div className="mt-2 mb-3 body-3 muted">
                  The <code>.navbar-brand</code> can be applied to most elements, but an anchor works best,
                  as some elements might require utility classes or custom styles.
                  <br/>
                  Adding images to the <code>.navbar-brand</code> will likely always require custom styles or utilities to properly size.
                  Here are the example to demonstrate.
                  <br/>
                  The <code>&#60;NavbarBrand&#62;</code> component best suits for displaying your company, product, or project name.
                </div>
                <div>
                  <Navbar className="p-3 overflow-auto" color="light" light expand="md">
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      <SofiaLogo/>
                      <span className="headline-2 ml-2 font-weight-bold">SOFIA</span>
                    </NavbarBrand>
                    <NavbarToggler className="ml-auto"/>
                    <Collapse navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Colorful Navbar Examples</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Theming the navbar has never been easier thanks to the combination of theming classes and background-color utilities.
                  Choose from <code>.navbar-light</code> for use with light background colors, or <code>.navbar-dark</code> for dark background colors.
                  Then, customize with <code>.bg-*</code> utilities.
                </div>
                <div className="mb-3">
                  <Navbar className="p-3 overflow-auto" color="primary" dark expand="md">
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      Navbar
                    </NavbarBrand>
                    <NavbarToggler className="ml-auto"/>
                    <Collapse navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
                <div className="mb-3">
                  <Navbar className="p-3 overflow-auto" color="success" dark expand="md">
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      Navbar
                    </NavbarBrand>
                    <NavbarToggler className="ml-auto"/>
                    <Collapse navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
                <div>
                  <Navbar className="p-3 overflow-auto" color="secondary-red" dark expand="md">
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      Navbar
                    </NavbarBrand>
                    <NavbarToggler className="ml-auto"/>
                    <Collapse navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink disabled>Disabled</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Navbar With Different Components</div>
                <div className="mt-2 mb-3 body-3 muted">
                  Place the <code>&#60;NavbarToggler&#62;</code> after <code>&#60;NavbarBrand&#62;</code> to have it appear on the right (typical setup).
                  Reverse the order to have it appear on the left.
                </div>
                <div className="mb-3 body-3 muted">Place various form controls and components within a navbar.</div>
                <div className="mb-3">
                  <Navbar className="p-3 overflow-auto" color="light" light>
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      <SofiaLogo/>
                      <span className="headline-2 ml-2 font-weight-bold">SOFIA</span>
                    </NavbarBrand>
                    <Form className="d-none d-sm-block" inline>
                      <FormGroup>
                        <InputGroup>
                          <Input id="search-input" placeholder="Search Dashboard" className="focus no-border"/>
                          <Button color="primary" className="ml-3" outline>Search</Button>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Navbar>
                </div>
                <div className="mb-3">
                  <Navbar className="p-3 overflow-auto" color="light" light>
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      <SofiaLogo/>
                      <span className="headline-2 ml-2 font-weight-bold">SOFIA</span>
                    </NavbarBrand>
                    <Form className="d-none d-sm-block" inline>
                      <FormGroup>
                        <InputGroup>
                          <Input id="search-input" placeholder="Search Dashboard" className='focus no-border'/>
                          <InputGroupAddon addonType="prepend">
                            <span className="d-flex align-self-center pr-3">
                              <SearchBarIcon/>
                            </span>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Navbar>
                </div>
                <div>
                  <Navbar className="p-3 overflow-auto" color="light" light>
                    <NavbarBrand className="d-flex align-items-center" href="/">
                      <SofiaLogo/>
                      <span className="headline-2 ml-2 font-weight-bold">SOFIA</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" ><MenuIcon/></NavbarToggler>
                    <Collapse isOpen={!collapsed} navbar>
                      <Nav navbar>
                        <NavItem>
                          <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Features</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink>Components</NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
