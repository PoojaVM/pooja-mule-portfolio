import React from "react";
import { Navigate } from "react-router-dom";

const Redirector = () => {
    return <Navigate to="/home" />;
};

export default Redirector;