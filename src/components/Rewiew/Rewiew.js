import style from './rewiew.module.scss';
import { MdOutlineStarPurple500 } from "react-icons/md";

function stars(stars) {
    let arr = [];
    for (let i = 0; i < stars; i++) {
        arr.push(<MdOutlineStarPurple500 key={i} size={18} color="#EE9972" />);
    }
    return arr;
}

const Rewiew = (props) => {
    return (
        <div className={style.card}>
            <img src={props.img} alt={props.title} />
            <div className={style.info}>
                <div className={style.stars}>{stars(props.stars)}</div>
                <p className={style.info_text}>{props.text}</p>
            </div>
        </div>
    );
}

export default Rewiew;
