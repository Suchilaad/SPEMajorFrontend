import React, { useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import BookedSuccess from "./BookedSuccess";
import { Link } from "react-router-dom";

export default function BookNow(props) {
  const [loginData, setLoginData] = useState({});
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const handleForm = (e) => {
    console.log(loginData);
    postDataToServer(loginData);
    e.preventDefault();
  };
  const [err, setErr] = useState("");
  const postDataToServer = (data) => {
    axios.post(`${base_url}/booktrek`, data).then(
      (response)=>{
          console.log(response.data)
          console.log("success!")
          setErr("Your booking request has been sent to Guide !");
          showAlert("Your booking request has been sent to Guide !","Success");
      },(error)=>{
          console.log(error)
          console.log("error!")
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleForm}
        className="text-center rounded float-end animate__animated animate__pulse my-5 mx-5"
        style={{
          borderRadius: "12px",
          backgroundColor: "black",
          opacity: 0.55,
        }}
      >
        <div className="mx-5 my-5">
          <div className="mx-3 my-3 shadow">
            <input
              type="text"
              onChange={(e) => {
                setLoginData({ ...loginData, name: e.target.value,pId:sessionStorage.getItem("placeId")});
              }}
              placeholder="Enter your Name"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mx-3 my-3 shadow">
            <input
              type="number"
              onChange={(e) => {
                setLoginData({ ...loginData, countOfPpl: e.target.value,emailID:sessionStorage.getItem("emailId") });
              }}
              placeholder="Enter no of people"
              className="form-control"
              id="countOfPpl"
            />
          </div>
          <div className="mx-3 my-3 shadow">
            <input
              type="inputAddress"
              onChange={(e) => {
                setLoginData({ ...loginData, address: e.target.value,approved:"wait" });
              }}
              placeholder="Enter address"
              className="form-control"
              id="address"
            />
          </div>
          <div className="mx-3 my-3 shadow">
            <input
              type="number"
              onChange={(e) => {
                setLoginData({ ...loginData, contactNo: e.target.value });
              }}
              placeholder="Enter contact"
              className="form-control"
              id="contactNo"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mx-5 my-3 shadow"
            style={{
              borderRadius: "12px",
              backgroundColor: "#00ADEF",
              borderColor: "#00ADEF",
            }}
          >
            Book Now
          </button>
          <BookedSuccess alert={alert}></BookedSuccess> 
    </div>
      </form>
    </>
  );
}
