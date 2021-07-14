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

export default function Profile() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [wizardDropdownOpen, setWizardDropdownOpen] = useState(false);

  const profileMenuOpen = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
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
              <Widget>
                Second Widget
              </Widget>
            </Col>

            <Col className="mt-4 mt-lg-0" xs={12} lg={4}>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget>
                    Third Widget
                  </Widget>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs={12}>
                  <Widget>
                    Fourth Widget
                  </Widget>
                </Col>
              </Row>
              <Row className="">
                <Col xs={12}>
                  <Widget>
                    Fifth Widget
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
