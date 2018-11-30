import React from 'react';
import logo from './../images/wp1.jpg'
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt=""/>
        </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h2>נשק חברתי</h2>
    <div className="collapse navbar-collapse" id="navbarColor02" >
    </div>
    <ul className="navbar-nav mr-auto ">
        <li className="nav-item">
          <a className="nav-link" href="#">אודות</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">מטווח</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">מחירון</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">בית<span class="sr-only">(current)</span></a>
        </li>
      </ul>

  </nav>
    )
}

export default Nav;