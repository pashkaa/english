import s from "./Learn.module.css"

export const Learn = () => {

    return (
        <div className={s.learnContainer}>
            <div className={s.learnContainer2}>
                <div className={s.learnContainer2__text}>
                    <p>Вивчення нових слів:</p>
                </div>
                <div className={s.learnContainer2__level}>
                    <p>Рівень A1:</p>
                    <div className={s.learnContainer2__level_table}>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>Дієслово</span><span>Транскрипція</span><span>Переклад</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>To be</span><span>[tə biː]</span><span>Бути</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>water</span><span>[ˈwɔːtə(r)]</span><span>Вода</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>west</span><span>[west]</span><span>Захід</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>south</span><span>[saʊθ]</span><span>Південь</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>night</span><span>[naɪt]</span><span>Ніч</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>morning</span><span>[ˈmɔːnɪŋ]</span><span>Ранок</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>fire</span><span>[ˈfaɪə(r)]</span><span>Вогонь</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>city</span><span>[ˈsɪti]</span><span>Місто</span>
                        </div>
                        <div className={s.learnContainer2__level_table__item}>
                            <span>world</span><span>[wɜːld]</span><span>мир</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}