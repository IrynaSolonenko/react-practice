import React, {useEffect, useState} from 'react';


const Questions = () => {
    const [questions, setQuestions] = useState([
        {id:1, question: 'Capital of Poland?', answer: 'Warshaw'},
        {id:2, question: 'Capital of Ukraine?', answer: 'Kyiv'},
        {id:3, question: 'Capital of Turkey?', answer: 'Ankara'},
        {id:4, question: 'Capital of Saqartvelos?', answer: 'Tbilisi'},
        {id:5, question: 'Capital of Great Britain?', answer: 'London'},
    ])

    const [randomNumber, setRandomNumber] = useState(0);
    const [checkAnswer, setCheckAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(()=>{
        console.log('useffect', isCorrect)
    }, [isCorrect])

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
    }

    const checkTest = () => {
        if (questions.find( item => item.answer === checkAnswer) !== undefined) setIsCorrect( true)
        else setIsCorrect( false)
    }

    return (
        <div>
            <p>{questions.map(question=>{
                if (randomNumber === question.id) return question.question
            })}
            </p>

            <button onClick={checkTest}>check</button>
            <button onClick={()=>getRandomIntInclusive(0, questions.length)}>change</button>
            <input onChange={e=>setCheckAnswer(e.target.value)}
                   value={checkAnswer}
            className={ isCorrect ? 'green' : 'red'}
            />
            <p>{isCorrect ? '✅' : '❌'}</p>
        </div>
    );
};



export default Questions;