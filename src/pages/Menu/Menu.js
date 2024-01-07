import style from './menu.module.scss'
import {useState} from "react";
import {TfiArrowCircleRight, TfiArrowCircleLeft} from "react-icons/tfi";
import SpecialCard from "../../components/SpecialCard/SpecialCard";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

const Menu = () => {
    const [currentStep, setCurrentStep] = useState(1)

    const handleNextStep = () => {
        if (currentStep !== 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep !== 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const curentForm = () => {
        if (currentStep === 1) {
            return (
                <>
                    <SpecialCard img={img1}
                                 title={'Greek salad'}
                                 price={'$12.99'}
                                 text={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    ></SpecialCard>
                    <SpecialCard img={img1}
                                 title={'Greek salad'}
                                 price={'$12.99'}
                                 text={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    ></SpecialCard>
                    <SpecialCard img={img1}
                                 title={'Greek salad'}
                                 price={'$12.99'}
                                 text={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "}
                    ></SpecialCard>
                </>
            )
        } else if (currentStep === 2) {
            return (
                <>
                    <SpecialCard img={img2}
                                 title={'Bruchetta'}
                                 price={'$5.99'}
                                 text={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
                    ></SpecialCard>
                    <SpecialCard img={img2}
                                 title={'Bruchetta'}
                                 price={'$5.99'}
                                 text={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
                    ></SpecialCard>
                    <SpecialCard img={img2}
                                 title={'Bruchetta'}
                                 price={'$5.99'}
                                 text={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "}
                    ></SpecialCard>
                </>
            )
        } else if (currentStep === 3) {
            return (
                <>
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
                </>
            )
        } else if (currentStep === 4) {
            return (
                <>
                    <SpecialCard img={img3}
                                 title={'Lemon Dessert'}
                                 price={'$5.00'}
                                 text={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    ></SpecialCard>
                    <SpecialCard img={img3}
                                 title={'Lemon Dessert'}
                                 price={'$5.00'}
                                 text={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    ></SpecialCard>
                    <SpecialCard img={img3}
                                 title={'Lemon Dessert'}
                                 price={'$5.00'}
                                 text={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    ></SpecialCard>
                </>
            )
        }

    }


    return (
    <main>
        <div className={style.title}>
            <h1>Menu</h1>
        </div>
        <div className={style.border}>
            <nav className={style.nav}>
                <div
                    onClick={() => setCurrentStep(1)}
                    className={currentStep === 1 ? style.activestep : style.step}
                >
                    Starters
                </div>
                <div
                    onClick={() => setCurrentStep(2)}
                    className={currentStep === 2 ? style.activestep : style.step}
                >
                    Beverage
                </div>
                <div
                    onClick={() => setCurrentStep(3)}
                    className={currentStep === 3 ? style.activestep : style.step}
                >
                    Main
                </div>
                <div
                    onClick={() => setCurrentStep(4)}
                    className={currentStep === 4 ? style.activestep : style.step}
                >
                    Desert
                </div>
            </nav>
            <div className={style.specialcards}>
                {curentForm()}
            </div>
            <div className={style.navigationButtons}>
                <button
                    type="button"
                    onClick={handlePreviousStep}
                    disabled={currentStep === 1}
                >
                    <TfiArrowCircleLeft size={50} color={currentStep === 1 ? "#9C9C9C" : "#616161"}/>
                </button>
                <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={currentStep === 4}
                >
                    <TfiArrowCircleRight size={50} color={currentStep === 4 ? "#9C9C9C" : "#616161"}/>
                </button>
            </div>
        </div>
    </main>
  )
}

export default Menu