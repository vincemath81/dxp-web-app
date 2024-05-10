import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/soft-ui-dashboard.css?v=1.0.7";

type Props = {
  title: string;
  number: number;
  image: NodeRequire;
};

function LearningPath(props: Props) {
  return (
    <div className="card h-100 card-blog card-plain p-2">
      <div
        className="bg-white p-2"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Image
            src={props.image.toString()}
            alt=""
            className="img-fluid shadow border-radius-xl"
            style={{
              minHeight: "200px",
              maxHeight: "200px",
              minWidth: "200px",
              maxWidth: "200px",
              // marginLeft: "30px",
            }}
          />
        </div>
        <div className="card-body px-1 pb-0">
          <a href="http://localhost:3000">
            <h5>{props.title}</h5>
          </a>
          <p className="mb-4 text-sm">
            All courses dealing with cyber awareness and applicable trainings.
          </p>
          <p className="mb-4 text-sm">Duration: 60 min</p>
          <p className="mb-4 text-sm">Instructor: Sgt Miller</p>
          <a href="http://localhost:3000" className="mb-4">
            <h6>Reviews & Ratings</h6>
          </a>
          {/* <div className="d-flex align-items-center justify-content-between">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm mb-0"
            >
              View Catalog
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LearningPath;
