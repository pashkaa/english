import s from "./CenterContent.module.css"
import { useNavigate } from 'react-router-dom';

export const CenterContent = () => {
    const navigate = useNavigate();

    const relocate = () => {
        navigate('/tests')
    }

    return (
        <div className={s.centerContainer}>
            <div className={s.centerContainer2}>
                <section>
                    <p className={s.centerContainer2__first_paragraph}>Ласкаво просимо до <span className={s.english_learner}>"English Learner"</span> <br></br> Вашого особистого провідника у світ англійської мови!</p>
                    <p className={s.centerContainer2__second_paragraph}>Хочете покращити свої навички англійської мови легко та ефективно? "English Learner" - це саме те, що вам потрібно! Наш веб-додаток спеціально розроблений для тих, хто шукає зручний і захоплюючий спосіб вивчення англійської мови, будь-якого рівня володіння.</p>
                </section>
                <section>
                    <div className={s.secondSection}>
                        Основні переваги "English Learner":
                    </div>
                    <div className={s.differentSides}>
                        <div className={s.leftSide}>
                            <h2>Захоплюючі уроки:</h2>
                             - Наші уроки створені з використанням сучасних методів вивчення, щоб зробити ваше навчання цікавим та ефективним.
                        </div>
                        <div className={s.rightSide}>
                            <h2>Зручність в навчанні:</h2>
                            - Наш інтуїтивно зрозумілий інтерфейс робить навчання легким і приємним.
                        </div>
                    </div>
                </section>
                <section className={s.buttonContainer}>
                    <button className={s.button} onClick={() => relocate()}>
                        Перейти до тестів
                    </button>
                </section>
            </div>
        </div>
    )
}