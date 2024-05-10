import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import { asyncCreateThread } from '../states/threads/action';

function ThreadAddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateThread = async ({ title, body, category }) => {
    await dispatch(asyncCreateThread({ title, body, category })).then(
      ({ status }) => {
        if (status === 'success') {
          navigate('/');
        }
      },
    );
  };
  return (
    <section className="regsiter-page">
      <h2>Create a new discussion.</h2>
      <ThreadInput createThread={onCreateThread} />
    </section>
  );
}

export default ThreadAddPage;
