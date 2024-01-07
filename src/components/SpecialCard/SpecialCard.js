import style from './specialcard.module.scss';
import { IoIosBicycle } from "react-icons/io";

const SpecialCard = (props) => {
    return (
        <div className={style.card}>
            <img src={props.img} alt={props.title}/>
            <div className={style.info}>
                <div className={style.head_info}>
                    <h3 className={style.title} >{props.title}</h3>
                    <p className={style.price} >{props.price}</p>
                </div>
                <p className={style.info_text}>{props.text}</p>
                <div className={style.order}>
                    <p>Order a delivery</p>
                    <IoIosBicycle size={22}/>
                </div>
            </div>
        </div>
    )
}
export default SpecialCard;