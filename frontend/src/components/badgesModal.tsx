import { useState } from "react";
import { Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { IMAGES } from "../assets/index";
import { SlBadge } from "react-icons/sl";
import { PiCertificateLight } from "react-icons/pi";

type Props = {
  title: string;
};

function BadgesModal(props: Props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style = {
    listStyleType: "none",
  };

  return (
    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title} Badges & Certifications
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ marginLeft: "20%" }}>
        <ul
          style={style}
          className="px-2 py-3 ms-n4 show"
          aria-labelledby="dropdownMenuButton"
        >
          <li className="mb-2">
            <a
              className="dropdown-item border-radius-md"
              href="http://localhost:3000"
            >
              <div className="d-flex py-1">
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ paddingRight: "40px" }}
                >
                  <SlBadge style={{ fontSize: "50px" }} />
                </div>
                {/* <div className="my-auto">
                  <Image
                    src={IMAGES.cyberSecurityBadge2}
                    style={{
                      width: "40%",
                      height: "40%",
                    }}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div> */}
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="text-sm font-weight-normal mb-1">
                    <span className="font-weight-bold">
                      Air Force Command Training Badge
                    </span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dropdown-item border-radius-md"
              href="http://localhost:3000"
            >
              <div className="d-flex py-1">
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ paddingRight: "40px" }}
                >
                  <PiCertificateLight style={{ fontSize: "50px" }} />
                </div>
                {/* <div className="my-auto">
                  <Image
                    src={IMAGES.cyberSecurityBadge2}
                    style={{
                      width: "40%",
                      height: "40%",
                    }}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div> */}
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="text-sm font-weight-normal mb-1">
                    <span className="font-weight-bold">
                      Squadron Security Certificate
                    </span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dropdown-item border-radius-md"
              href="http://localhost:3000"
            >
              <div className="d-flex py-1">
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ paddingRight: "40px" }}
                >
                  <SlBadge style={{ fontSize: "50px" }} />
                </div>
                {/* <div className="my-auto">
                  <Image
                    src={IMAGES.cyberSecurityBadge2}
                    style={{
                      width: "40%",
                      height: "40%",
                    }}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div> */}
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="text-sm font-weight-normal mb-1">
                    <span className="font-weight-bold">
                      Cyber Awareness Badge
                    </span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dropdown-item border-radius-md"
              href="http://localhost:3000"
            >
              <div className="d-flex py-1">
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ paddingRight: "40px" }}
                >
                  <PiCertificateLight style={{ fontSize: "50px" }} />
                </div>
                {/* <div className="my-auto">
                  <Image
                    src={IMAGES.cyberSecurityBadge2}
                    style={{
                      width: "40%",
                      height: "40%",
                    }}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div> */}
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="text-sm font-weight-normal mb-1">
                    <span className="font-weight-bold">CUI Certificate</span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
          <li className="mb-2">
            <a
              className="dropdown-item border-radius-md"
              href="http://localhost:3000"
            >
              <div className="d-flex py-1">
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ paddingRight: "40px" }}
                >
                  <PiCertificateLight style={{ fontSize: "50px" }} />
                </div>
                {/* <div className="my-auto">
                  <Image
                    src={IMAGES.cyberSecurityBadge2}
                    style={{
                      width: "40%",
                      height: "40%",
                    }}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div> */}
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="text-sm font-weight-normal mb-1">
                    <span className="font-weight-bold">
                      Human Resources Admin Certificate
                    </span>
                  </h6>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary btn-sm mb-0"
          data-dismiss="modal"
          onClick={handleClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default BadgesModal;
