import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Login() {
  const [currentUser, setCurrentUser] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function update_form_btn() {
    if (registrationToggle) {
      /* @ts-ignore */
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      /* @ts-ignore */
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    client
      .post("/login", {
        email: email,
        password: password,
      })
      .then(function (res) {
        alert(JSON.stringify(JSON.parse(res.data.Courses)));
        setCurrentUser(true);
        setInvalidLogin(false);

        navigate("/dashboard", {
          state: {
            username: username,
            email: email,
            courses: JSON.stringify(JSON.parse(res.data.Courses)), //TODO determine whether to leave here or move to separate api call
          },
        });
      })
      .catch((error) => {
        setInvalidLogin(true);
        console.log("Login error: " + JSON.stringify(error));
      });
  }

  function submitLogout(e: { preventDefault: () => void }) {
    e.preventDefault();
    client.post("/logout", { withCredentials: true }).then(function (res) {
      setCurrentUser(false);
    });
  }

  return (
    <div>
      <div style={{ position: "absolute", width: "60%" }}>
        <Form onSubmit={(e) => submitLogin(e)}>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Form.Group className="mb-4">
              <div style={{ marginLeft: "10%", float: "left" }}>
                <Form.Control
                  style={{ minWidth: "100% important" }}
                  id="emailLogin"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ marginRight: "10%", float: "right" }}>
                <Form.Control
                  id="emailPassword"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </Form.Group>
          </div>

          <div>
            <Button className="login-button" type="submit">
              <Form.Label>Login</Form.Label>
            </Button>
          </div>
        </Form>
      </div>

      {invalidLogin && (
        <div style={{ color: "red" }}>Invalid email or password!</div>
      )}
    </div>
  );
}

export default Login;
