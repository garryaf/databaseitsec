import { useEffect, useRef, memo } from "react";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactinPlugin from "@fullcalendar/interaction"

import { Card, CardBody } from "reactstrap";

const CalendarBody = props => {
  // ** Refs
  const calendarRef = useRef(null)
  // ** Props
  const {
    store,
    dispatch,
    calendarApi,
    setCalendarApi,
    calendarsColor,
    blankEvent,
    selectEvent,
    updateEvent,
    handleAddEventSidebar
  } = props

  // ** UseEffect checks for CalendarAPI Update
  useEffect(() => {
    if (calendarApi === null) {
      setCalendarApi(calendarRef.current.getApi())
    }
  }, [calendarApi])

  // ** CalendarOptions(Props)
  const calendarOptions = {
    events: store.events.length
      ? store.events
      : [],
    plugins: [interactinPlugin, dayGridPlugin, timeGridPlugin],
    initialValue: 'dayGridMonth',
    headerToolbar: {
      start: ' prev, next, title',
      end: 'sidebarToggle, dayGridMonth, timeGridWeek, timeGridDay'
    },
    // Determines whether the events on the calendar can be modified.
    // Docs: https://fullcalendar.io/docs/editable
    editable: true,
    // Enable resizing event from start
    // Docs: https://fullcalendar.io/docs/eventResizableFromStart
    eventResizableFromStart: true,
    // Automatically scroll the scroll-containers during event drag-and-drop and date selecting
    // Docs: https://fullcalendar.io/docs/dragScroll
    dragScroll: true,
    // Max number of events within a given say
    // Docs: https://fullcalendar.io/docs/dayMaxEvents
    dayMaxEvents: 2,
    // Derermines if day names and week names are clickable
    // Docs: https://fullcalendar.io/docs/navLinks
    navLinks: true,
    // Triggered when the user clicks an event.
    // Docs: https://fullcalendar.io/docs/eventClick

    eventClassNames({ event: calendarEvent }) {
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]
      return [`bg-light-${colorName}`]
    },

    eventClick({ event: clickedEvent }) {
      dispatch(selectEvent(clickedEvent))
      handleAddEventSidebar()
      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      // event.value = grabEventDataFromEventApi(clickedEvent)

      // eslint-disable-next-line no-use-before-define
      // isAddNewEventSidebarActive.value = true
    },

    dateClick(info) {
      const ev = blankEvent
      ev.start = info.date
      ev.end = info.date
      dispatch(selectEvent(ev))
      handleAddEventSidebar()
    },

    eventDrop({ event: droppedEvent }) {
      dispatch(updateEvent(droppedEvent))
    },

    eventResize({event: resizedEvent}) {
      dispatch(updateEvent(resizedEvent))
    },

    ref: calendarRef,
  }

  return (
    <Card className="shadow-none border-0 mb-0">
      <CardBody className="pb-0">
        <FullCalendar {...calendarOptions} />{' '}
      </CardBody>
    </Card>
  )
}

export default memo(CalendarBody)

