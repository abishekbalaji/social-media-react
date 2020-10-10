import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/signup">SignUp</Link>
  </div>
);

export default Landing;
