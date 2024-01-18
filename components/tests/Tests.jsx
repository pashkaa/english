import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import s from "./Tests.module.css"

export const Tests = () => {

    const navigate = useNavigate();

    const relocate = (link) => {
        navigate(link)
    }

    const [tests, setTests] = useState([
        {title: "Grammar", color: "red", photo: 'https://www.test-english.com/img/test-english-home-Grammar-points.jpg'}, 
        {title: "Vocabulary", color: "blue", photo: 'https://www.test-english.com/img/test-english-home-Vocabulary.jpg'}, 
        {title: "Use of English", color: "green", photo: 'https://www.test-english.com/img/test-english-home-Use-of-english.jpg'},
    ]);

    return (
        <div className={s.container}>
            <div className={s.container2}>
                <h1>Доступні тести:</h1>
                <div className={s.container2__tests}>
                    {tests.map(el => {
                        return (
                            <div className={s.test} key={el.title + el.photo}>
                                <div className={s.test_photo} style={{backgroundImage: `url(${el.photo})`}}></div>
                                <div className={s.test_text}>{el.title}</div>
                                <div className={s.test_buttonContainer}>
                                    <button className={s.test_buttonContainer__button} onClick={() => relocate(`./test/${el.title}`)}>
                                        Start Test
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}