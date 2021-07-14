import React, { useState } from "react";
import {
  Col,
  Row,
  Progress,
  Button,
  Badge,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Dropdown,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";
import s from "./Profile.module.scss";

import moreIcon from "../../../assets/tables/moreIcon.svg";
import profileImg from "../../../assets/profile/profile.png";
import heartRed from "../../../assets/dashboard/heartRed.svg";
import heartTeal from "../../../assets/dashboard/heartTeal.svg";

export default function Profile() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [wizardDropdownOpen, setWizardDropdownOpen] = useState(false);

  const profileMenuOpen = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  }

  const wizardMenuOpen = () => {
    setWizardDropdownOpen(!wizardDropdownOpen);
  }

  return(
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={6}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className={`widget-p-md ${s.profile}`}>
                <div className="d-flex justify-content-end">
                  <Dropdown
                    nav
                    isOpen={profileDropdownOpen}
                    toggle={() => profileMenuOpen()}
                  >
                    <DropdownToggle nav className="p-0">
                      <img src={moreIcon} alt="More..."/>
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className={s.profileTitle}>
                  <img className="mx-0 mx-md-2" src={profileImg} alt="..."/>
                  <div className="d-flex flex-column mb-2 ml-3">
                    <p className="headline-1">Mary Sanders</p>
                    <p className="body-1 mt-1 mb-3">UI/UX Designer</p>
                    <hr />
                    <div className="d-flex flex-row justify-content-between">
                      <a href="/"><i className="eva eva-facebook"/></a>
                      <a href="/"><i className="eva eva-google"/></a>
                      <a href="/"><i className="eva eva-github"/></a>
                      <a href="/"><i className="eva eva-linkedin"/></a>
                    </div>
                  </div>
                </div>
                <div className="body-1 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's typesetting industry.
                  Lorem Ipsum has been the industry's
                </div>
                <div className={s.badges}>
                  <Badge className="badge-inverse-primary">Figma</Badge>
                  <Badge className="badge-inverse-secondary-red">Marketing</Badge>
                  <Badge className="badge-inverse-secondary-yellow">Digital Marketing</Badge>
                  <Badge className="badge-inverse-secondary-cyan">Graphic Design</Badge>
                  <Badge className="badge-inverse-success">Social Media</Badge>
                </div>
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} lg={8}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between mb-3">
                  <div className="headline-3 d-flex align-items-center">Overview</div>
                  <ButtonDropdown
                    isOpen={wizardDropdownOpen}
                    toggle={() => wizardMenuOpen()}
                  >
                    <DropdownToggle caret>
                      &nbsp; Week 1 &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Week 2</DropdownItem>
                      <DropdownItem>Week 3</DropdownItem>
                      <DropdownItem>Week 4</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </div>
                <div className="mt-2">
                  Wizard
                </div>
              </Widget>
            </Col>




            <Col className="mt-4 mt-lg-0" xs={12} lg={4}>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget className="widget-p-md">
                    <div className="d-flex flex-column align-items-center">
                      <img className="img-fluid mb-1" src={heartRed} alt="..." />
                      <div className="my-2 headline-3">Paypal</div>
                      <div className="body-2 muted">+$2000</div>
                    </div>
                  </Widget>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget className="widget-p-md">
                    <div className="d-flex flex-column align-items-center">
                      <img className="img-fluid mb-1" src={heartTeal} alt="..." />
                      <div className="my-2 headline-3">Paypal</div>
                      <div className="body-2 muted">+$2000</div>
                    </div>
                  </Widget>
                </Col>
              </Row>
              <Row className="">
                <Col xs={12}>
                  <Widget className="widget-p-sm">
                    <div className="d-flex flex-column align-items-center">
                      <div className="headline-1">+$467,80</div>
                      <div className="body-4 muted">Your total earning</div>
                      <Button color="primary" className="btn-rounded mt-3">Get Money</Button>
                    </div>
                  </Widget>
                </Col>
              </Row>
            </Col>

          </Row>
        </Col>

        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={6}>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget>
                Sixth Widget
              </Widget>
            </Col>
          </Row>
          <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget>
                Seventh Widget
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12}>
              <Widget>
                Eighth Widget
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
