import { useState } from "react";
import Button from "react-bootstrap/Button";
import Login from "./login";
import Notice from "../components/notice";

function Home() {
  const [noticeModalDisplay, setNoticeModalDisplay] = useState(true);

  return noticeModalDisplay ? (
    <div>
      <div id="lightbox" style={{ display: "block" }}>
        <Notice clickHandler={(e) => setNoticeModalDisplay(false)} />
      </div>
      <div className="loginSectionContainer">
        <Login />
      </div>

      <div className="footer" style={{ display: "block" }}></div>
    </div>
  ) : (
    <div>
      <div id="lightbox" style={{ display: "none" }}>
        <Notice clickHandler={(e) => setNoticeModalDisplay(true)} />
      </div>
      <div className="loginSectionContainer">
        <div className="imageSide" id="imageSide">
          <div className="welcomeContainer">
            <img
              src="https://federation.prod.cce.af.mil/assets/customer/1809_airforce-logo-white.png"
              width="300px"
              alt=""
            ></img>
            <h2 id="welcomeText">Welcome Back</h2>
          </div>
        </div>
        <div className="loginSide">
          <section className="titleSection">
            <h1 className="loginTitle" style={{ textAlign: "center" }}>
              USAF Single Sign On
            </h1>
          </section>
          <section className="contentSection">
            <form
              id="login_form"
              autoComplete="off"
              style={{ display: "inline" }}
            ></form>
            <div
              style={{
                height: "200px",
                borderBottom: "100",
                borderColor: "black",
              }}
            >
              <Login />
            </div>
            <div id="login-buttons">
              <Button
                name="button"
                type="submit"
                id="pki-login"
                className="idp-19 akam-button"
                formAction="/sso/authenticate?request_client_cert=true&amp;u=https%3A%2F%2Flms-jets.cce.af.mil"
              >
                PKI Login
              </Button>
            </div>
            <div className="cacImageWrapper"></div>
            <div className="cacSectionWrapper">
              <div className="cacSection">
                <div
                  id="CAC / ECA Login"
                  className="cac-login-wrapper"
                  style={{ position: "relative" }}
                >
                  <br />
                  <h2 style={{ textAlign: "center" }}>
                    Insert your CAC / ECA to begin your login
                  </h2>
                  <br></br>
                </div>
              </div>
            </div>
          </section>
          <div className="supportSection">
            <h3>MEMBERSHIP AND SUPPORT INFORMATION</h3>
            <ul>
              <li>
                <a href="https://www2.my.af.mil/afp/netstorage/login_page_files_cloud_one/reg-requirements.html">
                  View Air Force Portal Registration Requirements
                </a>
              </li>
              <li>
                <a href="https://www2.my.af.mil/afp/netstorage/login_page_files_cloud_one/help-desk.html">
                  Contact the Help Desk
                </a>
              </li>
              <li>
                <a
                  href="https://slam.test.cce.af.mil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  idAM
                </a>
              </li>
            </ul>
          </div>
          <p className="securityStatement" style={{ textAlign: "left" }}>
            The security accreditation level of this site is CUI and below. Do
            not process, store, or transmit information classified above the
            accreditation level of this system. Privacy Act Information:
            information accessed through this system must be protected in
            accordance with the Privacy Act of 1974, as amended, and AFI 33-332.
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="footerSection">
          You are accessing a U.S. Government (USG) Information System (IS) that
          is provided for USG-authorized use only. By using this IS (which
          includes any device attached to this IS), you consent to the following
          conditions:
          <ul>
            <li>
              The USG routinely intercepts and monitors communications on this
              IS for purposes including, but not limited to, penetration
              testing, COMSEC monitoring, network operations and defense,
              personnel misconduct (PM), law enforcement (LE), and
              counterintelligence (CI) investigations
            </li>
            <li>
              At any time, the USG may inspect and seize data stored on this IS.
            </li>
            <li>
              Communications using, or data stored on, this IS are not private,
              are subject to routine monitoring, interception, and search, and
              may be disclosed or used for any USG authorized purpose.
            </li>
            <li>
              This IS includes security measures (e.g., authentication and
              access controls) to protect USG interests--not for your personal
              benefit or privacy.
            </li>
            <li>
              NOTICE: There is the potential that information presented and
              exported from the AF Portal contains Controlled Unclassified
              Information (CUI). It is the responsibility of all users to ensure
              information extracted from the AF Portal is appropriately marked
              and properly safeguarded. If you are not sure of the safeguards
              necessary for the information, contact your functional lead or
              Information Security Officer.
            </li>
            <li>
              Notwithstanding the above, using this IS does not constitute
              consent to PM, LE or CI investigative searching or monitoring of
              the content of privileged communications, or work product, related
              to personal representation or services by attorneys,
              psychotherapists, or clergy, and their assistants. Such
              communications and work product are private and confidential. See
              <a
                className="linkInline"
                href="https://www2.my.af.mil/afp/netstorage/login_page_files_cloud_one/dod-user-agreement.html"
                target="_blank"
                rel="noreferrer"
              >
                User Agreement
              </a>
              for details.
            </li>
          </ul>
        </div>
        Last Modified: 26 OCTOBER 2023
      </div>
    </div>
  );
}

export default Home;
