import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/CategoryList";
import ThreadList from "../components/ThreadList";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import HomeAction from "../components/HomeAction";

function HomePage() {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const threads = useSelector((state) => state.threads);
  const authUser = useSelector((state) => state.authUser);

  const threadsList = threads.filter((thread) =>
    thread.category.includes(keyword),
  );
  const categories = threads
    .map((item) => item.category)
    .filter(
      (category, index, currentCategory) =>
        currentCategory.indexOf(category) === index,
    );

  const onKeyword = (category) => {
    setKeyword((state) => {
      return state === category ? "" : category;
    });
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, []);

  return (
    <section className="homepage">
      <h2>Popular Category</h2>
      <CategoryList
        categories={categories}
        keyword={keyword}
        onKeyword={onKeyword}
      />
      <h2>Available Discussion</h2>
      <ThreadList threads={threadsList} />

      {authUser && <HomeAction />}
    </section>
  );
}

export default HomePage;
