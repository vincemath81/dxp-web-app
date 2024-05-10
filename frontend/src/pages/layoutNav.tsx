import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard.css?v=1.0.7";

import Image from "react-bootstrap/Image";
import { IMAGES } from "../assets/index";
import { UserResponse } from "../models/user";
import { Carousel } from "react-bootstrap";
import { UseQueryResult } from "@tanstack/react-query";
import Dashboard from "./dashboard";
import PlatformCatalog from "./platformCatalog";
import SavedCourses from "./savedCourses";
import BadgesModal from "../components/badgesModal";
import LRS from "./lrs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

type Props = {
  user: UseQueryResult<UserResponse>;
  courses?: any;
};

function LayoutNav(props: Props) {
  const location = useLocation();
  const currentRoute = location.pathname || "";
  const iconSidenav = document.getElementById("iconSidenav");
  const sidenav = document.getElementById("sidenav-main");
  let className = "g-sidenav-pinned";
  const navigate = useNavigate();

  const toggleSidenav = () => {
    if (document.body.classList.contains(className)) {
      document.body.classList.remove(className);
      setTimeout(function () {
        sidenav!.classList.remove("bg-white");
      }, 100);
      sidenav!.classList.remove("bg-transparent");
    } else {
      document.body.classList.add(className);
      sidenav!.classList.add("bg-white");
      sidenav!.classList.remove("bg-transparent");
      iconSidenav!.classList.remove("d-none");
    }
  };

  const [isBadgesOverlayOpen, setBadgesOverlayOpen] = useState(false);
  const [typeOfBadges, setTypeOfBadges] = useState("");
  const [isAnnouncementsModalOpen, setAnnouncementsModalOpen] = useState(false);

  const toggleBadges = () => {
    setBadgesOverlayOpen(!isBadgesOverlayOpen);
  };

  const toggleAnnoucementsModal = () => {
    setAnnouncementsModalOpen(!isAnnouncementsModalOpen);
  };

  const handleNavigation = (path: string) => {
    navigate("/" + path);
  };

  interface propState {
    courses: string;
  }

  const renderContent = () => {
    let { courses } = location.state as propState;
    switch (currentRoute) {
      case "/dashboard":
        return <Dashboard user={props.user} courses={courses} />;
      case "/platformcatalog":
        return <PlatformCatalog />;
      case "/savedcourses":
        return <SavedCourses />;
      case "/profile":
        return "";
      case "/lrs":
        return <LRS />;
      default:
        return null;
    }
  };

  const handleMyTrainingCarouselSelect = (type: string) => {
    setBadgesOverlayOpen(!isBadgesOverlayOpen);
    setTypeOfBadges(type);
  };

  return (
    <>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-4 fixed-start ms-3 ps bg-white"
        id="sidenav-main"
      >
        {isBadgesOverlayOpen && <BadgesModal title={typeOfBadges} />}
        {/* <BadgesModal /> */}
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            className="navbar-brand m-0"
            href=" https://localhost:3000/dashboard.html "
            target="_blank"
          >
            <Image
              src={IMAGES.dafImage}
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
          </a>
        </div>
        <hr className="horizontal dark mt-5" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item pb-3">
              <button
                className="nav-link active"
                onClick={() => handleNavigation("dashboard")}
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 45 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>shop </title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1716.000000, -439.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(0.000000, 148.000000)">
                            <path
                              className="color-background opacity-6"
                              d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Dashboard
                </span>
              </button>
            </li>
            <li className="nav-item pb-3">
              <button
                className="nav-link"
                onClick={() => handleNavigation("platformcatalog")}
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>office</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1869.000000, -293.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g
                            id="office"
                            transform="translate(153.000000, 2.000000)"
                          >
                            <path
                              className="color-background opacity-6"
                              d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Platform Catalog
                </span>
              </button>
            </li>
            <li className="nav-item pb-3">
              <button
                className="nav-link"
                onClick={() => handleNavigation("savedcourses")}
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 43 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>credit-card</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-2169.000000, -745.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(453.000000, 454.000000)">
                            <path
                              className="color-background opacity-6"
                              d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Saved Courses
                </span>
              </button>
            </li>

            <li className="nav-item pb-3">
              <button
                className="nav-link"
                onClick={() => handleNavigation("completedcourses")}
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>settings</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-2020.000000, -442.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                              className="color-background opacity-6"
                              points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            ></polygon>
                            <path
                              className="color-background opacity-6"
                              d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Completed Courses
                </span>
              </button>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li className="nav-item pb-3">
              <a className="nav-link " href="../pages/profile.html">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 46 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>customer-support</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1717.000000, -291.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(1.000000, 0.000000)">
                            <path
                              className="color-background opacity-6"
                              d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Profile
                </span>
              </a>
            </li>
            <li className="nav-item pb-3">
              <a className="nav-link  " href="../pages/sign-in.html">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 40 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>document</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1870.000000, -591.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(154.000000, 300.000000)">
                            <path
                              className="color-background opacity-6"
                              d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                            ></path>
                            <path
                              className="color-background"
                              d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Proficiencies
                </span>
              </a>
            </li>
            <li className="nav-item pb-3">
              <a className="nav-link  " href="../pages/sign-up.html">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="20px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>spaceship</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1720.000000, -592.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(4.000000, 301.000000)">
                            <path
                              className="color-background"
                              d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Transcripts
                </span>
              </a>
            </li>
            <li className="nav-item pb-3">
              <a className="nav-link  " href="../pages/sign-up.html">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="20px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>spaceship</title>
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1720.000000, -592.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(4.000000, 301.000000)">
                            <path
                              className="color-background"
                              d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                            ></path>
                            <path
                              className="color-background opacity-6"
                              d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ fontWeight: "800", fontSize: "13px" }}
                >
                  Reports
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3 ">
          <div
            className="card card-background shadow-none card-background-mask-secondary"
            id="sidenavCard"
            style={{ marginTop: "80px" }}
          >
            <div
              className="full-background"
              style={{
                backgroundImage:
                  "url(" +
                  require("../assets/img/curved-images/white-curved.jpg") +
                  ")",
                // backgroundPositionY: "57%",
              }}
            ></div>
            <div className="card-body text-start p-3 w-100">
              <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                <i
                  className="ni ni-diamond text-dark text-gradient text-lg top-0"
                  aria-hidden="true"
                  id="sidenavCardIcon"
                ></i>
              </div>
              <div className="docs-info">
                <h6 className="text-white up mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold">
                  Please contact our help desk
                </p>
                <a
                  href="https://localhost:3000/soft-ui-dashboard"
                  target="_blank"
                  className="btn btn-white btn-sm w-100 mb-0"
                  rel="noreferrer"
                >
                  Help Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-main navbar-expand-lg bg-transparent shadow-none position-absolute px-4 w-100 z-index-2">
          <div className="container-fluid py-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 ps-2 me-sm-6 me-5">
                <li className="breadcrumb-item">
                  <a
                    className="text-white opacity-5"
                    href="http://localhost:3000/dashoard"
                  >
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              <h6 className="text-white font-weight-bolder ms-2">Dashboard</h6>
            </nav>
            <div
              className="collapse navbar-collapse me-md-0 me-sm-4 mt-sm-0 mt-2"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item d-flex align-items-center"></li>
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="http://localhost:3000/dashboard"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1"></i>
                    <span className="d-sm-inline d-none">Logout</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 pe-0 d-flex align-items-center">
                  {/* <a
                    href="http://localhost:3000/dashboard"
                    className="nav-link text-white p-0"
                  > */}
                  <button
                    className="nav-link text-body p-0"
                    id="iconNavbarSidenav"
                    onClick={toggleSidenav}
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line bg-white"></i>
                      <i className="sidenav-toggler-line bg-white"></i>
                      <i className="sidenav-toggler-line bg-white"></i>
                    </div>
                  </button>
                  {/* </a> */}
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a
                    href="http://localhost:3000/dashboard"
                    className="nav-link text-white p-0"
                  >
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <button
                    className="nav-link text-white p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={toggleAnnoucementsModal}
                  >
                    <i className="fa fa-bell cursor-pointer"></i>
                  </button>
                  {isAnnouncementsModalOpen && (
                    <ul
                      className="dropdown-menu dropdown-menu-end px-2 py-3 ms-n4 show"
                      aria-labelledby="dropdownMenuButton"
                      style={{ minWidth: "550px", minHeight: "200px" }}
                    >
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
                            Attention we have an announcement! Attention we have
                            an announcement!
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                          href="http://localhost:3000/dashboard"
                        >
                          Dismiss
                        </a>
                      </li>
                      <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                        <div
                          className="avatar me-3"
                          style={{ minWidth: "50px" }}
                        >
                          <Image
                            src={require("../assets/img/Slide11.JPG")}
                            alt=""
                            className="border-radius-lg shadow"
                          />
                        </div>
                        <div className="d-flex align-items-start flex-column justify-content-center">
                          <h6 className="mb-0">Rex Lt Col</h6>
                          <p className="mb-0">
                            We have a closed building alert. Please refrain from
                            entering the building.
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                          href="http://localhost:3000/dashboard"
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
                          <p className="mb-0">
                            Refrain from entering building A
                          </p>
                        </div>
                        <a
                          className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                          href="http://localhost:3000/dashboard"
                        >
                          Dismiss
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- End Navbar --> */}
        <div className="container-fluid">
          <div
            className="page-header min-height-200 border-radius-xl mt-4"
            style={{
              backgroundImage:
                "url(" + require("../assets/images/1809_af2.jpeg") + ")",
              backgroundPositionY: "57%",
            }}
          >
            <span className="mask bg-gradient-primary opacity-6"></span>
          </div>
          <div
            className="card card-body blur shadow-blur mx-4 mt-n7 overflow-hidden"
            style={{ minHeight: "150px" }}
          >
            <div className="row gx-5">
              <div className="col-auto">
                <div className="avatar avatar-xxl position-relative">
                  <Image
                    src={require("../assets/img/bruce-mars.jpg")}
                    alt="profile_image"
                    className="w-100 border-radius-lg shadow-sm"
                    style={{
                      //minHeight: "150px",
                      maxHeight: "140px",
                      minWidth: "140px",
                      maxWidth: "140px",
                      marginTop: "30px",
                      marginLeft: "30px",
                    }}
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">
                    Rank, {props.user?.data?.user.first_name}{" "}
                    {props.user?.data?.user.middle_name}{" "}
                    {props.user?.data?.user.last_name}
                  </h5>
                  <p className="mb-0 font-weight-bold">
                    {props.user?.data?.user.email}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                <div style={{ textAlign: "center" }}>
                  <h5 className="mb-1" style={{ fontWeight: "800" }}>
                    Badges & Certificates
                  </h5>
                </div>
                <div className="nav-wrapper position-relative end-0">
                  <ul
                    className="nav nav-pills nav-fill p-1 bg-transparent"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <div className="row">
                        <div
                          className="col-xl-3 col-md-6 mb-xl-0 mb-4"
                          onClick={() =>
                            handleMyTrainingCarouselSelect("My Training")
                          }
                        >
                          <h5 className="mb-1" style={{ fontWeight: "400" }}>
                            MyTraining
                          </h5>
                          <Carousel
                            //activeIndex={expiringCoursesIndex}
                            //onSelect={handleMyTrainingCarouselSelect}
                            controls={false}
                            indicators={false}
                            slide={false}
                          >
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge2}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge3}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge8}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        <div
                          className="col-xl-3 col-md-4 mb-xl-0 mb-4"
                          onClick={() => handleMyTrainingCarouselSelect("DU")}
                        >
                          <h5 className="mb-1" style={{ fontWeight: "400" }}>
                            DU
                          </h5>
                          <Carousel
                            //activeIndex={expiringCoursesIndex}
                            //onSelect={handleExpiringCoursesSelect}
                            controls={false}
                            indicators={false}
                            slide={false}
                            onClick={toggleBadges}
                          >
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge2}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge3}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge8}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        <div
                          className="col-xl-3 col-md-6 mb-xl-0 mb-4"
                          onClick={() =>
                            handleMyTrainingCarouselSelect("eLearning")
                          }
                        >
                          <h5 className="mb-1" style={{ fontWeight: "400" }}>
                            eLearning
                          </h5>
                          <Carousel
                            //activeIndex={expiringCoursesIndex}
                            //onSelect={handleExpiringCoursesSelect}
                            controls={false}
                            indicators={false}
                            slide={false}
                          >
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge2}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge3}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge8}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        <div
                          className="col-xl-3 col-md-6 mb-xl-0 mb-4"
                          onClick={() =>
                            handleMyTrainingCarouselSelect("My Learning")
                          }
                        >
                          <h5 className="mb-1" style={{ fontWeight: "400" }}>
                            MyLearning
                          </h5>
                          <Carousel
                            //activeIndex={expiringCoursesIndex}
                            //onSelect={handleExpiringCoursesSelect}
                            controls={false}
                            indicators={false}
                            slide={false}
                          >
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge2}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge3}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                            <Carousel.Item>
                              <div className="col-xl-12 col-md-6 mb-xl-0 mb-4">
                                <div className="position-relative">
                                  <Image
                                    style={{
                                      width: "40%",
                                      height: "40%",
                                    }}
                                    src={IMAGES.cyberSecurityBadge8}
                                    alt="img-blur-shadow"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderContent()}
      </div>
      <div className="fixed-plugin">
        <a
          className="fixed-plugin-button text-dark position-fixed px-3 py-2"
          href="http://google.com"
        >
          <i className="fa fa-cog py-2"> </i>
        </a>
      </div>
    </>
  );
}

export default LayoutNav;
