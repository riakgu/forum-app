import React from "react";
import ThreadItem from "./ThreadItem";


function ThreadList() {
    return (
        <>
            <h2>Available Discussion</h2>
            <section className="threads-list">
                <ThreadItem/>

            </section>
        </>

    );
}

export default ThreadList;
