import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget.js";
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import s from "./Carousel.module.scss";
import mock from "./mock";

import carousel1 from "../../../assets/carousel/carousel1.jpg";
import carousel2 from "../../../assets/carousel/carousel2.jpg";
import carousel3 from "../../../assets/carousel/carousel3.jpg";
import carousel4 from "../../../assets/cards/lifestyleImg.png";

export default function Carousel() {

  // const images = {
  //   imagesBundle1: [
  //     {
  //       label: "Bali, Indonesia",
  //       imgPath: carousel1
  //     },
  //     {
  //       label: "San Francisco – Oakland Bay Bridge, United States",
  //       imgPath: carousel2
  //     },
  //     {
  //       label: "Alaska - Glacier Bay National Park, United States",
  //       imgPath: carousel3
  //     },
  //     {
  //       label: "Canary Islands, Spain",
  //       imgPath: carousel4
  //     },
  //   ],
  //   imagesBundle2: [
  //     {
  //       label: "San Francisco – Oakland Bay Bridge, United States",
  //       imgPath: carousel2
  //     },
  //     {
  //       label: "Alaska - Glacier Bay National Park, United States",
  //       imgPath: carousel3
  //     },
  //     {
  //       label: "Canary Islands, Spain",
  //       imgPath: carousel4
  //     },
  //     {
  //       label: "Bali, Indonesia",
  //       imgPath: carousel1
  //     },
  //   ],
  //   imagesBundle3: [
  //     {
  //       label: "Alaska - Glacier Bay National Park, United States",
  //       imgPath: carousel3
  //     },
  //     {
  //       label: "Canary Islands, Spain",
  //       imgPath: carousel4
  //     },
  //     {
  //       label: "Bali, Indonesia",
  //       imgPath: carousel1
  //     },
  //     {
  //       label: "San Francisco – Oakland Bay Bridge, United States",
  //       imgPath: carousel2
  //     },
  //   ]
  // }

  const { images1, images2, images3 } = mock;
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images1.length - 1;

  const handleNext = () => {
    setActiveStep(prevStep => prevStep === maxSteps
      ? 0
      : prevStep + 1
    )
  }

  const handleBack = () => {
    setActiveStep(prevStep => prevStep === 0
      ? maxSteps
      : prevStep - 1
    )
  }

  const handleStepChange = step => setActiveStep(step);

  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <Widget className="widget-p-none">
                <div className={s.carouselTitle}>
                  <div className="headline-2">
                    {images1[activeStep].label}
                  </div>
                </div>
                {/*{images1.map((image, index) => (*/}
                {/*  <div key={index}>*/}
                {/*    {<img className="" src={image.image} alt={image.label} />}*/}
                {/*  </div>*/}
                {/*))}*/}
                <img
                  className={s.img}
                  src={images1[activeStep].image}
                  alt={images1[activeStep].label}
                />
                <MobileStepper
                  steps={images1.length}
                  position="static"
                  variant="progress"
                  activeStep={activeStep}
                  nextButton={
                    <Button className="btn-stepper">
                      Next{<KeyboardArrowRight/>}
                    </Button>
                  }
                  backButton={
                    <Button className="btn-stepper">
                      {<KeyboardArrowLeft/>}Back
                    </Button>
                  }
                />
              </Widget>
            </Col>
          </Row>
          <Row className="gutter">
            <Col xs={12} md={6} className="mb-4 mb-md-0">
              <Widget>
                <div className={s.carouselTitle}>
                  <div className="headline-2">Hello 2</div>
                </div>

              </Widget>
            </Col>
            <Col xs={12} md={6}>
              <Widget>
                <div className={s.carouselTitle}>
                  <div className="headline-2">Hello 3</div>
                </div>

              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  )
}
