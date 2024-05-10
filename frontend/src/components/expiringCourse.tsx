import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

type Props = {
  title: string;
  expirationDate: string;
  days: number;
  progress: number;
  image: any;
  courseSourceImage: any;
};

function ExpiringCourse(props: Props) {
  return (
    <>
      <div
        style={{
          marginBottom: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          border: "none",
        }}
      >
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-xl-3 col-md-6">
            <Image
              src={props.image}
              alt=""
              roundedCircle
              className="img-fluid"
            />
          </div>
          <div className="col-xl-9 col-md-12">
            <ProgressBar
              now={props.progress}
              label={`${props.progress}%`}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            ></ProgressBar>

            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                //display: "flex",
              }}
            >
              <Image
                src={props.courseSourceImage}
                alt=""
                className="img-fluid"
                style={{ paddingLeft: "40px" }}
              />
              <h5>{props.title}</h5>
              <h5>
                <p style={{ color: "red" }}>{props.expirationDate}</p>
              </h5>
              <h5>
                <p style={{ color: "red" }}>Days: {props.days}</p>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpiringCourse;
