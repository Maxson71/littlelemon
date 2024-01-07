import style from './special-section.module.scss';
import Button from "../../components/Button/Button";
import SpecialCard from "../../components/SpecialCard/SpecialCard";
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';

const SpecialSection = () => {
    return (
        <section className={style.section} id='specialSection'>
            <div className={style.border}>
                <div className={style.head}>
                    <h2>This weeks specials</h2>
                    <Button text={'Online Order'}></Button>
                </div>
                <div className={style.specialcards}>
                    <SpecialCard img={img1}
                                 title={'Greek salad'}
                                 price={'$12.99'}
                                 text={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    ></SpecialCard>
                    <SpecialCard img={img2}
                                 title={'Bruchetta'}
                                 price={'$5.99'}
                                 text={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
                    ></SpecialCard>
                    <SpecialCard img={img3}
                                 title={'Lemon Dessert'}
                                 price={'$5.00'}
                                 text={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    ></SpecialCard>
                </div>
            </div>
        </section>
    )
}
export default SpecialSection;

