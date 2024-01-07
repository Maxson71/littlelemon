import style from './footer.module.scss';
import {Link} from "react-router-dom";
import logo from './LogoFooter.png';
import scrollToAbout from "../../utils/scrollToAbout";

const Footer = () => {
    return (
        <footer className={style.footer} type="footer">
            <div className={style.border}>
                <Link to="/">
                    <img className={style.logo} src={logo} alt="logo"/>
                </Link>
                <div className={style.menu}>
                    <div className={style.info}>
                        <div className={style.title}>Doormat Navigation</div>
                        <nav className={style.navbar}>
                            <div className={style.navlink} onClick={scrollToAbout}><Link to={"/home#about"}>About</Link></div>
                            <div className={style.navlink}><Link to={"/menu"}>Menu</Link></div>
                            <div className={style.navlink}><Link to={"/reservation"}>Reservation</Link></div>
                            <div className={style.navlink}><Link to={"/online-order"}>Online Order</Link></div>
                            <div className={style.navlink}><Link to={"/"}>Login</Link></div>
                        </nav>
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>Contact</div>
                        <nav className={style.navbar}>
                            <div className={style.navlink}><Link to={"/"}>Adress</Link></div>
                            <div className={style.navlink}><Link to={"/"}>Phone</Link></div>
                            <div className={style.navlink}><Link to={"/"}>Email</Link></div>
                        </nav>
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>Social link</div>
                        <nav className={style.navbar}>
                            <div className={style.navlink}><Link to={"/"}>Facebook</Link></div>
                            <div className={style.navlink}><Link to={"/"}>Twitter</Link></div>
                            <div className={style.navlink}><Link to={"/"}>YouTube</Link></div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;