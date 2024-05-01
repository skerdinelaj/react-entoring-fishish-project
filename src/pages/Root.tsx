import { Outlet } from 'react-router-dom';
import Header from '../navidations/Header';

export default function Root() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
}
