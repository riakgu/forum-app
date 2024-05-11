import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function HomeAction() {
  return (
    <div className="homepage__action">
      <Link to="/thread/create">
        <button className="action" type="button" title="Tambah">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default HomeAction;
