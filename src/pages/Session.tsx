import { useParams } from 'react-router-dom';
import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../UI/Button.tsx';
import { FormEvent, useRef } from 'react';
import Modal from '../UI/Modal.tsx';
import Input from '../UI/Input.tsx';
import { useDispatch } from 'react-redux';
import {UpcomingSessonItem, addSession } from '../store/upcoming_sessions/upcoming-sessions-slice.ts';

export default function SessionPage() {
  const params = useParams<{ id: string }>();
  const handleModal = useRef<HTMLDialogElement>(null)
  const dispatch = useDispatch()
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const newData: UpcomingSessonItem = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      id: loadedSession.id,
      date: loadedSession.date,
      title: loadedSession.title,
      summary: loadedSession.summary

    };
    dispatch(addSession(newData))
    handleModal.current!.close()
    e.currentTarget.reset()
  }

  const handleClose = () => {
    if (handleModal.current) {
      handleModal.current.close();
      const form = handleModal.current.querySelector('form');
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <main id="session-page">
      <Modal ref={handleModal}>
        <form onSubmit={handleSubmit}>
          <h3>Book Session</h3>
          <Input className='control' id='name'>Your name</Input>
          <Input className='control' type='email' id='email'>Your email</Input>
          <p className='actions'>
            <Button type='button' textOnly onClick={handleClose}>Close</Button>
            <Button>Book a session</Button>
          </p>
        </form>
      </Modal>
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>

            <h2>{loadedSession.title}</h2>
          <div className="info">
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p className="actions">
              <Button onClick={() => handleModal.current?.showModal()}>Book Session</Button>
            </p>
          </div>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
