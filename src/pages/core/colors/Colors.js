import React from 'react';
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Table,
  Label,
  Badge,
} from "reactstrap";
import Dot from '../../../components/Dot/Dot.js';
import Widget from '../../../components/Widget/Widget.js';

import mock from './mock.js';
import s from './Colors.module.scss';

export default function Colors() {
  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">States Colors</div>
                </div>
                <div className="widget-table-overflow">
                  <Table className={`table-striped table-borderless ${s.colorsTable}`} responsive>
                    <thead>
                    <tr>
                      <th>STATE</th>
                      <th>PREVIEW</th>
                      <th>USAGE EXAMPLE</th>
                      <th>HEX Value</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Typography Colors</div>
                </div>
                <Row className="widget-p-md pt-2">
                  <p className="px-3 mb-4">Convey meaning through color with a handful of color utility classes.
                    Includes support for styling links with hover states, too. Use <code>text-*</code> class to fill text.</p>
                  <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                    <div className="mb-3">
                      <p className="headline-1 mb-0 text-primary">Headline 1</p>
                    </div>
                    <div className="mb-3">
                      <p className="headline-2 mb-0 text-secondary-red">Headline 2</p>
                    </div>
                    <div>
                      <p className="headline-3 mb-0 text-success">Headline 2</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div className="mb-3">
                      <p className="body-1 mb-0 text-info">Body 1</p>
                    </div>
                    <div className="mb-3">
                      <p className="body-2 mb-0 text-warning">Body 2</p>
                    </div>
                    <div className="mb-3">
                      <p className="body-3 mb-0 text-secondary-cyan">Body 3</p>
                    </div>
                    <div>
                      <p className="label mb-0 text-danger">Label</p>
                    </div>
                  </Col>
                </Row>
              </Widget>
            </Col>
            <Col xs={12} lg={6}>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Typography Colors</div>
                </div>
                <div className={s.widgetContentBlock}>
                  Content Block
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )

}
