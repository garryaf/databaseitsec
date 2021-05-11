import React, { useState } from 'react';
import classnames from 'classnames';
import {
  Row,
  Col,
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget.js';
import Notification from '../../../components/Notification/Notification.js';

const notificationTypes = ["info", "success", "warning", "error"];

export default function Alerts() {

  return (
    <div>
      <Row>
        <Col>
          <Row>
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Alert Messages
                </div>
                <p className="mb-3">
                  Alerts are available for any length of text, as well as an optional dismiss button.
                </p>
                {notificationTypes.map((notification, index) => (
                  <Notification
                    key={index}
                    type={notification}
                    withIcon
                  />
                ))}
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">
                  Transparent Alerts
                </div>
                <p className="mb-3">
                  Alerts are available for any length of text, as well as an optional dismiss button.
                </p>
                {notificationTypes.map((notification, index) => (
                  <Notification
                    key={index}
                    type={notification}
                    transparent
                  />
                ))}
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4 gutter">
            <Col>

            </Col>
            <Col>

            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
