// ** React Imports
import { Fragment } from 'react'

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
        <CardBody className="card-body d-flex justify-content-center my-sm-0 mb-3">
          <Button color="primary" block onClick={handleAddEventClick}>
            <span className="align-middle">Add Event</span>
          </Button>
        </CardBody>
        <CardBody>
          <h5 className="section-label mb-1">
            <span className="align-middle">Filter</span>
          </h5>
          <CustomInput
            id="view-all"
            type="checkbox"
            label="View All"
            className="mb-1"
            checked={store.selectedCalendars.length === filters.length}
            onChange={e => dispatch(updateAllFilters(e.target.checked))}
          />
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
      </div>
      <div className="mt-auto mx-auto mb-4">
        <img className="img-fluid" src={sidebarIllustration} alt="illustration" />
      </div>
    </Fragment>
  )
}

export default SidebarRight;
