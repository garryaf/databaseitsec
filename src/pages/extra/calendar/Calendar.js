import React, { useState } from "react";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import AddEventButton from "./components/AddEventButton";
import AddEventSidebar from "./components/AddEventSidebar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import {
  Col,
  Row,
  Button,
  Label,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
import calendarImg from "../../../assets/calendarImg.svg";

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

const Toolbar = (props) => {

  // const [dropdownLabel, setDropdownLabel] = useState('Infinity')
  //
  // const monthChanger = (e) => {
  //   // (() => {props.onView("month")})();
  //   props.onView("month");
  //   changeDropdown(e);
  // }
  //
  // const changeDropdown = (e) => {
  //   setDropdownLabel(e.currentTarget.textContent)
  // }


  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex flex-row align-items-center">
        <Button
          className="calendar-arrow-icon"
          color="link"
          onClick={() => props.onNavigate("PREV")}
        >
          <i className="fa fa-angle-left" aria-hidden="true" size={12}></i>
        </Button>
        <div className="headline-2">
          {props.label}
        </div>
        <Button
          className="calendar-arrow-icon"
          color="link"
          onClick={() => props.onNavigate("NEXT")}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Button>
      </div>
      <div className="d-flex flex-row">
        <div>
          <ButtonGroup>
            <button
              className={`btn ${
                props.view === "month"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => {
                props.onView("month")
              }}
            >
              Month
            </button>
            <button
              className={`btn ${
                props.view === "week"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => {
                props.onView("week")
              }}
            >
              Week
            </button>
            <button
              className={`btn ${
                props.view === "day"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => {
                props.onView("day")
              }}
            >
              Day
            </button>
          </ButtonGroup>

          {/*<ButtonDropdown*/}
          {/*  isOpen={true}*/}
          {/*  className=""*/}
          {/*>*/}
          {/*  <DropdownToggle caret>*/}
          {/*    &nbsp; {dropdownLabel} &nbsp;*/}
          {/*  </DropdownToggle>*/}
          {/*  <DropdownMenu>*/}
          {/*    <DropdownItem*/}
          {/*      onClick={monthChanger}*/}
          {/*      // onClick={*/}
          {/*      //   () => {props.onView("month")*/}
          {/*      // }}*/}
          {/*    >Month</DropdownItem>*/}
          {/*    <DropdownItem*/}
          {/*      // onClick={() => {*/}
          {/*      //   props.onView("week")*/}
          {/*      // }}*/}
          {/*      onClick={monthChanger}*/}
          {/*    >Week</DropdownItem>*/}
          {/*    <DropdownItem*/}
          {/*      // onClick={() => {*/}
          {/*      //   props.onView("day")*/}
          {/*      // }}*/}
          {/*      onClick={monthChanger}*/}
          {/*    >Day</DropdownItem>*/}
          {/*  </DropdownMenu>*/}
          {/*</ButtonDropdown>*/}

        </div>
        <AddEventButton
          className="d-lg-none ml-3"
        />
      </div>
    </div>
  )
}

class CalendarApp extends React.Component {

  static getDerivedStateFromProps() {
    return {}
  }

  constructor(props) {
    super(props);
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

  handleSelectEvent = event => {
    let filteredState = this.state.events.filter(i => i.id === event.id)
    this.props.handleSidebar(true)
    this.props.handleSelectedEvent(filteredState[0])
    this.setState({
      eventInfo: filteredState[0]
    })
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
                components={{ toolbar: Toolbar }}
                startAccessor="start"
                endAccessor="end"
                resourceAccessor="url"
                views={views}
                popup={true}
                selectable={true}
                onSelectEvent={event => {
                  this.handleSelectEvent(event)
                }}
                onSelectSlot={({ start, end }) => {
                  this.props.handleSidebar(true)
                  this.props.handleSelectedEvent({
                    title: "",
                    label: null,
                    start: new Date(start),
                    end: new Date(end),
                    url: "",
                  })
                }}
              />
            </Widget>
          </Col>
          <Col xs={12} lg={3} className="d-none d-lg-block">
            <Widget className={`widget-p-md ${s.addEventBlock}`}>
              <div className="">
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
              </div>
              <div>
                <img src={calendarImg} alt="calendar"/>
              </div>
            </Widget>
          </Col>
        </Row>
        <AddEventSidebar
          sidebar={sidebar}
          handleSidebar={this.props.handleSidebar}
          addEvent={this.props.addEvent}
          events={this.state.events}
          eventInfo={this.state.eventInfo}
          selectedEvent={this.props.handleSelectedEvent}
          updateEvent={this.props.updateEvent}
          resizable
        />
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
