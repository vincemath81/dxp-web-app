import axios from "axios";
import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LrsResponse } from "../models/lrs";
import { useMutation } from "@tanstack/react-query";
import Form from "react-bootstrap/Form";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function LRS() {
  const [endpoint, setEndpoint] = useState(
    "https://locker.stage.josce.mil/data/xAPI/statements?limit=1&cursor=65fb1c51eee522586c5a154e_2024-03-20T17:26:41.396Z"
  );
  const [showResponse, setShowResponse] = useState(false);
  const [lrsData, setLrsData] = useState(null);

  const mutation = useMutation({
    mutationFn: (url: string) => {
      return client.post("lrs", { endpoint: url });
    },
  });

  const executeLRSPull = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(endpoint);
    const data = mutation.data?.data;
    setLrsData(data?.lrsData);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Form onSubmit={(e) => executeLRSPull(e)}>
          <div className="row">
            <div className="col-xl-8 col-md-6">
              <Form.Group className="mb-4 mt-4">
                <div style={{ marginLeft: "5%", float: "left", width: "100%" }}>
                  <Form.Control
                    id="endpoint"
                    type="text"
                    placeholder="Enter LRS endpoint"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="col-xl-4 col-md-6 mt-4">
              <button className="nav-link active" type="submit">
                Execute
              </button>
            </div>
          </div>
        </Form>
      </div>
      {mutation.isPending && <div>Loading...</div>}
      {mutation.isSuccess && lrsData && (
        <div className="fpt-3 mt-8">
          LRS RESPONSE : {JSON.stringify(lrsData, null, 2)}
        </div>
      )}
    </>
  );
}

export default LRS;
