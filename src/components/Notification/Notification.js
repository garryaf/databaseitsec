import React, { useState } from 'react';
import { Alert } from 'reactstrap';

import infoIcon from '../../assets/notificationsIcons/infoIcon.svg';
import warningIcon from '../../assets/notificationsIcons/warningIcon.svg';
import successIcon from '../../assets/notificationsIcons/successIcon.svg';
import dangerIcon from '../../assets/notificationsIcons/successIcon.svg';
import s from './Notification.module.scss';

const typesIcons = {
  info: infoIcon,
  warning: warningIcon,
  success: successIcon,
  error: dangerIcon,
}

const notificationMessages = {
  info: "<span class='body-2'>Info:</span> This alert needs your attention, but it's not important.",
  warning: "<span class='body-2'>Warning:</span> Best check yourself, you're not looking too good.",
  success: "<span class='body-2'>Success:</span> You successfully read this important alert message.",
  error: "<span class='body-2'>Danger:</span> Danger: Change this and that and try again.",
}

const colors = {
  info: "#00A5FF",
  warning: "#FFA100",
  success: "#43BC13",
  error: "#FF4B23",
}

const transparentColors = {
  info: "#00A5FF50",
  warning: "#FFA10050",
  success: "#43BC1350",
  error: "#FF4B2350",
}

export default function Notification({ ...props }) {

  const [notificationOpen, setNotificationClose] = useState(true)

  const icon = getIconByType(props.type)

  const closeNotification = () => {
    setNotificationClose(!notificationOpen)
  }

  const notificationStyle = () => {
    return props.transparent
      ? {backgroundColor: transparentColors[props.type], color: colors[props.type]}
      : {backgroundColor: colors[props.type]}
  }

  return (
    <>
      <Alert
        className={s.notificationContainer}
        style={notificationStyle()}
        isOpen={notificationOpen}
        toggle={() => closeNotification()}
      >
        <div className={s.notificationIconContainer}>
          {props.withIcon && <img src={icon} alt="..."/>}
        </div>
        <div className={s.messageContainer}>
          <span dangerouslySetInnerHTML={{__html: notificationMessages[props.type]}}></span>
        </div>
      </Alert>
    </>
  )
};

function getIconByType(type = "info") {
  return typesIcons[type];
}

