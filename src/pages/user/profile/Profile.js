import React from "react";
import {
  Col,
  Row,
  Progress,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";

export default function Profile() {

  return(
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={6}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget>
                First Widget
              </Widget>
            </Col>
          </Row>


          <Row className="gutter">

            <Col xs={12} lg={8}>
              <Widget>
                Second Widget
              </Widget>
            </Col>

            <Col className="mt-4 mt-lg-0" xs={12} lg={4}>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget>
                    Third Widget
                  </Widget>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget>
                    Fourth Widget
                  </Widget>
                </Col>
              </Row>
              <Row className="">
                <Col xs={12}>
                  <Widget>
                    Fifth Widget
                  </Widget>
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>

        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={6}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget>
                Sixth Widget
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget>
                Seventh Widget
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12}>
              <Widget>
                Eighth Widget
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
