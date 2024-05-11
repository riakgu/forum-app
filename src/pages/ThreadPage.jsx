import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ThreadComment from "../components/ThreadComment";
import {
  asyncGetDetailThread,
  resetDetailThreadActionCreator,
} from "../states/threadDetail/action";
import ThreadDetail from "../components/ThreadDetail";

function ThreadPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detailThread = useSelector((state) => state.detailThread);

  useEffect(() => {
    if (id) dispatch(asyncGetDetailThread(id));
    return () => {
      dispatch(resetDetailThreadActionCreator());
    };
  }, []);
  if (!detailThread || !id) return null;

  return (
    <section className="detail-page" key={detailThread.id}>
      <ThreadDetail key={detailThread.id} {...detailThread} />
      <ThreadComment threadId={id} comments={detailThread.comments} />
    </section>
  );
}

export default ThreadPage;
