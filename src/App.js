import React, { useState } from 'react';
import './App.css';
export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    {
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Lucknow', isCorrect: false },
				{ answerText: 'Gujarat', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [answerOption, setAnswerOption] = useState('');
  const [refresh, setRefresh] = useState(false);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
   
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  const reset= () => {
    setRefresh(true);
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
    setRefresh(false);
  }
	return (
    <>
		<h1 className='glow'>Quick Quiz</h1>
    <div className='app'>
      
			{showScore ? (
        <div style={{display:'block'}}>				
        <div className='score-section'>
					<h2>You scored {score} out of {questions.length}</h2>
				</div>
         <button className='submit_button center' onClick={reset}>Reset</button>
         </div>

			) : (
				<>
  
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{currentQuestion + 1}. {questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='option_button' onClick={() =>setAnswerOption(answerOption)}>{answerOption.answerText}</button>
						))}
            <br />
            <button className='submit_button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>Submit</button>
					</div>
				</>
			)}
		</div>
    </>
	);
}
