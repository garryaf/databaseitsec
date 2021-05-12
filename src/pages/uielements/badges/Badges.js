import React from "react";
import {
  Col,
  Row,
  Badge
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import s from "./Badges.module.scss";

export default function Badges() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md"><div> Widget </div></Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
