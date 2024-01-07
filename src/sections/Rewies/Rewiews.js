import style from './rewiews.module.scss';
import Rewiew from "../../components/Rewiew/Rewiew";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";


const Rewiews = () => {
    return (
        <section className={style.section}>
            <div className={style.border}>
                <h2 className={style.title}>Rewiews</h2>
                <div className={style.rewiews}>
                    <Rewiew
                        img={img1}
                        stars={5}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
                    />
                    <Rewiew
                        img={img2}
                        stars={4}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
                    />
                    <Rewiew
                        img={img3}
                        stars={4}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
                    />
                    <Rewiew
                        img={img4}
                        stars={5}
                        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
                    />

                </div>
            </div>
        </section>
    )
}
export default Rewiews;

