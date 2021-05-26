import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Tooltip,
  Progress,
} from 'reactstrap';
import Widget from "../../../components/Widget/Widget";
import PopoverItem from "../../../components/PopoverItem/PopoverItem";


export default function Popovers() {

  let mock = [
    {
      placement: "top",
      text: "Top",
      color: "primary"
    },
    {
      placement: "bottom",
      text: "Bottom",
      color: "success"
    },
    {
      placement: "left",
      text: "Left",
      color: "warning"
    },
    {
      placement: "right",
      text: "Right",
      color: "danger"
    }
  ]

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Popover Example</div>
                <div className="mt-2 mb-3">
                  Popovers rely on the 3rd party library <a color="primary" href="https://popper.js.org/">Popper.js</a> for positioning.
                  Popovers are opt-in for performance reasons, so you must initialize them yourself.
                </div>
                <div className="d-flex flex-wrap">
                  <PopoverItem
                    className="mr-3 mb-3"
                    id={'Popover1'}
                    color="primary"
                    placement="top"
                    btnLabel="Launch Popover"
                  />
                  <PopoverItem
                    disabled
                    id={'Popover2'}
                    color="primary"
                    btnLabel="Disabled Popover"
                  />
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Tooltip Example</div>
                <div className="mt-2 mb-3">
                  Tooltips rely on the 3rd party library <a color="primary" href="https://popper.js.org/">Popper.js</a> for positioning.
                  Tooltips are opt-in for performance reasons, so you must initialize them yourself.
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Popover Directions</div>
                <div className="mt-2 mb-3">
                  Four options are available: top, right, bottom, and left aligned.
                  Trigger each popover to see where it positioning
                </div>
                <div className="d-flex flex-wrap">
                  {mock.map((item, id) =>
                    <PopoverItem
                      key={id}
                      className="mr-3 mb-3"
                      id={`Popover-${id}`}
                      color={item.color}
                      placement={item.placement}
                      btnLabel={item.text}
                    />
                  )}
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Tooltip Directions</div>
                <div className="mt-2 mb-3">
                  Four options are available: top, right, bottom, and left aligned.
                  Trigger each popover to see where it positioning
                </div>

              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
