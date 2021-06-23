// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

// ** Calendar App Component Imports
import CalendarBody from "./components/CalendarBody"
import SidebarRight from "./components/SidebarRight";

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

const calendarColor = {
  Business: 'primary',
  Holiday: 'success',
  Personal: 'danger',
  Flatlogic: 'warning',
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
  // const refetchEvents = () => {
  //   if (calendarApi !== null) {
  //     calendarApi.refetchEvents()
  //   }
  // }

  // ** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  return (
    <Fragment>
      <div className="app-calendar overflow-hidden">
        <Row noGutters>
          <Col xs={12} lg={10} className="position-relative">
            <CalendarBody
              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              // selectEvent={selectEvent}
              // updateEvent={updateEvent}
              setCalendarApi={setCalendarApi}
            />
          </Col>
          <Col lg={2}
            id="app-calendar-sidebar"
            className={classnames("col flex-grow-0 overflow-hidden d-flex flex-column", {
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
        </Row>
      </div>
      {/*Add event sidebar component*/}
    </Fragment>
  )
}

export default Calendar;
