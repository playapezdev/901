import React,{ Fragment } from 'react'
import '@styles/Header.scss'

export default function Header() {
  return (
    <Fragment>
        <nav>
            <div className="navbar-center">
                <ul className="list-item">
                    <li className="header-link">
                        <a href="#">CONOCENOS</a>
                    </li>
                    <li>
                        <a href="#">PRODUCTOS</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-rigth">
                <ul className="list-item">
                    <li className="navbar-login">
                        <span>INICIAR SESSION</span>
                    </li>
                    <li className="navbar-shopping-cart">
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
  )
}
