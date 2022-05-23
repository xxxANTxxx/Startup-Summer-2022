import React from "react";

import "./Repository.css";

const Repository = ({ html_url, name, description }) => {
  return (
    <div className="repository">
      <h3 className="repository__title">
        <a href={html_url} target="about_blank">
          {name}
        </a>
      </h3>
      <div className="repository__subtitle">{description}</div>
    </div>
  );
};

export default Repository;
