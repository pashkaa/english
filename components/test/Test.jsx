import { useEffect, useState } from "react"
import s from "./Test.module.css"
import { Routes, Route, useParams } from 'react-router-dom';

export const Test = () => {
    let { id } = useParams();
    const [grammarTests, setGrammarTests] = useState([
        {id: 1, text1: 'We', text2: 'to Vancouver on holiday.', answers: ['went','goed','did go'], correctAnswer: 'went'},
        {id: 2, text1: '', text2: 'by plane?', answers: ['Did you went','went you','Did you go'], correctAnswer: 'Did you go'},
        {id: 3, text1: 'Jack', text2: 'with us.', answers: ['didn`t came','wasn`t come','didn`t come'], correctAnswer: 'didn`t come'},
        {id: 4, text1: 'The car suddenly', text2: '', answers: ['stopped','stoped','did stop'], correctAnswer: 'stopped'},
        {id: 5, text1: 'When she arrived he', text2: 'at home.', answers: ['weren`t','didn`t was','wasn`t'], correctAnswer: 'wasn`t'},
        {id: 6, text1: 'The police', text2: 'the robber.', answers: ['was catch','catched','caught'], correctAnswer: 'caught'},
        {id: 7, text1: 'I', text2: 'a black shirt for the gala.', answers: ['did choose','choosed','chose'], correctAnswer: 'chose'},
        {id: 8, text1: 'The meeting', text2: 'well.', answers: ['didn`t went','went not','didn`t go'], correctAnswer: 'didn`t'},
        {id: 9, text1: 'Manchester United', text2: 'the final', answers: ['losed','lost','did lose'], correctAnswer: 'lost'},
        {id: 10, text1: 'How much', text2: 'for the car?', answers: ['did you pay','did you payed','payed you'], correctAnswer: 'did you pay'},
    ])

    const [vocabularyTests, setVocabularyTests] = useState([
        {id: 1, text1: 'A', text2: 'is a bag that you carry on your back.', answers: ['TV','backpack','umbrella'], correctAnswer: 'backpack'},
        {id: 2, text1: 'A', text2: 'is something that you read.', answers: ['book','shoes','mobile phone'], correctAnswer: 'book'},
        {id: 3, text1: 'A', text2: 'is a thing you use to carry money and credit cards.', answers: ['house','wallet','computer'], correctAnswer: 'wallet'},
        {id: 4, text1: 'A', text2: 'is something you watch for entertainment.', answers: ['TV','car','house'], correctAnswer: 'TV'},
        {id: 5, text1: 'A', text2: 'is a place where people live.', answers: ['umbrella','car','house'], correctAnswer: 'house'},
        {id: 6, text1: 'A', text2: 'is a vehicle you drive to move from one place to another.', answers: ['car','wallet','mobile phone'], correctAnswer: 'car'},
        {id: 7, text1: '', text2: 'are things that you wear on your feet..', answers: ['book','shoes','wallet'], correctAnswer: 'shoes'},
        {id: 8, text1: 'A', text2: 'is a machine you use to play games and do work.', answers: ['computer','backpack','book'], correctAnswer: 'computer'},
        {id: 9, text1: 'A', text2: 'is something you use to communicate with others.', answers: ['mobile phone','shoes','book'], correctAnswer: 'mobile phone'},
        {id: 10, text1: 'An', text2: 'is an object that protects you from the rain.', answers: ['wallet','backpack','umbrella'], correctAnswer: 'umbrella'},
    ])

    const [useOfEnglishTests, setUseOfEnglishTests] = useState([
        {id: 1, answers: ['`m writing','`ve written','write'], correctAnswer: '`m writing'},
        {id: 2, answers: ['`m travelling','travel','travelled'], correctAnswer: 'travelled'},
        {id: 3, answers: ['at','in','on'], correctAnswer: 'on'},
        {id: 4, answers: ['will stay','`re going to stay','stay'], correctAnswer: '`re going to stay'},
        {id: 5, answers: ['stayed','stay','are staying'], correctAnswer: 'are staying'},
        {id: 6, answers: ['the cheapest','cheaper','more cheap'], correctAnswer: 'cheaper'},
        {id: 7, answers: ['many','much','some'], correctAnswer: 'many'},
        {id: 8, answers: ['the','a','-'], correctAnswer: '-'},
        {id: 9, answers: ['quietly','quieter','quiet'], correctAnswer: 'quietly'},
        {id: 10, answers: ['drove','drived','were drive'], correctAnswer: 'drove'},
        {id: 11, answers: ['the most amazing','the more amazing','the amazingest'], correctAnswer: 'the most amazing'},
        {id: 12, answers: ['Next','On the next','The next'], correctAnswer: 'Next'},
        {id: 13, answers: ['I','my','me'], correctAnswer: 'me'},
        {id: 14, answers: ['some','no','any'], correctAnswer: 'any'},
        {id: 15, answers: ['can be','cans be','can to be'], correctAnswer: 'can be'},
    ])

    const [selectedTests, setSelectedTests] = useState([])

    useEffect(() => {
        if (id === "Grammar") setSelectedTests(grammarTests)
        if (id === "Vocabulary") setSelectedTests(vocabularyTests)
        if (id === "Use of English") setSelectedTests(useOfEnglishTests)
    }, [])

    const [isDone, setIsDone] = useState(false)
    const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] = useState(0);

    const AnswersArray = [
        '','','','','','','','','',''
    ];

    const AnswersArray2 = [
        '','','','','','','','','','','','','','',''
    ];

    const setCorrectValue = (event, id) => {
        AnswersArray[id - 1] = event.target.value
    }

    const setCorrectValue2 = (event, id) => {
        AnswersArray2[id] = event.target.value
    }

    const checkUnswers = () => {
        for (let index = 0; index < AnswersArray.length; index++) {
            if (selectedTests[index].correctAnswer === AnswersArray[index]) {
                setAmountOfCorrectAnswers(prev => prev + 1)
            }
        }
        setIsDone(true)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const checkUnswers2 = () => {
        for (let index = 0; index < AnswersArray2.length; index++) {
            if (useOfEnglishTests[index].correctAnswer === AnswersArray2[index]) {
                setAmountOfCorrectAnswers(prev => prev + 1)
            }
        }
        setIsDone(true)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        console.log(amountOfCorrectAnswers);
    }

    return (
        <div className={s.container}>
            <div className={s.container2}>
                <div className={s.container2__text}>
                    <h2>{id} test</h2>
                </div>
                <div className={s.container_flex}>
                    <div className={s.container2__test}>
                        <p>Exercise 1</p>

                        {
                            id.includes("Vocabulary") || id.includes("Grammar") ?
                            <div>
                                <div className={s.container2__test_container}>
                                    <p className={s.container2__test__container_text1}>Choose the correct past simple forms to complete the sentences below.</p>
                                </div>
                                <div className={s.container2__test_gtest}>
                                    {
                                        selectedTests.map(el => {
                                            return (
                                                <div className={s.gtest} key={el.id + el.text2}>
                                                    <p>
                                                        {el.id}. {el.text1}

                                                        <select name="" id="" onChange={(event) => setCorrectValue(event, el.id)}>
                                                            <option value=""></option>

                                                            {el.answers.map(answer => {

                                                                return(

                                                                    <option value={answer} key={answer}>{answer}</option>
                                                            
                                                                )

                                                            })}

                                                        </select>

                                                        {el.text2}
                                                    </p>
                                                </div>
                                            )
                                        } )
                                    }
                                </div>
                                <div className={s.container2__buttonContainer}>
                                    <button onClick={checkUnswers} disabled={isDone}>Check Unswers</button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className={s.container2__test_container}>
                                    <p className={s.container2__test__container_text1}>Read the text and choose the correct answer for each gap.</p>
                                </div>
                                <div className={s.container2__test_gtest}>
                                    <p className={s.container2__test_gtest_text}>
                                        Hi, John!<br></br>
                                        How are you doing? I 
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 0)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[0].answers[0]}>{useOfEnglishTests[0].answers[0]}</option>
                                            <option value={useOfEnglishTests[0].answers[1]}>{useOfEnglishTests[0].answers[1]}</option>
                                            <option value={useOfEnglishTests[0].answers[2]}>{useOfEnglishTests[0].answers[2]}</option>
                                        </select> 
                                        to you from Tulum, a wonderful place on the Caribbean coast of Mexico. I 
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 1)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[1].answers[0]}>{useOfEnglishTests[1].answers[0]}</option>
                                            <option value={useOfEnglishTests[1].answers[1]}>{useOfEnglishTests[1].answers[1]}</option>
                                            <option value={useOfEnglishTests[1].answers[2]}>{useOfEnglishTests[1].answers[2]}</option>
                                        </select> 
                                        here with my family six days ago. We arrived
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 2)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[2].answers[0]}>{useOfEnglishTests[2].answers[0]}</option>
                                            <option value={useOfEnglishTests[2].answers[1]}>{useOfEnglishTests[2].answers[1]}</option>
                                            <option value={useOfEnglishTests[2].answers[2]}>{useOfEnglishTests[2].answers[2]}</option>
                                        </select> 
                                        Wednesday morning, and we
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 3)}>
                                            <option value=""></option>
                                            <option value={useOfEnglishTests[3].answers[0]}>{useOfEnglishTests[3].answers[0]}</option>
                                            <option value={useOfEnglishTests[3].answers[1]}>{useOfEnglishTests[3].answers[1]}</option>
                                            <option value={useOfEnglishTests[3].answers[2]}>{useOfEnglishTests[3].answers[2]}</option>
                                        </select> 
                                        for one more week.

                                        We
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 4)}>
                                            <option value=""></option>
                                            <option value={useOfEnglishTests[4].answers[0]}>{useOfEnglishTests[4].answers[0]}</option>
                                            <option value={useOfEnglishTests[4].answers[1]}>{useOfEnglishTests[4].answers[1]}</option>
                                            <option value={useOfEnglishTests[4].answers[2]}>{useOfEnglishTests[4].answers[2]}</option>
                                        </select> 
                                        in a fantastic hotel on the beach. The hotel is
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 5)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[5].answers[0]}>{useOfEnglishTests[5].answers[0]}</option>
                                            <option value={useOfEnglishTests[5].answers[1]}>{useOfEnglishTests[5].answers[1]}</option>
                                            <option value={useOfEnglishTests[5].answers[2]}>{useOfEnglishTests[5].answers[2]}</option>
                                        </select> 
                                        than most hotels in Europe, and the weather is very nice. There aren't 
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 6)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[6].answers[0]}>{useOfEnglishTests[6].answers[0]}</option>
                                            <option value={useOfEnglishTests[6].answers[1]}>{useOfEnglishTests[6].answers[1]}</option>
                                            <option value={useOfEnglishTests[6].answers[2]}>{useOfEnglishTests[6].answers[2]}</option>
                                        </select>  
                                        tourists at the moment, because it's the low season, and that is perfect, because I don't like
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 7)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[7].answers[0]}>{useOfEnglishTests[7].answers[0]}</option>
                                            <option value={useOfEnglishTests[7].answers[1]}>{useOfEnglishTests[7].answers[1]}</option>
                                            <option value={useOfEnglishTests[7].answers[2]}>{useOfEnglishTests[7].answers[2]}</option>
                                        </select>  
                                        tourists. I like to relax
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 8)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[8].answers[0]}>{useOfEnglishTests[8].answers[0]}</option>
                                            <option value={useOfEnglishTests[8].answers[1]}>{useOfEnglishTests[8].answers[1]}</option>
                                            <option value={useOfEnglishTests[8].answers[2]}>{useOfEnglishTests[8].answers[2]}</option>
                                        </select>  
                                        on the beach.

                                        Yesterday we rented a car and we
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 9)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[9].answers[0]}>{useOfEnglishTests[9].answers[0]}</option>
                                            <option value={useOfEnglishTests[9].answers[1]}>{useOfEnglishTests[9].answers[1]}</option>
                                            <option value={useOfEnglishTests[9].answers[2]}>{useOfEnglishTests[9].answers[2]}</option>
                                        </select>   
                                        to different spots along the coast. I saw some of
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 10)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[10].answers[0]}>{useOfEnglishTests[10].answers[0]}</option>
                                            <option value={useOfEnglishTests[10].answers[1]}>{useOfEnglishTests[10].answers[1]}</option>
                                            <option value={useOfEnglishTests[10].answers[2]}>{useOfEnglishTests[10].answers[2]}</option>
                                        </select>  
                                        views in Mexico.

                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 11)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[11].answers[0]}>{useOfEnglishTests[11].answers[0]}</option>
                                            <option value={useOfEnglishTests[11].answers[1]}>{useOfEnglishTests[11].answers[1]}</option>
                                            <option value={useOfEnglishTests[11].answers[2]}>{useOfEnglishTests[11].answers[2]}</option>
                                        </select>   
                                        Saturday we're going to buy some souvenirs and finally on Sunday we're coming back home.

                                        I'll tell you everything when I come back. Would you like to have dinner with
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 12)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[12].answers[0]}>{useOfEnglishTests[12].answers[0]}</option>
                                            <option value={useOfEnglishTests[12].answers[1]}>{useOfEnglishTests[12].answers[1]}</option>
                                            <option value={useOfEnglishTests[12].answers[2]}>{useOfEnglishTests[12].answers[2]}</option>
                                        </select>  
                                        one day?

                                        I want to thank you for taking care of my cat. I hope you aren't having
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 13)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[13].answers[0]}>{useOfEnglishTests[13].answers[0]}</option>
                                            <option value={useOfEnglishTests[13].answers[1]}>{useOfEnglishTests[13].answers[1]}</option>
                                            <option value={useOfEnglishTests[13].answers[2]}>{useOfEnglishTests[13].answers[2]}</option>
                                        </select> 
                                        problems. She
                                        <select name="" id="" onChange={(event) => setCorrectValue2(event, 14)}>
                                            <option value=""></option>  
                                            <option value={useOfEnglishTests[14].answers[0]}>{useOfEnglishTests[14].answers[0]}</option>
                                            <option value={useOfEnglishTests[14].answers[1]}>{useOfEnglishTests[14].answers[1]}</option>
                                            <option value={useOfEnglishTests[14].answers[2]}>{useOfEnglishTests[14].answers[2]}</option>
                                        </select>  
                                        a bit annoying sometimes. <br></br>

                                        Bye for now! <br></br>

                                        Kate.
                                    </p>
                                </div>
                                <div className={s.container2__buttonContainer}>
                                    <button onClick={checkUnswers2} disabled={isDone}>Check Unswers</button>
                                </div>
                            </div>
                            
                        }
                    </div>
                    {
                        isDone ? 
                        <div className={s.container2__answers}>
                            <p>Correct answers: {amountOfCorrectAnswers}/{AnswersArray2.length}.</p>
                            <p>Your score is {((amountOfCorrectAnswers/AnswersArray2.length) * 100).toFixed(2)}%</p>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}