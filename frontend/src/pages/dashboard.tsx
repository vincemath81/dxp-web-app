import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import "./dashboard-test-styles.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard.css?v=1.0.7";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "react-bootstrap/Image";
import { TbAlertSquareRounded } from "react-icons/tb";
import { FaRegSquareCheck } from "react-icons/fa6";
import Footer from "./footer";
import { Carousel } from "react-bootstrap";
import { IMAGES } from "../assets/index";
import Slider from "react-slick";
import { UserResponse } from "../models/user";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { EnrolledCoursesResponse } from "../models/enrolledCourses";
import LearningPath from "../components/learningPath";
import ExpiringCourse from "../components/expiringCourse";
import EnrolledCourse from "../components/enrolledCourse";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  //speed: 500,
  slidesToShow: 1,
  //swipeToSlide: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // vertical: true,
  // verticalSwiping: true,
  cssEase: "linear",
};

const enrolledSliderSettings = {
  //dots: true,
  infinite: true,
  //speed: 500,
  slidesToShow: 3,
  //swipeToSlide: true,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  adaptiveHeight: true,
  cssEase: "linear",
};

type Props = {
  user: UseQueryResult<UserResponse>;
  courses: any;
};

function Dashboard(props: Props) {
  //TODO now have courses inside props... move to UI
  const location = useLocation();
  let { email } = location.state;
  const enrolledCourses = JSON.parse(props.courses);
  const [currentCoursesIndex, setCurrentCoursesIndex] = useState(0);
  const [expiringCoursesIndex, setExpiringCoursesIndex] = useState(0);
  const [showHover1, setShowHover1] = useState(true);

  const handleCurrentCoursesSelect = (
    selectedIndex: React.SetStateAction<number>
  ) => {
    setCurrentCoursesIndex(selectedIndex);
  };

  const handleExpiringCoursesSelect = (
    selectedIndex: React.SetStateAction<number>
  ) => {
    setExpiringCoursesIndex(selectedIndex);
  };

  //const [enrolledCourses, setEnrolledCourses] =
  //useState<EnrolledCoursesResponse>();

  const fetchEnrolledCourses = (): Promise<EnrolledCoursesResponse> =>
    client.get("/api/dxpcoursesenrolled/3").then((response) => response.data);

  const enrolledCoursesData = useQuery({
    queryKey: ["currentCourses"],
    queryFn: fetchEnrolledCourses,
  });

  // change later and reference js file
  const [isOpen, navBarFixed] = useState(false);
  const [isClosed, sidebarColor] = useState(false);

  const showHover = () => {
    setShowHover1(!showHover1);
  };

  //useEffect(() => {
  //setEnrolledCourses(enrolledCoursesData.data);
  //}, [enrolledCoursesData.data]);

  //alert(JSON.stringify(enrolledCourses.details));

  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          {/* <div className="col-12 col-xl-4 mt-4 mb-4">
            <div className="card h-100" style={{ minHeight: "380px" }}>
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 d-flex align-items-center">
                    <h5 className="mb-0" style={{ fontWeight: "800" }}>
                      Expiring Courses
                    </h5>
                  </div>
                  <div className="col-md-4 text-end">
                    <TbAlertSquareRounded
                      style={{
                        color: "red",
                        fontSize: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="card-body p-3"
                style={{ alignItems: "center", minHeight: "200px" }}
              >
                <div>
                  <Slider {...sliderSettings}>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <ExpiringCourse
                          title="Human Resources Admin Training"
                          expirationDate="Expiration Date: 02/01/2024"
                          days={35}
                          //image={IMAGES.cyberSecurityBadge3}
                          image={require("../assets/images/1809_af5.jpeg")}
                          courseSourceImage={IMAGES.myLearningImage}
                          progress={60}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <ExpiringCourse
                          title="Air Force Readiness"
                          expirationDate="Expiration Date: 11/31/2023"
                          days={71}
                          //image={IMAGES.cyberSecurityBadge4}
                          image={require("../assets/images/1809_af4.jpeg")}
                          courseSourceImage={IMAGES.myTrainingImage}
                          progress={90}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <ExpiringCourse
                          title="Air Force Command Training"
                          expirationDate="Expiration Date: 01/31/2024"
                          days={21}
                          //image={IMAGES.cyberSecurityBadge4}
                          image={require("../assets/images/1809_af7.jpeg")}
                          courseSourceImage={IMAGES.digitalLearningImage}
                          progress={43}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <ExpiringCourse
                          title="Tornado Hazard Training"
                          expirationDate="Expiration Date: 02/11/2024"
                          days={7}
                          //image={IMAGES.cyberSecurityBadge2}
                          image={require("../assets/images/1809_af2.jpeg")}
                          courseSourceImage={IMAGES.jkoImage}
                          progress={86}
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-12 col-xl-8 mt-4 mb-4">
            <div className="card h-100" style={{ minHeight: "380px" }}>
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 d-flex align-items-center">
                    <h5 className="mb-0" style={{ fontWeight: "800" }}>
                      Enrolled Courses
                    </h5>
                  </div>
                  <div className="col-md-4 text-end">
                    <FaRegSquareCheck
                      style={{
                        color: "green",
                        fontSize: "30px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className="card-body p-3"
                style={{
                  alignItems: "center",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                <div>
                  <Slider {...enrolledSliderSettings}>
                    {enrolledCourses.details.map(function (
                      course: any,
                      i: any
                    ) {
                      return (
                        <div className="row">
                          <div className="col-xl-12 col-md-6">
                            <EnrolledCourse
                              title={course.name}
                              image={require("../assets/images/1809_af1.jpeg")}
                              courseSourceImage={IMAGES.myLearningImage}
                              progress={60}
                              expirationDate="Expiration Date: 05/31/2024"
                            />
                          </div>
                        </div>
                      );
                    })}
                    {/* <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Something Admin Training"}
                          image={require("../assets/images/1809_af1.jpeg")}
                          courseSourceImage={IMAGES.myLearningImage}
                          progress={60}
                          expirationDate="Expiration Date: 05/31/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Squadron Command Training"}
                          image={require("../assets/images/1809_af3.jpeg")}
                          courseSourceImage={IMAGES.digitalLearningImage}
                          progress={20}
                          expirationDate="Expiration Date: 04/31/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Threat Awareness Training"}
                          image={require("../assets/images/1809_af7.jpeg")}
                          courseSourceImage={IMAGES.dafELearningImage}
                          progress={10}
                          expirationDate="Expiration Date: 07/31/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Air Force Readiness"}
                          image={require("../assets/images/1809_af7.jpeg")}
                          courseSourceImage={IMAGES.digitalLearningImage}
                          progress={60}
                          expirationDate="Expiration Date: 05/31/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Disaster Awareness Training"}
                          image={require("../assets/images/1809_af2.jpeg")}
                          courseSourceImage={IMAGES.dafELearningImage}
                          progress={20}
                          expirationDate="Expiration Date: 04/31/2024"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12 col-md-6">
                        <EnrolledCourse
                          title={"Human Resources Training"}
                          image={require("../assets/images/1809_af5.jpeg")}
                          courseSourceImage={IMAGES.myLearningImage}
                          progress={10}
                          expirationDate="Expiration Date: 07/31/2024"
                        />
                      </div>
                    </div> */}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4 mt-4 mb-4">
            <div className="card h-100" style={{ minHeight: "380px" }}>
              <div className="card-header pb-0 p-3">
                <h5 className="mb-0 text-md" style={{ fontWeight: "800" }}>
                  TFAT
                </h5>
              </div>
              <div
                className="card-body p-3"
                style={{
                  alignItems: "center",
                  marginRight: "20px",
                  marginLeft: "20px",
                  marginTop: "27px",
                }}
              >
                <Slider {...sliderSettings}>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Cyber Awareness and Training"
                        number={1}
                        image={require("../assets/images/1809_af5.jpeg")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Human Resource Processes"
                        number={2}
                        image={require("../assets/images/1809_af4.jpeg")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Air Force Specific Training"
                        number={3}
                        image={require("../assets/images/1809_af7.jpeg")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Safety Protocols"
                        number={4}
                        image={require("../assets/images/1809_af3.jpeg")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Flight and Airmen Procedures"
                        number={5}
                        image={require("../assets/images/1809_af1.jpeg")}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-6">
                      <LearningPath
                        title="Technical and Field Training"
                        number={6}
                        image={require("../assets/images/1809_af2.jpeg")}
                      />
                    </div>
                  </div>
                </Slider>
                {/* <Carousel
                  style={{ minHeight: "180px" }}
                  //slide={false}
                  //activeIndex={expiringCoursesIndex}
                  //onSelect={handleExpiringCoursesSelect}
                  interval={null}
                >
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Cyber Awareness and Training"
                          number={1}
                          image={require("../assets/images/1809_af5.jpeg")}
                        />
                      </div>

                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Human Resource Processes"
                          number={2}
                          image={require("../assets/images/1809_af4.jpeg")}
                        />
                      </div>

                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Air Force Specific Training"
                          number={3}
                          image={require("../assets/images/1809_af7.jpeg")}
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="row">
                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Safety Protocols"
                          number={4}
                          image={require("../assets/images/1809_af3.jpeg")}
                        />
                      </div>
                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Flight and Airmen Procedures"
                          number={5}
                          image={require("../assets/images/1809_af1.jpeg")}
                        />
                      </div>

                      <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                        <LearningPath
                          title="Technical and Field Training"
                          number={6}
                          image={require("../assets/images/1809_af2.jpeg")}
                        />
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel> */}
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-xl-3">
            <div className="card h-100">
              <div className="card-header pb-0 p-3">
                <h5 className="mb-0 text-md" style={{ fontWeight: "800" }}>
                  Announcements
                </h5>
              </div>
              <div className="card-body p-3">
                <ul className="list-group">
                  <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div
                      className="avatar me-3"
                      style={{ minWidth: "50px", minHeight: "50px" }}
                    >
                      <Image
                        src={require("../assets/img/Slide10.JPG")}
                        alt=""
                        className="border-radius-lg shadow"
                      />
                    </div>
                    <div className="d-flex align-items-start flex-column justify-content-center">
                      <h6 className="mb-0">LT Matthew B.</h6>
                      <p className="mb-0 ml=20">
                        Attention we have an announcement!
                      </p>
                    </div>
                    <a
                      className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                      href="http://localhost:3000/dashoard"
                    >
                      Dismiss
                    </a>
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div className="avatar me-3" style={{ minWidth: "50px" }}>
                      <Image
                        src={require("../assets/img/Slide11.JPG")}
                        alt=""
                        className="border-radius-lg shadow"
                      />
                    </div>
                    <div className="d-flex align-items-start flex-column justify-content-center">
                      <h6 className="mb-0">Rex Lt Col</h6>
                      <p className="mb-0">We have a closed building alert.</p>
                    </div>
                    <a
                      className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                      href="http://localhost:3000/dashoard"
                    >
                      Dismiss
                    </a>
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div className="avatar me-3">
                      <Image
                        src={require("../assets/img/Slide16.JPG")}
                        alt=""
                        className="border-radius-lg shadow"
                      />
                    </div>
                    <div className="d-flex align-items-start flex-column justify-content-center">
                      <h6 className="mb-0">Master Seargent Ivanna</h6>
                      <p className="mb-0">Refrain from entering building A</p>
                    </div>
                    <a
                      className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                      href="http://localhost:3000/dashoard"
                    >
                      Dismiss
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-xl-12 mb-4">
            <div className="card h-100 pb-4">
              <div className="card-header pb-0 p-3">
                <h5 className="mb-0 text-md" style={{ fontWeight: "800" }}>
                  Placeholder
                </h5>
              </div>
              <div className="card-body p-3">
                <div style={{ minHeight: "100px" }}></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
