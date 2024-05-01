import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <main id='main-header'>
      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Our Mission</NavLink>
          </li>
          <li>
            <NavLink to="sessions">Brouse Session</NavLink>
          </li>
          <li>
            <button className='button'>Upcoming Sessions</button>
          </li>
        </ul>
      </nav>
    </main>
  )
}
