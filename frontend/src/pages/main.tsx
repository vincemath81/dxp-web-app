import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutNav from "./layoutNav";
import { UserResponse } from "../models/user";
import { useQuery } from "@tanstack/react-query";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

type Props = {
  courses?: any;
};

function Main(props: Props) {
  //alert("inside main!" + props.courses);
  const fetchUser = (): Promise<UserResponse> =>
    client.get("/user").then((response) => response.data);

  const userData = useQuery({ queryKey: ["user"], queryFn: fetchUser });

  return (
    <>
      <LayoutNav user={userData} />
    </>
  );
}

export default Main;
