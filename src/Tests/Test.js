import React from 'react';
import {useState} from "react";
import Carousel from "./Carousel";
import {useEffect} from "react";

const arr = [];

const Test = () => {


    const [tests, setTests] = useState([
        {id:1, question: 'Capital of Poland?', answer: 'Warshaw'},
        {id:2, question: 'Capital of Ukraine?', answer: 'Kyiv'},
        {id:3, question: 'Capital of Turkey?', answer: 'Ankara'},
        {id:4, question: 'Capital of Saqartvelos?', answer: 'Tbilisi'},
        {id:5, question: 'Capital of Great Britain?', answer: 'London'},
    ])
    const [checkAnswer, setCheckAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const checkTest = () => {
        if (tests.find( item => item.answer === checkAnswer) !== undefined){
            arr.push( `${checkAnswer} is OK`);
            setIsCorrect(true)
            console.log(isCorrect)
        } else {
            arr.push( `${checkAnswer} is NOT OK`);
            setIsCorrect(false)
            console.log(isCorrect)
        }

    }

    const showResultHandler = () => {
      return console.log(arr)
    }

    return (
        <>
            <Carousel>
                {tests.map(element=>(
                    <div key={element.id} className='item item-1'>
                        <p>{element.question}</p>
                        <input onChange={e=>setCheckAnswer(e.target.value)}
                        />
                        <button onClick={checkTest}>check</button>
                    </div>
                ))}
            </Carousel>
            <button onClick={showResultHandler}>SHOW RESULT</button>
        </>
    );
};

export default Test;

