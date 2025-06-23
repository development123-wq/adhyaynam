import React, { useCallback, useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";

const QuestionTable = () => {
    const [showAddQuestionForm, setShowAddQuestionForm] = useState(false);
    const [image, setImage] = useState('');
    const [correctOption, setCorrectOption] = useState(0);
    const [subject, setSubject] = useState('');
    const [course, setCourse] = useState('CUET');
    const [chapter, setChapter] = useState('');
    const [paper, setPaper] = useState('Paper 1');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);


    const getQuiz = async () => {
        try {
            const response = await fetch('/api/quiz/get-quiz');
            if (response.ok) {
                const result = await response.json();
                console.log(result, ' result ')
                setQuestions(result)
            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getQuiz()
    }, []);

    const handleEditClick = (row) => {
        const { id, name } = row;
        console.log(`Edit button clicked for item with id: ${id} and name: ${name}`);
    };

    const handleDeleteClick = async (row) => {
        const { _id, name } = row;
        const res = fetch(`/api/quiz/delete-quiz`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: _id }),
        })
            .then((response) => response.json())
            .then((data) => getQuiz())
            .catch((error) => console.error('Error fetching blogs:', error));

        alert(res.message)
    };

    const handleAddQuestionClick = () => {
        setShowAddQuestionForm(true);
    };

    const handleChange = useCallback((state) => {

    }, []);

    const columns = useMemo(
        () => [
            {
                name: '#',
                cell: (row, index) => index + 1,
                grow: 1,
            },
            {
                name: "Actions",
                cell: (row) => (
                    <>
                        <button className="mr-4" onClick={() => handleEditClick(row)}>Edit</button>
                        <button className="text-red" onClick={() => handleDeleteClick(row)}>Delete</button>
                    </>
                ),
                ignoreRowClick: true,
                allowOverflow: true,
                grow: 2,
            },
            {
                name: "Course",
                selector: (row) => row.course,
                sortable: true,
                grow: 2,
            },
            {
                name: 'Subject',
                selector: row => row.subject,
                sortable: true,
            },
            {
                name: 'Chapter',
                selector: row => row.chapter,
                sortable: true,
                right: true,
            },
            {
                name: 'Paper',
                selector: row => row.paper,
                sortable: true,
                right: true,
            },
            {
                name: 'Description',
                selector: row => row.description,
                sortable: true,
                right: true,
            },
            {
                name: 'Question',
                cell: (row) => <img src={row.image} alt="Product" style={{ maxWidth: '150px' }} />,
            },
        ],
        []
    );


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('correctOption', correctOption);
        formData.append('subject', subject);
        formData.append('course', course);
        formData.append('paper', paper);
        formData.append('chapter', chapter);
        formData.append('description', description);
        formData.append('image', image);
        try {
            const response = await fetch('/api/quiz/add-quiz', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                alert('Successfuly Add Question')
            } else {
                console.error('Failed to fetch single quiz');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };


    return (
        <div>
            <button onClick={handleAddQuestionClick} className="bg-red text-white p-2 rounded">
                Add Question
            </button>

            {showAddQuestionForm && (

                <div className="p-4">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <p className="text-xl mb-4">Form Description</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="mb-4">
                                <label htmlFor="correctOption" className="block text-gray-600">Course:</label>
                                <select name="course" id="course" value={course} onChange={(e) => setCourse(e.target.value)} className="w-full border rounded-md py-2 px-3">
                                    <option value="CUET">CUET</option>
                                    <option value="CA">CA</option>
                                    <option value="CS">CS</option>
                                    <option value="CLAT">CLAT</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-600">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full border rounded-md py-2 px-3"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="chapter" className="block text-gray-600">Chapter:</label>
                                <input
                                    type="text"
                                    id="chapter"
                                    name="chapter"
                                    value={chapter}
                                    onChange={(e) => setChapter(e.target.value)}
                                    className="w-full border rounded-md py-2 px-3"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="paper" className="block text-gray-600">Paper:</label>
                                <select name="paper" id="paper" value={paper} onChange={(e) => setPaper(e.target.value)} className="w-full border rounded-md py-2 px-3">
                                    <option value="Paper 1">Paper 1</option>
                                    <option value="Paper 2">Paper 2</option>
                                    <option value="Paper 3">Paper 3</option>
                                    <option value="Paper 4">Paper 4</option>
                                    <option value="Paper 5">Paper 5</option>
                                </select>
                            </div>

                        </div>

                        <div className="mb-4">
                            <label htmlFor="paper" className="block text-gray-600">Question Description:</label>
                            <input
                                type="text"
                                id="Description"
                                name="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border rounded-md py-2 px-3"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="mb-4">
                                <label htmlFor="image" className="block text-gray-600">Question:</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="w-full border rounded-md py-2 px-3"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="correctOption" className="block text-gray-600">Correct Option:</label>
                                <select name="1" id="1" value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} className="w-full border rounded-md py-2 px-3">
                                    <option value={0}>a</option>
                                    <option value={1}>b</option>
                                    <option value={2}>c</option>
                                    <option value={3}>d</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-red text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}


            <DataTable
                title="Questions"
                data={questions}
                columns={columns}
                onSelectedRowsChange={handleChange}
            />
        </div>
    );
}
export default QuestionTable;
