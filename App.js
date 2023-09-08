import React, { useState } from 'react';

export default function App() {
  
 
	const questions = [
		{
			questionText: 'Who invented C programming language?',
			answerOptions: [
				{ answerText: 'Patrick Naughton', isCorrect: false },
				{ answerText: 'James Gosling ', isCorrect: false },
				{ answerText: 'Dennis Ritchie', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not OOP language?',
			answerOptions: [
				{ answerText: 'C#', isCorrect: false },
				{ answerText: 'Pascal', isCorrect: true },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Oracle', isCorrect: false },
			],
		},
		{
			questionText: 'Is java and javaScript interrelated?',
			answerOptions: [
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'Maybe', isCorrect: false },
				{ answerText: 'somewhat', isCorrect: false },
			],
		},
		{
			questionText: 'What is used to find and fix bugs in the Java programs?',
			answerOptions: [
				{ answerText: 'JRE', isCorrect: false },
				{ answerText: 'JVM', isCorrect: false },
				{ answerText: 'JRM', isCorrect: false },
				{ answerText: 'JDB', isCorrect: true },
			],
		},
    {
			questionText: 'Which keyword is used to prevent any changes in the variable within a C program?',
			answerOptions: [
				{ answerText: 'mutable', isCorrect: false },
				{ answerText: 'immutable', isCorrect: false },
				{ answerText: 'string', isCorrect: false },
				{ answerText: 'const', isCorrect: true },
			],
		},
    {
			questionText: 'In which language Python is written?',
			answerOptions: [
				{ answerText: 'PHP', isCorrect: false },
				{ answerText: '.py', isCorrect: false },
				{ answerText: 'English', isCorrect: false },
				{ answerText: 'C', isCorrect: true },
			],
		},
    {
			questionText: 'The correct syntax to add the header file in the C++ program?',
			answerOptions: [
				{ answerText: '#include<userdefined>', isCorrect: false },
				{ answerText: '#include "userdefined.h"', isCorrect: false },
				{ answerText: 'Fist option', isCorrect: false },
				{ answerText: 'Both options', isCorrect: true },
			],
		},
    {
			questionText: ' A program in HTML can be rendered and read by ?',
			answerOptions: [
				{ answerText: 'Server', isCorrect: false },
				{ answerText: 'Interpreter', isCorrect: false },
				{ answerText: 'Compiler', isCorrect: false },
				{ answerText: 'Web browser', isCorrect: true },
			],
		},
    {
			questionText: 'JavaScript language is?',
			answerOptions: [
				{ answerText: 'OOP', isCorrect: false },
				{ answerText: 'Assembly-language', isCorrect: false },
				{ answerText: 'High-level', isCorrect: false },
				{ answerText: 'Object-Based', isCorrect: true },
			],
		},
    {
			questionText: 'Which of the following highly uses the concept of an array?',
			answerOptions: [
				{ answerText: 'Caching', isCorrect: false },
				{ answerText: 'Binary search', isCorrect: false },
				{ answerText: 'BST', isCorrect: false },
				{ answerText: 'Spatial locality', isCorrect: true },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	return (
    
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}