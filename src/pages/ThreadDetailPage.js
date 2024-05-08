import React, {useEffect} from "react";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import ThreadComment from "../components/ThreadComment";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    asyncGetDetailThread,
    asyncToggleVoteDetailThread,
    resetDetailThreadActionCreator
} from "../states/detailThread/action";
import ThreadDetail from "../components/ThreadDetail";


function DetailPage() {
    const { id } = useParams();

    const {detailThread } = useSelector((state) => state);
    const dispatch = useDispatch();



    useEffect(() => {
        if (id) dispatch(asyncGetDetailThread(id));
        return () => {
            dispatch(resetDetailThreadActionCreator());
        };
    }, [])
    if (!detailThread || !id) return null;


    return (
        <section className="detail-page" key={detailThread.id}>
            <ThreadDetail
                key={detailThread.id}
                {...detailThread}
            />
            <ThreadComment
                threadId={id} comments={detailThread.comments}
            />

        </section>


    );
}

export default DetailPage;
