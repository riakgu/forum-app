import React, {useState} from "react";
import ThreadList from "../components/ThreadList";
import {Link} from "react-router-dom";
import CategoryList from "../components/CategoryList";
import {FaPlus} from "react-icons/fa";

function HomePage() {



    return (
        <section className="homepage">
            <CategoryList/>
            <ThreadList/>

            <div className="homepage__action">
                <Link to={"/thread/new"}>
                    <button className="action"
                            type="button"
                            title="Tambah">
                        <FaPlus/>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default HomePage;
