import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const dispatch = useDispatch();
  const { threads, authUser } = useSelector((state) => state);
  const [keyword, setKeyword] = useState('');

  const onKeyword = (category) => setKeyword((state) => (state === category ? '' : category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, []);

  const threadsList = threads.filter((thread) => thread.category.includes(keyword));
  const categories = threads
    .map((item) => item.category)
    .filter(
      (category, index, currentCategory) => currentCategory.indexOf(category) === index,
    );

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

      {authUser && (
        <div className="homepage__action">
          <Link to="/thread/new">
            <button className="action" type="button" title="Tambah">
              <FaPlus />
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default HomePage;
