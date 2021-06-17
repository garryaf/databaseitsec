import React, { useState } from "react";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import {
  Col,
  Row,
  Button,
  Label,
  Input,
  Card,
  CardBody,
  ButtonGroup,
  ListGroup,
  FormGroup,
  ListGroupItem,
} from "reactstrap";
import {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize
} from "../../../actions/calendar";
import "react-big-calendar/lib/addons/dragAndDrop/styles.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Widget from "../../../components/Widget/Widget";
import s from "./Calendar.module.scss";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);
const eventColors = {
  business: "bg-success",
  flatlogic: "bg-warning",
  personal: "bg-danger",
  holiday: "bg-primary"
}


class CalendarApp extends React.Component {

  static getDerivedStateFromProps() {
    return {}
  }

  constructor(props) {
    super();
    this.state = {
      events: [],
      views: {
        month: true,
        week: true,
        day: true
      },
      eventInfo: null
    }
  }

  render() {
    const { events, views, sidebar } = this.state;

    return (
      <div>
        <Row className="gutter mb-4">
          <Col xs={12} lg={9}>
            <Widget className="widget-p-md">
              <DragAndDropCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                resourceAccessor="url"
                views={views}
                popup={true}
              />
            </Widget>
          </Col>
          <Col xs={12} lg={3} className="d-none d-lg-block">
            <Widget className="widget-p-md">
              <div className="headline-2 mb-1">Calendars</div>
              <div className="body-3 muted mb-4">Select the calendar whose events you want to see</div>
              <ListGroup className="mb-4 ml-1">
                <div className="checkbox abc-checkbox-primary pl-3">
                  <Input
                    id="checkbox0"
                    type="checkbox"
                    className="styled"
                    checked
                  />
                  <Label htmlFor="checkbox0" className="body-3">View All</Label>
                </div>
                <div className="checkbox abc-checkbox-warning pl-3">
                  <Input
                    id="checkbox1"
                    type="checkbox"
                    className="styled"
                    checked
                  />
                  <Label htmlFor="checkbox1" className="body-3">Flatlogic</Label>
                </div>
                <div className="checkbox abc-checkbox-info pl-3">
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    className="styled"
                    checked
                  />
                  <Label htmlFor="checkbox2" className="body-3">Personal</Label>
                </div>
                <div className="checkbox abc-checkbox-danger pl-3">
                  <Input
                    id="checkbox3"
                    type="checkbox"
                    className="styled"
                    checked
                  />
                  <Label htmlFor="checkbox3" className="body-3">Holiday</Label>
                </div>
                <div className="checkbox abc-checkbox-success pl-3">
                  <Input
                    id="checkbox4"
                    type="checkbox"
                    className="styled"
                    checked
                  />
                  <Label htmlFor="checkbox4" className="body-3">Business</Label>
                </div>
              </ListGroup>
              <div className="mt-3 d-flex justify-content-center">
                <Button className="btn-rounded btn-secondary-red body-2">
                  Add Event
                </Button>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.calendar
  }
}

export default connect(mapStateToProps, {
  fetchEvents,
  handleSidebar,
  addEvent,
  handleSelectedEvent,
  updateEvent,
  updateDrag,
  updateResize
})(CalendarApp)















// <div className="checkbox checkbox-primary">
//   <input
//     id="checkbox0"
//     type="checkbox"
//     className="styled"
//     checked={this.state.checkboxes[0]}
//     onChange={(event) =>
//       this.changeCheck(event, "checkboxes", 0)
//     }
//   />
//   <label htmlFor="checkbox0" />
// </div>
