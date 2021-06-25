// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

// ** Calendar App Component Imports
import CalendarBody from "./components/CalendarBody"
import SidebarRight from "./components/SidebarRight";
import AddEventSidebar from "./components/AddEventSidebar";


import Widget from "../../../components/Widget/Widget";
// ** Store & Actions
import { useSelector, useDispatch } from "react-redux"
import {
  fetchEvents,
  selectEvent,
  updateEvent,
  updateFilter,
  updateAllFilters,
  addEvent,
  removeEvent
} from "../../../actions/calendar";

const calendarsColor = {
  Business: 'primary',
  Personal: 'danger',
  Flatlogic: 'warning',
  Holiday: 'success',
}


const Calendar = () => {
  // ** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // ** States
  const [addSidebarOpen, setAddSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
  const [calendarApi, setCalendarApi] = useState(null)

  // ** AddEventSidebar Toggle Function
  const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)
  // ** Right Sidebar Toggle Function
  const toggleSidebar = val => setRightSidebarOpen(val)

  // ** Blank Event Object
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: '',
    }
  }

  // ** RefetchEvents
  const refetchEvents = () => {
    if (calendarApi !== null) {
      calendarApi.refetchEvents()
    }
  }

  // ** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  return (
    <Fragment>
      <div className="app-calendar overflow-hidden">
        <Row noGutters>

          <Col className="position-relative mr-3">
            <CalendarBody
              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              setCalendarApi={setCalendarApi}
              calendarsColor={calendarsColor}
              toggleSidebar={toggleSidebar}
              selectEvent={selectEvent}
              updateEvent={updateEvent}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <Col
            id='app-calendar-sidebar'
            className={classnames('col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column', {
              show: rightSidebarOpen
            })}
          >
            <SidebarRight
              store={store}
              dispatch={dispatch}
              updateFilter={updateFilter}
              updateAllFilters={updateAllFilters}
              toggleSidebar={toggleSidebar}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <div
            className={classnames("body-content-overlay", {
              show: rightSidebarOpen === true
            })}
            onClick={() => toggleSidebar(false)}
          />
        </Row>
      </div>
      <AddEventSidebar
        store={store}
        dispatch={dispatch}
        open={addSidebarOpen}
        handleAddEventSidebar={handleAddEventSidebar}
        selectEvent={selectEvent}
        addEvent={addEvent}
        removeEvent={removeEvent}
        refetchEvents={refetchEvents}
      />
    </Fragment>
  )
}

export default Calendar;
