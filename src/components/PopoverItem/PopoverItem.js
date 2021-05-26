import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Progress,
} from 'reactstrap';

export default function PopoverItem(props) {

  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className={props.className}>
      <Button color={props.color} disabled={props.disabled} outline={props.outline} id={props.id} type="button">
        {props.btnLabel}
      </Button>
      <Popover placement={props.placement} isOpen={popoverOpen} target={props.id} toggle={toggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
    </div>
  )
}
