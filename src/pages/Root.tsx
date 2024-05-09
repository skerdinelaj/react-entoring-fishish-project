import { Outlet } from 'react-router-dom';
import Header from '../navidations/Header';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function Root() {
  return (
    <Provider store={store}>
      <Header/>
      <Outlet />
    </Provider>
  );
}
