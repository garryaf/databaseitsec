import React from 'react';
import {
  Col,
  Row,
  Table,
  Button
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget.js';
import s from './Grid.module.scss';

export default function Grid() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4 gutter">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">How It Works</div>
                <p className="mb-3">
                  Bootstrap’s grid system uses a series of containers, rows, and columns to layout
                  and align content. It’s built with flexbox and is fully responsive. Below is an
                  example and an in-depth look at how the grid comes together.
                </p>
                <div>
                  <Row>
                    <Col>
                      <Row className="mb-4">
                        <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-primary text-center text-white">One of three columns</div>
                        </Col>
                        <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-primary text-center text-white">One of three columns</div>
                        </Col>
                        <Col xs={12} sm={4}>
                          <div className="p-3 body-1 bg-primary text-center text-white">One of three columns</div>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-danger text-center text-white">100% container width column</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <pre className="mb-0 p-3 bg-light border-0 w-100 h-100">
                    <code className="text-danger bd-light">{'<Container>\n'}</code>
                    <code className="text-success">{'  <Row>\n'}</code>
                    <code className="text-primary">{'    <Col>\n'}</code>
                    <code>{'      One of three columns\n'}</code>
                    <code className="text-primary">{'    </Col>\n'}</code>
                    <code className="text-primary">{'    <Col>\n'}</code>
                    <code>{'      One of three columns\n'}</code>
                    <code className="text-primary">{'    </Col>\n'}</code>
                    <code className="text-primary">{'    <Col>\n'}</code>
                    <code>{'      One of three columns\n'}</code>
                    <code className="text-primary">{'    </Col>\n'}</code>
                    <code className="text-success">{'  </Row>\n'}</code>
                    <code className="text-success">{'  <Row>\n'}</code>
                    <code className="text-primary">{'    <Col>'}</code>
                    <code>{'100% container width column'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-success">{'  </Row>\n'}</code>
                    <code className="text-danger">{'</Container>'}</code>
                  </pre>
                </div>
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">Equal Width</div>
                <p className="mb-3">
                  For example, here are two grid layouts that apply to every device and viewport,
                  from xs to xl. Add any number of unit-less classes for each breakpoint you
                  need and every column will be the same width.
                </p>
                <div>
                  <Row className="mb-3">
                    <Col>
                      <Row className="mb-4">
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-warning text-center text-white">1 of 1</div>
                        </Col>
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-warning text-center text-white">1 of 2</div>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-success text-center text-white">1 of 1</div>
                        </Col>
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-success text-center text-white">1 of 2</div>
                        </Col>
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-success text-center text-white">1 of 3</div>
                        </Col>
                        <Col className="mb-3 mb-sm-0">
                          <div className="p-3 body-1 bg-success text-center text-white">1 of 4</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <pre className="mb-0 p-3 bg-light border-0 w-100 h-100">
                    <code className="text-danger bd-light">{'<Container>\n'}</code>
                    <code className="text-success">{'  <Row>\n'}</code>
                    <code className="text-primary">{'    <Col>\n'}</code>
                    <code className="text-success">{'      <Row>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 1'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 2'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-success">{'      </Row>\n'}</code>
                    <code className="text-success">{'      <Row>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 1'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 2'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 3'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-primary">{'        <Col>'}</code>
                    <code>{'1 of 4'}</code>
                    <code className="text-primary">{'</Col>\n'}</code>
                    <code className="text-success">{'      </Row>\n'}</code>
                    <code className="text-primary">{'    </Col>\n'}</code>
                    <code className="text-success">{'  </Row>\n'}</code>
                    <code className="text-danger">{'</Container>'}</code>
                </pre>
              </Widget>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Widget className="widget-p-md">
                <div className="headline-2 mb-2">Grid Options</div>
                <p className="mb-3">
                  While Bootstrap uses <code>em</code> or <code>rem</code> for defining
                  most sizes, <code>px</code> are used for
                  grid breakpoints and container widths. This is because the viewport width is in
                  pixels and does not change with the font size. See how aspects of the Bootstrap grid
                  system work across multiple devices with a handy table.
                </p>
              </Widget>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">

            </Col>
            <Col xs={12} lg={6}>

            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
