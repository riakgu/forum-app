import ThreadItem from "./ThreadItem";
import React from "react";


function CategoryList() {
    return (
        <>
            <h2>Popular Category</h2>
            <div className="categories-list">
                <button type="button" className="category-item selected"><p>#redux</p></button>
                <button type="button" className="category-item "><p>#perkenalan</p></button>
            </div>
        </>
    );
}

export default CategoryList
