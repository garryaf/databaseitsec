import React from "react";
import {
  Col,
  Row
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import s from "./Lists.module.scss";

export default function Lists() {

  return (
    <div>
      <Row>
        <Col>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Simple List Group</div>
                <div className="mt-2 mb-3">
                  The most basic list group is an unordered list with list items and the proper classes.
                  Build upon it with the options that follow, or with your own CSS as needed.
                </div>
                <ul className="list-group">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Disabled List Items</div>
                <div className="mt-2 mb-3">Add <code>.disabled</code> to a <code>.list-group-item</code> to make it appear disabled.</div>
                <ul className="list-group">
                  <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges</div>
                <div className="mt-2 mb-3">Add <code>badge-inverse-"*"</code> class to change the style of a badge. If no color is specified <code>default</code> will be used.</div>

              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Inverted Badges with icons</div>
                <div className="mt-2 mb-3">Add <code>badge-inverse-"*"</code> class to change the style of a badge. Add <code>pill</code> property to make badges rounded. Add icon to make it more informative and enjoyable.</div>

              </Widget>            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="headline-2">Links List</div>
                <div className="mt-2 mb-3">Use <code>&lt;a&gt;</code> to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>.</div>
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action active" aria-current="true">The current link item</a>
                  <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                  <a href="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">A disabled link item</a>
                </div>
              </Widget>
            </Col>
            <Col xs={12} md={6} className="mt-4 mt-md-0">
              <Widget className="widget-p-md">
                <div className="headline-2">Buttons List</div>
                <div className="mt-2 mb-3">Use <code>&lt;button&gt;</code> to create actionable list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>.</div>
                <div className="list-group">
                  <button type="button" className="list-group-item list-group-item-action active" aria-current="true">The current button</button>
                  <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                  <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
