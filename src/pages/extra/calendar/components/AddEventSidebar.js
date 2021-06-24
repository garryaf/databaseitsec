// ** React Imports
import { Fragment, useState } from "react";

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

// ** Profile Images
import img1 from "../../../../assets/tables/ellieSmithImg.png"
import img2 from "../../../../assets/tables/floydMilesImg.png"
import img3 from "../../../../assets/tables/rosaFloresImg.png"
import img4 from "../../../../assets/tables/janeCooper.png"



// ** Styles Imports
// import '@styles/react/libs/react-select/_react-select.scss'
// import '@styles/react/libs/flatpickr/flatpickr.scss'

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
    { value: 'Family', label: 'Family', color: 'warning' },
    { value: 'Holiday', label: 'Holiday', color: 'success' },
    { value: 'ETC', label: 'ETC', color: 'info' }
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
        <span className={`bullet bullet-${data.color} bullet-sm mr-50`}></span>
        {data.label}
      </components.Option>
    )
  }


  return (
    <Modal
      isOpen={open}
      modalClassName="modal-slide-in event-sidebar"
    >
      <ModalHeader>
        <h5 className="modal-title">
          Test Modal
        </h5>
      </ModalHeader>
      <ModalBody className="">
        <div>
          This is modal body
        </div>
      </ModalBody>
    </Modal>
  )
}






export default AddEventSidebar;
