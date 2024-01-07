import style from './hero-section.module.scss';
import Button from "../../components/Button/Button";
import img from './Rectangle.png';
import {Link} from "react-router-dom";
const HeroSection = () => {
    return (
        <section className={style.section}>
            <div className={style.border}>
                <div className={style.info}>
                    <div>
                        <h1>
                            Little Lemon
                        </h1>
                        <h3>
                            Chicago
                        </h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to={"/reservation"}><Button text="Reserve a Table"/></Link>
                </div>
                <img className={style.img} src={img} alt=""/>
            </div>
        </section>
    )
}
export default HeroSection;

