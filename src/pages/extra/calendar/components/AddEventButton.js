import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import {
  handleSidebar,
  handleSelectedEvent,
} from "../../../../actions/calendar";

const AddEventButton = props => {

  return (
    <Button
      color="primary"
      onClick={() => {
        props.handleSidebar(true)
        props.handleSelectedEvent(null)
      }}
      className={props.className}
    >
      Add Event
    </Button>
  )
}

export default connect(null, { handleSidebar, handleSelectedEvent })(
  AddEventButton
)
