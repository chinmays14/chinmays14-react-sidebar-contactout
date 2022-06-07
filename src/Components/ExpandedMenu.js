import account from '../Assets/account.jpeg';
import rightChevron from '../Assets/right-chevron.svg';
import '../App.css';
import {useState} from "react";
import OutsideClickHandler from 'react-outside-click-handler';

function ExpandedMenu(props) {
    const [showSubMenu, setSubMenu] = useState(false);

    const toggleClass = () => {
        setSubMenu(!showSubMenu);
    };


    return (
        <div className={`hover-menu ${props.className}`}>
            <div className="profile-header">
                <img src={account} alt="profile" className="profile-image"/>
                <div className="profile-name">Steve Wozniak</div>
            </div>
            <div className="profile-menu">
                <div className="main-menu">
                    <li onClick={toggleClass} className={`${showSubMenu ? 'highlight-menu' : ''}`}
                    >Account
                        <span className="sub-menu-icon">
                            <img src={rightChevron} alt="right-icon"/>
                        </span>
                    </li>
                    <li>Your Exports</li>
                    <li>Integrations</li>
                    <li className="log-out">Log out</li>
                </div>
                <div className={`account-submenu ${showSubMenu ? 'show-sub-menu' : ''} `}>
                    <OutsideClickHandler onOutsideClick={() => {
                        setSubMenu(false);
                    }}>
                        <li className="sub-menu">Personal Data</li>
                        <li className="sub-menu">Change Email</li>
                        <li className="sub-menu">Change Password</li>
                    </OutsideClickHandler>
                </div>

                <span className="arrow-left"></span>
            </div>
        </div>
    );
}

export default ExpandedMenu;
