import React from "react";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import s from "./Buttons.module.scss";
import Widget from "../../../components/Widget/Widget.js";

export default function Buttons() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Default Buttons</div>
                <div className="mt-2 mb-3">Bootstrap includes predefined button styles, each serving its own semantic purpose.</div>
                <div className={s.buttonsBlock}>
                  <Button color="primary" className="btn-rounded-f">Primary</Button>
                  <Button className="btn-rounded-f">Default</Button>
                  <Button color="secondary-red" className="btn-rounded-f">Sec. Red</Button>
                  <Button color="secondary-yellow" className="btn-rounded-f">Sec. Yellow</Button>
                  <Button color="secondary-cyan" className="btn-rounded-f">Sec. Cyan</Button>
                  <Button color="success" className="btn-rounded-f">Success</Button>
                  <Button color="info" className="btn-rounded-f">Info</Button>
                  <Button color="warning" className="btn-rounded-f">Warning</Button>
                  <Button color="danger" className="btn-rounded-f">Danger</Button>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Outlined Buttons</div>
                <div className="mt-2 mb-3">Add any icon to make the badge more enjoyable and informative. If no color is specified <code>default</code> will be used.</div>
                <div className={s.buttonsBlock}>
                  <Button outline color="primary" className="btn-rounded-f">Primary</Button>
                  <Button outline className="btn-rounded-f">Default</Button>
                  <Button outline color="secondary-red" className="btn-rounded-f">Sec. Red</Button>
                  <Button outline color="secondary-yellow" className="btn-rounded-f">Sec. Yellow</Button>
                  <Button outline color="secondary-cyan" className="btn-rounded-f">Sec. Cyan</Button>
                  <Button outline color="success" className="btn-rounded-f">Success</Button>
                  <Button outline color="info" className="btn-rounded-f">Info</Button>
                  <Button outline color="warning" className="btn-rounded-f">Warning</Button>
                  <Button outline color="danger" className="btn-rounded-f">Danger</Button>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges</div>
                <div className="mt-2 mb-3">Add <code>badge-inverse-"*"</code> class to change the style of a badge. If no color is specified <code>default</code> will be used.</div>
                <div >

                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges with icons</div>
                <div className="mt-2 mb-3">Add <code>badge-inverse-"*"</code> class to change the style of a badge. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable.</div>
                <div >

                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Rounded Contextual Badges</div>
                <div className="mt-2 mb-3">Add modifier <code>color="*"</code> property to change the appearance of a badge. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable. If no color is specified <code>default</code> will be used.</div>
                <div >

                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Rounded Contextual Badges with icons</div>
                <div className="mt-2 mb-3">Add any icon to make the badge more enjoyable and informative. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable.</div>
                <div >

                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
