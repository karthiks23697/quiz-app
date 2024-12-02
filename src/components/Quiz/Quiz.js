import React, { useState, useRef, useEffect } from "react";
import './Quiz.css';
function Quiz() {
    const qBank = [
        {
            id: 1,
            question: "What is the capital of Haryana?",
            options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
            answer: "Chandigarh",
        },
        {
            id: 2,
            question: "What is the capital of Punjab?",
            options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
            answer: "Chandigarh",
        }
    ];
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setTime((time) => time + 10);
        }, 10);
        
        return () => {
            clearInterval(interval);
        };
    });
    return(
        <div className="">
            <h2>Quiz</h2>
            <div className="timer">
                <span className="digits">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="digits">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
            {qBank.map((question, index) => (
                <div class="textalign-left">
                    <h5 className="mt-2">{question.id}.{question.question}</h5>
                    <form className="mt-2 mb-2">
                        <div className='options'>
                        {question.options.map((option, index) => (
                            <div key={index} className="form-check">
                                <input
                                    type="radio"
                                    name="option"
                                    value={option}
                                    // checked={selectedOption === option}
                                    // onChange={onOptionChange}
                                    className="form-check-input"
                                />
                                <label className="form-check-label">{option}</label>
                            </div>
                        ))}
                        </div>
                            <button type="submit" className="btn btn-primary mt-2 quiz-btn">
                                SUBMIT
                            </button>
                    </form>
                </div>
                
            ))}
            </div>
    )
}

export default Quiz;