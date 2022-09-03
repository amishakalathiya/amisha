import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <LinkContainer to="/">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                        </LinkContainer>
                        {/* <LinkContainer to="/">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Card</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Products</a>
                            </li>
                        </LinkContainer> */}
                        <LinkContainer to="/contact">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Blog</a>
                            </li>
                        </LinkContainer>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
