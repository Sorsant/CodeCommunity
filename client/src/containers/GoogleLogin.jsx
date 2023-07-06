import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

const Google = () => {

  useEffect(() => {
    
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="jumbotron bg-dark text-light mt-5">
          <h1 className="display-4">Welcome to the Secure Portal!</h1>
          <p className="lead">
            <h5>You have successfully authenticated with your Google account.</h5>
          </p>
          <hr className="my-4" />
          <p>Click the button below to access the home page.</p>
          <Link className="btn btn-primary mt-2 rounded-pill fw-bold fs-5 p-2 px-4" to="/home" role="button">
            Go to home page
          </Link>
        </div>
      </div>
    </Layout>
  );  
};

export default Google;
