import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard.css?v=1.0.7";

import { IMAGES } from "../assets/index";

function Footer() {
  return (
    <footer className="footer pt-3">
      <div className="container-fluid px-4">
        <div
          className="row d-flex align-items-center justify-content-between small"
          style={{ maxHeight: "60px" }}
        >
          <div className="col-xl-3 col-md-2">
            <img src={IMAGES.myLearningImage} alt="" />
          </div>
          <div className="col-xl-3 col-md-2">
            <img src={IMAGES.myTrainingImage} alt="" />
          </div>
          <div className="col-xl-3 col-md-2">
            <img src={IMAGES.digitalLearningImage} alt="" />
          </div>
          <div className="col-xl-3 col-md-2">
            <img src={IMAGES.dafELearningImage} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
