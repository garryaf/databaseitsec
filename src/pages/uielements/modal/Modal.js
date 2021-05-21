import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  FormText,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import CustomModal from "../../../components/CustomModal/CustomModal";
import Widget from "../../../components/Widget/Widget";
import s from "./Modal.module.scss";

export default function Modal() {

  return (
    <div>
      <Row>
        <Col xs={12} md={6}>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Simple Modals</div>
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
                  buttonColor="success"
                  scrollable
                />
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Live Demo Modals</div>
                <div className="mt-2 mb-3">
                  Below is a live demo followed by example HTML and JavaScript.
                  For example, a modal with form elements and a modal with a  Bootstrap's grid inside.
                </div>
                <CustomModal
                  buttonLabel="Open Form Dialog"
                  buttonColor="warning"
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
                <CustomModal
                  buttonLabel="Grid Container Inside"
                  buttonColor="danger"
                  size="lg"
                >
                  <Container>
                    <Row>
                      <Col className={s.column}>
                        <div className="headline-1">Column</div>
                      </Col>
                      <Col className={s.column}>
                        <div className="headline-1">Column</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className={s.column}>
                        <div className="headline-1">Column</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className={s.column}>
                        <div className="headline-1">Column</div>
                      </Col>
                      <Col className={s.column}>
                        <div className="headline-1">Column</div>
                      </Col>
                    </Row>
                  </Container>
                </CustomModal>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4 mb-md-0">
            <Col className="grid-col-padding">
              <Widget className="widget-p-md">
                <div className="headline-2">Simple List Group</div>
                <div className="mt-2 mb-3">
                  Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>.
                  These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
                  Our default modal without modifier class constitutes the “medium” size modal.
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
                <div className="headline-2">Modal Components</div>
                <div className="mt-2 mb-4">
                  Below is a static modal example. Included are the modal header, modal body (required for padding), and modal footer (optional).
                </div>
                <Widget className="widget-p-md">
                  <div className={s.staticModal}>
                    <div className="d-flex justify-content-between pt-3 px-3">
                      <div className="headline-2">Modal Title</div>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <hr/>
                    <div className="px-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <hr/>
                    <div className={s.buttonsBlock}>
                      <Button color="secondary">Close</Button>
                      <Button color="primary" className="ml-2">Save Changes</Button>
                    </div>
                  </div>
                </Widget>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
