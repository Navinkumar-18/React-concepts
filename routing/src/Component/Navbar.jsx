import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/users', label: 'Users' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__badge">RC</span>
        <div>
          <p className="navbar__eyebrow">React routing</p>
          <h1 className="navbar__title">Navigation Hub</h1>
        </div>
      </div>

      <div className="navbar__links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `navbar__link${isActive ? ' navbar__link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar= () => {
//     return (            
//         <nav>
// //             <h1>My App</h1>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/users">Users</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>        
//     );
// };

// export default Navbar;