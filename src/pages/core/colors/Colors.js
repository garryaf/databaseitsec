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
