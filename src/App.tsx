import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home.tsx';
import SessionsPage from './pages/Sessions.tsx';
import SessionPage from './pages/Session.tsx';
import Root from './pages/Root.tsx';

const Router = createBrowserRouter([
  {
    path: '/react-mentoring-finish-project/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: '/react-mentoring-finish-project/sessions', element: <SessionsPage /> },
      { path: '/react-mentoring-finish-project/sessions/:id', element: <SessionPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
