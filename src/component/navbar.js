import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-black navbar-fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><b>PRAKTIKUM</b></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bmi">BMI</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bank"> Cicilan Bank</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ppn">PPN</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/biner">Biner</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/octal">Octal</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/decimal">Decimal</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/hexadecimal">Hexadecimal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}