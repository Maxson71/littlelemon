import style from './about.module.scss';
import img from './Rectangle.png';
const About = () => {
    return (
        <section className={style.section} id="about">
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
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.                     </p>
                </div>
                <img className={style.img} src={img} alt=""/>
            </div>
        </section>
    )
}
export default About;

