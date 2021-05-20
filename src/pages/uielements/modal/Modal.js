import React from 'react';
import {
  Row,
  Col,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  FormText
} from 'reactstrap';
import CustomModal from "../../../components/CustomModal/CustomModal";
import Widget from "../../../components/Widget/Widget";

export default function Modal() {

  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Live Demo</div>
                <div className="mt-2 mb-3">
                  <p>
                    Toggle a working modal demo by clicking the button below.
                    It will slide down and fade in from the top of the page.
                  </p>
                  <p>
                    If body of modal should be scrollable when content is long just add <code>scrollable</code> property
                  </p>
                </div>
                <CustomModal
                  buttonLabel="Basic Modal"
                  buttonColor="primary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
                <CustomModal
                  buttonLabel="Scrollable Modal"
                  buttonColor="warning"
                  scrollable
                />
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Simple List Group</div>
                <div className="mt-2 mb-3">
                  The most basic
                </div>
                <CustomModal
                  buttonLabel="Open Form Dialog"
                  buttonColor="danger"
                >
                  <Form className="p-4">
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                  </Form>
                </CustomModal>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4 mb-md-0">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Simple List Group</div>
                <div className="mt-2 mb-3">
                  The most basic
                </div>
                <CustomModal
                  buttonLabel="Extra Large Modal"
                  buttonColor="primary"
                  size="xl"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
                <CustomModal
                  buttonLabel="Large Modal"
                  buttonColor="primary"
                  size="lg"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
                <CustomModal
                  buttonLabel="Small Modal"
                  buttonColor="primary"
                  size="sm"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CustomModal>
              </Widget>
            </Col>
        </Row>
        </Col>
        <Col xs={12} md={6}>
          <Row className="gutter" style={{ height: "100%"}}>
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
              <div className="headline-2">Simple List Group</div>
              <div className="mt-2 mb-3">
                The most basic
              </div>
              <div>adsfa</div>
            </Widget></Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
