import style from './reservation.module.scss'
import {useState} from "react";
import {TfiArrowCircleRight, TfiArrowCircleLeft} from "react-icons/tfi";

const Reservation = () => {
    const currentDate = new Date().toISOString().split('T')[0];

    const [currentStep, setCurrentStep] = useState(1)
    const [inputDateType, setInputDateType] = useState('text');
    const [inputStartTimeType, setInputStartTimeType] = useState('text');
    const [inputDurationTimeType, setInputDurationTimeType] = useState('text');

    const handleNextStep = () => {
        if (currentStep !== 3) {
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
                    <div className={style.colums}>
                        <div className={style.column}>
                            <input
                                type={inputDateType}
                                className={style.small_input}
                                min={currentDate}
                                onFocus={() => setInputDateType('date')}
                                onBlur={() => setInputDateType('text')}
                                placeholder="Pick a date"
                            />
                            <input
                                type={inputStartTimeType}
                                className={style.small_input}
                                onFocus={() => setInputStartTimeType('time')}
                                onBlur={() => setInputStartTimeType('text')}
                                placeholder="Pick start time"
                            />
                            <input
                                type="number"
                                className={style.small_input}
                                min={1}
                                max={32}
                                placeholder="Number of guests"
                            />
                        </div>

                        <div className={style.column}>
                            <div className={style.radiobox}>
                                <label className={style.radio}>
                                    <input type="radio" name="location" />
                                    <span>Indoor</span>
                                </label>

                                <label className={style.radio}>
                                    <input type="radio" name="location" />
                                    <span>Outdoor</span>
                                </label>
                            </div>
                            <input
                                type={inputDurationTimeType}
                                className={style.small_input}
                                onFocus={() => setInputDurationTimeType('time')}
                                onBlur={() => setInputDurationTimeType('text')}
                                placeholder="Pick duration time"
                            />
                            <select className={style.small_input}>
                                <option value="birthday">Birthday</option>
                                <option value="occasion">Occasion</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <textarea
                        className={style.big_input}
                        placeholder="Add special request"
                        rows={4}
                        cols={50}
                    />
                </>
            )
        } else if (currentStep === 2) {
            return (
                <>
                    <div className={style.colums}>
                        <div className={style.column}>
                            <input
                                type="text"
                                className={style.small_input}
                                placeholder="First name"
                            />
                            <input
                                type="email"
                                className={style.small_input}
                                placeholder="Email"
                            />
                        </div>
                        <div className={style.column}>
                            <input
                                type="text"
                                className={style.small_input}
                                placeholder="Last name"
                            />
                            <input
                                type="tel"
                                className={style.small_input}
                                placeholder="Phone number"
                            />
                        </div>
                    </div>

                </>
            )
        } else if (currentStep === 3) {
            return (
                <>
                    <input
                        type="number"
                        className={style.input}
                        placeholder="Card Number"
                    />
                    <div className={style.colums}>
                        <div className={style.column}>
                            <input
                                type="number"
                                className={style.small_input}
                                placeholder="Month"
                                min={1}
                                max={12}
                            />
                            <input
                                type="number"
                                className={style.small_input}
                                placeholder="CVV"
                                min={0}
                                max={999}
                            />
                        </div>
                        <div className={style.column}>
                            <input
                                type="number"
                                className={style.small_input}
                                placeholder="Year"
                                min={2024}
                                max={2050}
                            />
                            <button
                                type="button"
                                className={style.confirm}
                                onClick={() => setCurrentStep(currentStep + 1)}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>

                </>
            )
        }
    }


    return (
    <main>
        <div className={style.title}>
            <h1>Reservation</h1>
        </div>
        {currentStep!==4?
        <div className={style.border}>
            <nav className={style.nav}>
                <div className={currentStep === 1 ? style.activestep : style.step}>
                    1. FIND A TABLE
                </div>
                <div className={currentStep === 2 ? style.activestep : style.step}>
                    2. YOUR DETAILS
                </div>
                <div className={currentStep === 3 ? style.activestep : style.step}>
                    3. PAYMENT
                </div>
            </nav>
            <form action="" className={style.form}>
                {curentForm()}
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
                        disabled={currentStep === 3}
                    >
                        <TfiArrowCircleRight size={50} color={currentStep === 3 ? "#9C9C9C" : "#616161"}/>
                    </button>
                </div>
            </form>
        </div>
            :
            <div className={style.successful}>
                <h1>The reservation is successful!</h1>
            </div>
        }
    </main>
  )
}

export default Reservation