import style from './header.module.scss';
import {Link} from "react-router-dom";
import logo from './LogoHeader.png';
import scrollToAbout from "../../utils/scrollToAbout";
import scrollToSpecialSection from "../../utils/scrollToSpecialSection";

const Header = () => {
    return (
        <header className={style.header} type="header">
            <div className={style.border}>
                <Link to="/" className="logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <nav className={style.navbar}>
                    <div className={style.navlink}><Link to={"/"}>Home</Link></div>
                    <div className={style.navlink} onClick={scrollToAbout}><Link to={"/home#about"}>About</Link></div>
                    <div className={style.navlink}><Link to={"/menu"}>Menu</Link></div>
                    <div className={style.navlink}><Link to={"/reservation"}>Reservation</Link></div>
                    <div className={style.navlink} onClick={scrollToSpecialSection}><Link to={"/home#online-order"}>Online Order</Link></div>
                    <div className={style.navlink}><Link to={"/"}>Login</Link></div>
                </nav>
            </div>
        </header>
    )
}
export default Header;