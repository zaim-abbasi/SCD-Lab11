import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function EditForm() {
    const { id } = useParams();
    const [note, setNote] = useState({
        title: '',
        details: '',
    });

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const foundNote = notes.find(note => note.id === id);
        if (foundNote) {
            setNote(foundNote);
        }
    }, [id]);

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setNote({ ...note, [name]: value });
    }

    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const updatedNotes = notes.map(n => n.id === id ? note : n);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        navigate(`/details/${id}`);
        Swal.fire('Your note has been updated successfully!');
    }

    return (
        <div>
            <h1 className="headline">
                Edit <span>Note</span>
            </h1>
            <form className="note-form">
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={changeHandler}
                    placeholder="Title of Note ..."
                />
                <textarea
                    name="details"
                    rows="5"
                    value={note.details}
                    onChange={changeHandler}
                    placeholder="Describe Your Note ..."
                ></textarea>
                <button onClick={submitHandler}>Save Changes</button>
            </form>
        </div>
    );
}