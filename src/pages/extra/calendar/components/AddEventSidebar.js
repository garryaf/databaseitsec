// ** React Imports
import React, { Fragment, useState } from "react";

// ** Third Party Components
import classnames from "classnames";
import { toast } from "react-toastify";
import Flatpickr from "react-flatpickr";
import Select, { components } from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  CustomInput,
  Input,
  Form,
} from "reactstrap";

// ** Eva Icons
import "eva-icons/style/eva-icons.css";

// ** Profile Images
import img1 from "../../../../assets/tables/ellieSmithImg.png"
import img2 from "../../../../assets/tables/floydMilesImg.png"
import img3 from "../../../../assets/tables/rosaFloresImg.png"
import img4 from "../../../../assets/tables/janeCooper.png"


// ** Styles Imports
// import '@styles/react/libs/react-select/_react-select.scss'

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
    dispatch,
    open,
    handleAddEventSidebar,
    calendarsColor,
    calendarApi,
    refetchEvents,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent,
  } = props

  // ** Variables
  const selectedEvent = store.selectedEvent
  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [guests, setGuests] = useState('')
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [value, setValue] = useState([{ value: 'Business', label: 'Business', color: 'primary' }])

  // ** Select Options
  const options = [
    { value: 'Business', label: 'Business', color: 'primary' },
    { value: 'Personal', label: 'Personal', color: 'danger' },
    { value: 'Flatlogic', label: 'Flatlogic', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
  ]

  const guestsOptions = [
    { value: 'Ellie Smith', label: 'Ellie Smith', avatar: img1 },
    { value: 'Floyd Miles', label: 'Floyd Miles', avatar: img2 },
    { value: 'Rosa Flores', label: 'Rosa Flores', avatar: img3 },
    { value: 'Jane Cooper', label: 'Jane Cooper', avatar: img4 },
  ]

  // ** Custom select components
  const OptionComponent = ({ data, ...props}) => {
    return (
      <components.Option {...props}>
        <div className={`bullet bullet-${data.color} bullet-sm mr-2`}></div>
        {data.label}
      </components.Option>
    )
  }

  const GuestsComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className="d-flex flex-wrap align-items-center">
          <img className="avatar mr-2" src={data.avatar} alt="user"/>
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  // ** Utils
  // Checks if an object is empty (returns boolean)
  const isObjEmpty = obj => Object.keys(obj).length === 0

  // ** Adds New Event
  const handleAddEvent = () => {
    const obj = {
      title,
      start: startPicker,
      end: endPicker,
      allDay,
      display: 'block',
      extendedProps: {
        calendar: value[0].label,
        url: url.length ? url : undefined,
        guests: guests.length ? guests : undefined,
        location: location.length ? location : undefined,
        desc: desc.length ? desc : undefined
      }
    }
    dispatch(addEvent(obj))
    refetchEvents()
    handleAddEventSidebar()
  }

  // ** Set Sidebar Fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar
      console.log(typeof calendar)
      const resolveLabel = () => {
        if (calendar.length) {
          console.log(calendar.length)
          console.log(calendar)
          return { value: calendar, label: calendar, color: calendarsColor[calendar] }
        } else {
          return { label: 'Business', value: 'Business', color: 'primary' }
        }
      }
      setTitle(selectedEvent.title || title)
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(selectedEvent.extendedProps.description || desc)
      setGuests(selectedEvent.extendedProps.guests || guests)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end))
      setValue([resolveLabel()])
    }
  }

  // ** Reset Input Values On Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}))
    setTitle('')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setGuests({})
    setValue([{ value: 'Business', label: 'Business', color: 'primary' }])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }

  // ** Update Event In Calendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)
    // ** Set event properties except date related
    // Docs: https://fullcalendar.io/docs/Event-setProp
    for (let index = 0; index < propsToUpdate.length; index ++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }
    // ** Set date related props
    // Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.star, updatedEventData.end, { allDay: updatedEventData.allDay })

    // ** Set event's extendedProps
    // Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    for (let index = 0; index < extendedPropsToUpdate.length; index ++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Update Event In Store
  const handleUpdateEvent = () => {
    const eventToUpdate = {
      id: selectedEvent.id,
      title,
      allDay,
      start: startPicker,
      end: endPicker,
      url,
      extendedProps: {
        location,
        description: desc,
        guests,
        calendar: value[0].label
      }
    }

    const propsToUpdate = ['id', 'title', 'url']
    const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

    dispatch(updateEvent(eventToUpdate))
    updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)
    handleAddEventSidebar()
  }

  // ** Remove Event In Calendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }
  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
  }

  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button className="mr-3 rounded" type="submit" color="primary" >
            Add
          </Button>
          <Button color="secondary" type="reset" onClick={handleAddEventSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button color="primary" onClick={handleUpdateEvent}>
            Update
          </Button>
          <Button color="danger" onClick={handleDeleteEvent} outline>
            Delete
          </Button>
        </Fragment>
      )
    }
  }

  const CloseBtn = <i className="eva eva-close cursor-pointer" onClick={handleAddEventSidebar}/>

  return (
    <Modal
      isOpen={open}
      toggle={handleAddEventSidebar}
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      className="sidebar-lg"
      contentClassName="p-0"
      modalClassName="modal-slide-in event-sidebar"
    >
      <ModalHeader className="mb-1" toggle={handleAddEventSidebar} close={CloseBtn} tag="div">
        <h5 className="modal-title">
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? "Update" : "Add"} Event
        </h5>
      </ModalHeader>
      <ModalBody className="flex-grow-1 pb-sm-0 pb-3">
        <Form
          onSubmit={handleSubmit(data => {
            if (isObjEmpty(errors)) {
              if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                handleAddEvent()
              } else {
                handleUpdateEvent()
              }
              handleAddEventSidebar()
            }
          })}
        >
          <FormGroup>
            <Label for="title">
              Title <span className="text-danger">*</span>
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
                // add extended bootstrap class for show invalid field value
              })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="label">Label</Label>
            <Select
              id="label"
              value={value}
              options={options}
              className="react-select"
              classNamePrefix="select"
              isClearable={false}
              onChange={data => setValue([data])}
              components={{
                Option: OptionComponent
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='startDate'>Start Date</Label>
            <Flatpickr
              required
              id='startDate'
              name='startDate'
              className='form-control'
              onChange={date => setStartPicker(date[0])}
              value={startPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for='endDate'>End Date</Label>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='endDate'
              className='form-control'
              onChange={date => setEndPicker(date[0])}
              value={endPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              type='switch'
              id='allDay'
              name='customSwitch'
              label='All Day'
              checked={allDay}
              onChange={e => setAllDay(e.target.checked)}
              inline
            />
          </FormGroup>
          <FormGroup>
            <Label for='eventURL'>Event URL</Label>
            <Input
              type='url'
              id='eventURL'
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder='https://www.flatlogic.com'
            />
          </FormGroup>
          <FormGroup>
            <Label for='guests'>Guests</Label>
            <Select
              isMulti
              id='guests'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={guestsOptions}
              value={guests.length ? [...guests] : null}
              onChange={data => setGuests([...data])}
              components={{
                Option: GuestsComponent
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Office"
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="text"
              id="description"
              rows="3"
              value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="Description"
            />
          </FormGroup>
          <FormGroup className="d-flex">
            <EventActions />
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  )
}






export default AddEventSidebar;
