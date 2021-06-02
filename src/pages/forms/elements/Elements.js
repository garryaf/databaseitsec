import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
  CustomInput,
  UncontrolledTooltip,
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import s from "./Elements.module.scss"

export default function Elements() {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)
  const [dropdownValue, setDropdownValue] = useState('Another Value')
  const changeValueDropdown = (e) => {
    setDropdownValue(e.currentTarget.textContent)
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Inputs</div>
                <FormGroup>
                  <Form>
                    <legend className="mt-2"><strong>Horizontal</strong> form</legend>
                    <FormGroup row>
                      <Label md={3} for="normal-field" className="text-md-right">Normal field</Label>
                      <Col md={9}>
                        <Input type="text" id="normal-field" placeholder="May have placeholder"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="hint-field" className="d-flex flex-column text-md-right">
                        Label hint
                        <span className="label muted">Some help text</span>
                      </Label>
                      <Col md={9}>
                        <Input type="text" name="password" id="hint-field"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="tooltip-enabled" className="text-md-right">Tooltip Enabled</Label>
                      <Col md={9}>
                        <Input type="text" id="tooltip-enabled" placeholder="Hover on me..."/>
                        <UncontrolledTooltip target="tooltip-enabled" placement="top">Some explanation text here</UncontrolledTooltip>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} for="disabled-input" className="text-md-right">Disabled input</Label>
                      <Col md={9}>
                        <Input
                          type="text" id="disabled-input"
                          disabled="disabled" value="Default value"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="max-length">Max length</Label>
                      <Col md={9}>
                        <Input
                          type="text" id="max-length" maxLength="3"
                          placeholder="Max length 3 characters"
                        />
                        <UncontrolledTooltip placement="top" target="max-length">
                          You cannot write more than 3 symbols.
                        </UncontrolledTooltip>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="prepended-input">Prepended input</Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-user" /></span></InputGroupAddon>
                          <Input id="prepended-input" type="test" bsSize="16" placeholder="Username" />
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="password-field">Password</Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend"><span className="input-group-text"><i className="fa fa-lock" /></span></InputGroupAddon>
                          <Input
                            id="password-field" type="password"
                            placeholder="Password"
                          />
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="appended-input">Appended input</Label>
                      <Col md={9}>
                        <InputGroup>
                          <Input id="appended-input" bsSize="16" type="text" />
                          <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="combined-input">
                        Combined
                      </Label>
                      <Col md={9}>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                          <Input id="combined-input" bsSize="16" type="text" />
                          <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} className="text-md-right" for="transparent-input">
                        Append Transparent
                      </Label>
                      <Col md={9}>
                        <InputGroup className="input-group-transparent">
                          <Input id="transparent-input" type="text" />
                          <InputGroupAddon addonType="append"><span className="input-group-text"><i className="fa fa-camera" /></span></InputGroupAddon>
                        </InputGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} />
                      <Col md={9}>
                        <Button color="primary" type="submit" className="mr-3">Save Changes</Button>
                        <Button color="default">Cancel</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </FormGroup>
              </Widget>
            </Col>
            <Col xs={12} lg={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Prepended And Appended Inputs</div>
                <FormGroup>
                  <Form>
                    <legend className="mt-2"><strong>Default</strong> form</legend>
                    <Row>
                      <Col md={10}>
                        <FormGroup>
                          <Label for="search-input1">
                            Search type input
                          </Label>
                          <InputGroup>
                            <Input type="text" id="search-input1" />
                            <InputGroupAddon addonType="append">
                              <Button color="default">Search</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="bar">
                            Whole bar appended
                          </Label>
                          <InputGroup>
                            <Input type="text" id="bar" />
                            <InputGroupAddon addonType="append">
                              <ButtonGroup>
                                <Button color="secondary-red" className="px-3 border-radius-0"><i className={`fa fa-pencil ${s.btnIcon}`} /></Button>
                                <Button color="secondary-yellow" className="px-3"><i className={`fa fa-plus ${s.btnIcon}`} /></Button>
                                <Button color="success" className="px-3"><i className={`fa fa-refresh ${s.btnIcon}`} /></Button>
                              </ButtonGroup>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="dropdown-appended">
                            Actions dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="dropdown-appended" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <DropdownToggle caret color="success" className="border-radius-left-0">
                                  Action
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem>Action</DropdownItem>
                                  <DropdownItem>Another action</DropdownItem>
                                  <DropdownItem>Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Separated link</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Label for="segmented-dropdown">
                            Segmented dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="segmented-dropdown" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <Button color="warning" className="border-radius-left-0 px-3">Action</Button>
                                <DropdownToggle
                                  caret color="warning"
                                  className="dropdown-toggle-split opacity-75 px-3"
                                />
                                <DropdownMenu>
                                  <DropdownItem>Action</DropdownItem>
                                  <DropdownItem>Another action</DropdownItem>
                                  <DropdownItem>Something else here</DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>Separated link</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="label muted">Anything can be appended to the right</span>
                        </FormGroup>
                        <FormGroup>
                          <Label for="type-dropdown-appended">
                            Types dropdown
                          </Label>
                          <InputGroup>
                            <Input type="text" id="type-dropdown-appended" />
                            <InputGroupAddon addonType="append">
                              <UncontrolledButtonDropdown>
                                <DropdownToggle
                                  caret color="primary"
                                  className="px-3 dropdown-toggle-split border-radius-left-0"
                                >
                                  {dropdownValue}
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem >
                                    Another type
                                  </DropdownItem>
                                  <DropdownItem >
                                    Type one
                                  </DropdownItem>
                                  <DropdownItem >
                                    Next type
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </InputGroupAddon>
                          </InputGroup>
                          <span className="label muted">
                            You can select some type of a field just right in the place.
                          </span>

                        {/*  <FormGroup>*/}
                        {/*    <UncontrolledButtonDropdown>*/}
                        {/*      <DropdownToggle caret>*/}
                        {/*        Dropdown*/}
                        {/*      </DropdownToggle>*/}
                        {/*      <DropdownMenu>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem>Action</DropdownItem>*/}
                        {/*        <DropdownItem divider />*/}
                        {/*        <DropdownItem>Another Action</DropdownItem>*/}
                        {/*      </DropdownMenu>*/}
                        {/*    </UncontrolledButtonDropdown>*/}
                        {/*  </FormGroup>*/}


                        </FormGroup>
                        <FormGroup className="mb-4">
                          <Label for="no-borders-input">
                            Transparent input
                          </Label>
                          <Input
                            type="text" placeholder="Search Dashboard" id="no-borders-input"
                            className="no-border bg-light-gray"
                          />
                          <span className="label muted">
                            With <code>.bg-gray-lighter</code>. White by default.
                          </span>
                        </FormGroup>
                        <FormGroup row>
                          <Col>
                            <Button color="primary" type="submit" className="mr-3">Save Changes</Button>
                            <Button color="default">Cancel</Button>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </FormGroup>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Default Buttons</div>
                <div className="mt-2 mb-3">
                  Use any of the available button classes to quickly create a styled button. Semantically distinguishable beauty.
                </div>
                <div>

                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Default Buttons</div>
                <div className="mt-2 mb-3">
                  This is the default button style, but you can make them more rounded.
                  Use whichever button shape you like best.
                </div>
                <div>

                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Buttons With Icons</div>
                <div className="mt-2 mb-3">
                  Do more with icons! Icons or Icon components may be used in buttons.
                  Let your buttons be more informative and enjoyable!
                </div>
                <div>

                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Buttons With Icons</div>
                <div className="mt-2 mb-3">
                  In need of a button, but not the hefty background colors they bring?
                  Use <code>outline</code> property, add icon. Style the buttons however you like!
                </div>
                <div>

                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
