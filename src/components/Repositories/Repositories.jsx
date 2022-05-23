import React from "react";

import "./Repositories.css";

import Pagination from "../Pagination/Pagination";
import Repository from "../Repository/Repository";

const Repositories = ({ userRepos, reposCount, handleSetPage }) => {
  return (
    <div className="repositories">
      <h2 className="repositories__title">
        Repositories (<span>{reposCount}</span>)
      </h2>
      <div className="repositories__content">
        {userRepos &&
          userRepos.map((repository) => {
            return <Repository key={repository.id} {...repository} />;
          })}
      </div>
      <Pagination
        items={userRepos}
        itemsLength={reposCount}
        handleSetPage={handleSetPage}
      />
    </div>
  );
};

export default Repositories;
