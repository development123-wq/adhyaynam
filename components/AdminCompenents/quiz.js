import { useState, useEffect } from 'react';
import QuizQuestionAdd from '../Quiz/QuizQuestions'; 

function Quizadmin() {
    const [data, setData] = useState([]);
    const [quiz, setQuiz] = useState([]);
    const [updateId, setUpdateId] = useState('');
    const [addQuiz, setAddQuiz] = useState(false);


    const fetchData = async () => {
        try {
            const response = await fetch('/api/quiz/get-quiz');
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const Getsinglequiz = async (id) => {
        try {
            const response = await fetch('/api/quiz/get-single-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                const result = await response.json();
                setQuiz(result);
            } else {
                console.error('Failed to fetch single quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleDeleteQuestion = async ({ id, paperId, questionId }) => {
        const userInput = window.confirm('Do you want to Delete?');
        if (userInput) {
        try {
            const response = await fetch('/api/quiz/delete-quiz', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, paperId, questionId }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result)
                alert('Delete Successfuly !')
                fetchData()
            } else {
                console.error('Failed to delete quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        } }
    };


    return (
        <div className="p-4">
            <div>
                <div className='cursor-pointer font-bold flex justify-end' onClick={() => setAddQuiz(true)}>
                    <span className='mx-2'>Add Quiz</span>
                   <span> <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg> </span>
                </div>
            </div>
            {addQuiz ? updateId?.id ?
                '' : <QuizQuestionAdd id={''} />
                : ''}
            {
                updateId?.id ? <QuizQuestionAdd id={updateId} /> : ''
            }

            <h1 className="text-2xl font-bold py-5 mb-5">Courses</h1>
            <div className="mb-4 grid grid-cols-2 sm:grid-cols-3">
                {data.map((subject, subjectIndex) => (
                    <div key={subjectIndex} className='flex'>
                        <p className="text-2xl font-semibold cursor-pointer mx-5" onClick={() => Getsinglequiz(subject._id)}>{subjectIndex + 1}.  {subject.subject}</p>
                        <div className='flex'>
                            <span className='text-red text-semibold mr-auto ml-4 underline cursor-pointer mt-1' onClick={() => setUpdateId({ id: subject._id })}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" fill='blue' /></svg>
                            </span>
                            <span className='text-red text-semibold mr-auto ml-4 underline cursor-pointer mt-1' onClick={() => handleDeleteQuestion({ id: subject._id })}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill='red' /></svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <br />

            {quiz?.papers?.map((paper, paperIndex) => (
                <div key={paperIndex} className="mb-4">
                    <div className='flex'>
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer">{paper.paper_title}</h2>
                        <span className='text-red test-semibold mr-auto ml-4 underline mt-1 cursor-pointer' onClick={() => handleDeleteQuestion({ id: quiz._id, paperId: paper._id })}> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill='red' /></svg>
                        </span>
                    </div>
                    {paper.questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="my-2">
                            <div className='flex'>
                                <p className="font-medium text-start">{questionIndex + 1}.  {question.question_text}</p>
                                <span className='text-red text-semibold ml-auto ml-4 underline cursor-pointer' onClick={() => handleDeleteQuestion({ id: quiz._id, paperId: paper._id, questionId: question._id })}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill='red' /></svg>
                                </span>
                            </div>
                            <ul className='grid grid-cols-2 sm:grid-cols-5 text-start'>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question-${paperIndex}-${questionIndex}`}
                                                value={option}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                                <li>Answer: {question.correctAnswer}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ))}


        </div>
    );

}
export default Quizadmin;

