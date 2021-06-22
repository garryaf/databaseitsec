// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'

// ** Calendar App Component Imports
import CalendarBody from "./components/CalendarBody";

// ** Store & Actions
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEvents,
  selectEvent,
  updateEvent,
  updateFilter,
  updateAllFilters,
  addEvent,
  removeEvent
} from "../../../actions/calendar";


const Calendar = () => {
  // ** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // ** States
  // const [addSidebarOpen, setAddSidebarOpen] = useState(false),
  //   [leftSidebarOpen, setLeftSidebarOpen] = useState(false),
  const [calendarApi, setCalendarApi] = useState(null)

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
      <div className="app-calendar overflow-hidden border">
        <Row noGutters>
          <Col
            className='flex-grow-0 overflow-hidden d-flex flex-column bg-primary'
          >
            <div className="bg-secondary-red">Just test block</div>
          </Col>
          <Col className="position-relative">
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
          <div>
          </div>
        </Row>
      </div>

    </Fragment>
  )
}

export default Calendar;
