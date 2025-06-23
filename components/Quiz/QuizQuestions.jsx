import React, { useEffect, useState } from 'react';

function QuizQuestionAdd({ id }) { 
    const [subject, setSubject] = useState('');
    const [papers, setPapers] = useState([{
        paper_title: '',
        questions: [
            {
                question_text: '',
                options: ['', '', '', ''],
                correctAnswer: '',
            },
        ],
    }]);

    const Getsinglequiz = async () => {
        if (id?.id) {
            try {
                const response = await fetch('/api/quiz/get-single-quiz', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id?.id }),
                });

                if (response.ok) {
                    const result = await response.json();
                    setSubject(result?.subject)
                    setPapers(result?.papers)
                } else {
                    console.error('Failed to fetch single quiz');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    useEffect(() => {
        Getsinglequiz()
    }, [id])


    const handleAddPaper = () => {
        setPapers([...papers, { paper_title: '', questions: [] }]);
    };

    const handleAddQuestion = (paperIndex) => {
        const updatedPapers = [...papers];
        updatedPapers[paperIndex].questions.push({
            question_text: '',
            options: ['', '', '', ''],
            correctAnswer: '',
        });
        setPapers(updatedPapers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id?.id) {
                const response = await fetch('/api/quiz/update-quiz', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id.id, updateData: { subject, papers } }),
                });

                if (response.ok) {
                    alert('Update successfully.');
                  setPapers([{
                        paper_title: '',
                        questions: [
                            {
                                question_text: '',
                                options: ['', '', '', ''],
                                correctAnswer: '',
                            },
                        ],
                    }])
                } else {
                    console.error('Failed to add data.');
                }
            } else {

                const response = await fetch('/api/quiz/add-quiz', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ subject, papers }),
                });
                if (response.ok) {
                    alert('Add Data successfully.');
                    setPapers([{
                        paper_title: '',
                        questions: [
                            {
                                question_text: '',
                                options: ['', '', '', ''],
                                correctAnswer: '',
                            },
                        ],
                    }])

                } else {
                    console.error('Failed to add data.');
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form >
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    required
                    placeholder='Subject'
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <div className='border my-2 p-2 '>
                    {papers.map((paper, paperIndex) => (
                        <div key={paperIndex}>
                            <label htmlFor={`paper_title${paperIndex}`}>Paper :{paperIndex + 1}</label>
                            <input
                                type="text"
                                id={`paper_title${paperIndex}`}
                                required
                                placeholder={`paper_title ${paperIndex + 1}`}
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                                value={paper.paper_title}
                                onChange={(e) => {
                                    const updatedPapers = [...papers];
                                    updatedPapers[paperIndex].paper_title = e.target.value;
                                    setPapers(updatedPapers);
                                }}
                            />
                            <div className='border my-2 p-2  '>
                                {paper.questions.map((question, questionIndex) => (
                                    <div key={questionIndex}>
                                        <label htmlFor={`question_text${paperIndex}${questionIndex}`}>Question : {questionIndex + 1}</label>
                                        <input
                                            type="text"
                                            id={`question_text${paperIndex}${questionIndex}`}
                                            placeholder={`question_text ${questionIndex + 1}`}
                                            required
                                            className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-500"
                                            value={question.question_text}
                                            onChange={(e) => {
                                                const updatedPapers = [...papers];
                                                updatedPapers[paperIndex].questions[questionIndex].question_text = e.target.value;
                                                setPapers(updatedPapers);
                                            }}
                                        />

                                        <div className='flex grid grid-cols-5 pb-2'>
                                            {question.options.map((option, optionIndex) => (
                                                <div key={optionIndex} >
                                                    <label htmlFor={`option${paperIndex}${questionIndex}${optionIndex}`}>Option {optionIndex + 1}:</label>
                                                    <input
                                                        type="text"
                                                        id={`option${paperIndex}${questionIndex}${optionIndex}`}
                                                        value={option}
                                                        placeholder={`option ${optionIndex + 1}`}
                                                        required
                                                        className="w-[150px] px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-500"
                                                        onChange={(e) => {
                                                            const updatedPapers = [...papers];
                                                            updatedPapers[paperIndex].questions[questionIndex].options[optionIndex] = e.target.value;
                                                            setPapers(updatedPapers);
                                                        }}
                                                    />
                                                </div>
                                            ))}

                                            <div>
                                                <label htmlFor={`correctAnswer${paperIndex}${questionIndex}`}>Correct Answer:</label>
                                                <input
                                                    type="text"
                                                    id={`correctAnswer${paperIndex}${questionIndex}`}
                                                    value={question.correctAnswer}
                                                    required
                                                    placeholder='2'
                                                    className="w-[150px]  px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-500"
                                                    onChange={(e) => {
                                                        const updatedPapers = [...papers];
                                                        updatedPapers[paperIndex].questions[questionIndex].correctAnswer = e.target.value;
                                                        setPapers(updatedPapers);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <span className='cursor-pointer bg-red mt-2 px-2 py-1 text-white text-sm rounded' type="button" onClick={() => handleAddQuestion(paperIndex)}>
                                    Add Question
                                </span>
                            </div>
                        </div>
                    ))}

                    <span type="button" className='cursor-pointer bg-red px-3 py-2 text-md text-white rounded' onClick={handleAddPaper}>
                        Add Paper
                    </span>
                </div><br /><br />
                <span onClick={handleSubmit} className='cursor-pointer bg-red text-lg px-3 py-2 text-white rounded' type="submit">
                    Submit
                </span>
            </form>
        </div>
    );
}

export default QuizQuestionAdd;
