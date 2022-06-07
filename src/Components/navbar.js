import logoContactout from '../Assets/logo-contactout.png';
import account from '../Assets/account.jpeg';
import OutsideClickHandler from 'react-outside-click-handler';

import '../App.css';
import ExpandedMenu from "./ExpandedMenu";
import {useState} from "react";

function NavBar() {
    const [isActive, setActive] = useState(false);
    const [collapseMenu, setCollapseMenu] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    const toggleDropdown = () => {
        setCollapseMenu(!collapseMenu);
    };

    return (<nav className="navbar">
        <ul className="navbar__menu">
            <li className="navbar__item company-logo">
                <a href="#" className="navbar__link">
                    <img src={logoContactout} className="App-logo" alt="contactoutLogo"/>
                </a>
            </li>
            <li className={`navbar__item page-link ${window.location.pathname === '/lists' ? 'active' : ''}`}>
                <a href="lists" className="navbar__link">
                            <span className="menu-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list"
                                     className="svg-inline--fa fa-th-list fa-w-16" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"/>
                                </svg>
                            </span>
                    <label className="menu-label">Lists</label>
                </a>
            </li>
            <li className={`navbar__item page-link ${window.location.pathname === '/search' ? 'active' : ''}`}>
                <a href="search" className="navbar__link">
                            <span className="menu-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="search"
                                     className="svg-inline--fa fa-search fa-w-16" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                <path
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                                </svg>
                            </span>
                    <label className="menu-label">Search</label>
                </a>
            </li>
            <div className="navbar__item profile">
                <a href="#" className="navbar__link" onClick={toggleClass}>
                    <img src={account} className="user" alt="list"/>
                </a>
                <OutsideClickHandler onOutsideClick={() => {
                    setActive(false);
                }}>
                    <ExpandedMenu className={isActive ? 'show-menu' : ''}/>
                </OutsideClickHandler>
            </div>
            <span className="mobile-menu-button" onClick={toggleDropdown}>
                    <i className="fa fa-bars"></i>
                <OutsideClickHandler onOutsideClick={() => {
                    setCollapseMenu(false);
                }}>
                    <div className={`mobile-links ${collapseMenu ? 'collapse' : ''}`}>
                        <li className={`navbar__item mobile page-link ${window.location.pathname === '/lists' ? 'active' : ''}`}>
                    <a href="lists" className="navbar__link">
                            <span className="menu-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list"
                                     className="svg-inline--fa fa-th-list fa-w-16" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"/>
                                </svg>
                            </span>
                        <label className="menu-label">Lists</label>
                    </a>
                </li>
                        <li className={`navbar__item mobile page-link ${window.location.pathname === '/search' ? 'active' : ''}`}>
                    <a href="search" className="navbar__link">
                            <span className="menu-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="search"
                                     className="svg-inline--fa fa-search fa-w-16" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512">
                                <path
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                                </svg>
                            </span>
                        <label className="menu-label">Search</label>
                    </a>
                </li>
                    </div>
                    </OutsideClickHandler>
                </span>
        </ul>
    </nav>);
}

export default NavBar;
