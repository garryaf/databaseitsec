import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
  UncontrolledButtonDropdown,
  InputGroup,
  InputGroupAddon,
  ButtonGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";
import Formsy from "formsy-react";
import InputValidation from "../../../components/InputValidation/InputValidation";

export default function Validation() {

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Simple Validation</div>
                <Formsy>
                  <fieldset>
                    <legend>
                      By default validation is started only after at least 3 characters have been input.
                    </legend>
                    <FormGroup row>
                      <Label md={3} xs={12} for="basic">Simple required</Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text"
                          id="basic"
                          name="basic"
                          required
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label md={3} xs={12} for="basic-change">Min-length On Change
                        <span className="help-block"> At least 10 </span>
                      </Label>
                      <Col md={9} xs={12}>
                        <InputValidation
                          type="text" id="basic-change"
                          name="basic-change"
                          trigger="change"
                          validations={{ minLength: 10 }}
                          validationError={{
                            minLength: 'This value is too short. It should have 10 characters or more.',
                          }}
                          required
                        />
                      </Col>
                    </FormGroup>
                  </fieldset>
                </Formsy>
              </Widget>
            </Col>
            <Col xs={12} lg={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Formik Validation</div>
                <FormGroup>

                </FormGroup>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
