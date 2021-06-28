// ** React Imports
import React, { Fragment } from 'react'

// ** Custom Components
import classnames from 'classnames'
import { CardBody, Button, CustomInput } from 'reactstrap'

// ** Illustration Import
import sidebarIllustration from '../../../../assets/calendarImg.svg'

// ** Filters Checkbox Array
const filters = [
  { label: 'Personal', color: 'danger', className: 'custom-control-danger mb-1' },
  { label: 'Business', color: 'primary', className: 'custom-control-primary mb-1' },
  { label: 'Flatlogic', color: 'warning', className: 'custom-control-warning mb-1' },
  { label: 'Holiday', color: 'success', className: 'custom-control-success mb-1' },
]

const SidebarRight = props => {
  // ** Props
  const {
    handleAddEventSidebar,
    toggleSidebar,
    updateFilter,
    updateAllFilters,
    store,
    dispatch,
  } = props

  // ** Function to handle Add Event Click
  const handleAddEventClick = () => {
    toggleSidebar(false)
    handleAddEventSidebar()
  }

  return (
    <Fragment>
      <div className="sidebar-wrapper">
        <CardBody>
          <div className="headline-2 text-center my-2">
            Calendars
          </div>
          <div className="form-check checkbox checkbox-success">
            <input
              id="view-all"
              type="checkbox"
              className="styled mb-1"
              label="View All"
              checked={store.selectedCalendars.length === filters.length}
              onChange={e => dispatch(updateAllFilters(e.target.checked))}
            />
            <label htmlFor="view-all">View All</label>
          </div>
          {/*<CustomInput*/}
          {/*  id="view-all"*/}
          {/*  type="checkbox"*/}
          {/*  label="View All"*/}
          {/*  className="mb-1"*/}
          {/*  checked={store.selectedCalendars.length === filters.length}*/}
          {/*  onChange={e => dispatch(updateAllFilters(e.target.checked))}*/}
          {/*/>*/}
          <div className="calendar-events-filter">
            {filters.length &&
            filters.map(filter => {
              return (
                <CustomInput
                  id={filter.label}
                  type="checkbox"
                  key={filter.label}
                  label={filter.label}
                  checked={store.selectedCalendars.includes(filter.label)}
                  className={classnames({
                    [filter.className]: filter.className
                  })}
                  onChange={e => dispatch(updateFilter(filter.label))}
                />
              )
            })
            }
          </div>
        </CardBody>
        <CardBody className="card-body d-flex justify-content-center my-sm-0 mb-3">
          <Button className="btn-rounded" color="secondary-red" onClick={handleAddEventClick}>
            <span className="align-middle">Add Event</span>
          </Button>
        </CardBody>
      </div>
      <div className="mt-auto mx-auto mb-4">
        <img className="img-fluid" src={sidebarIllustration} alt="illustration" />
      </div>
    </Fragment>
  )
}

export default SidebarRight;
