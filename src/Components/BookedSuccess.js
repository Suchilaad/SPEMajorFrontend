import React from "react";

export default function BookedSuccess(props) {
  return (
    //   props.alert && <div className="alert alert-danger alert-dismissable fade show text-center" role="alert">
    props.alert && <div className="alert alert-success text-center" role="alert">
    Your booking request has been sent to Guide !
    </div>
  );
}
