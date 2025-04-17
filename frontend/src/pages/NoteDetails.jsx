import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

export default function NoteDetails() {
    const { id } = useParams();
    const [note, setNote] = useState({
        id: "",
        title: "",
        details: "",
    });

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        const foundNote = notes.find(note => note.id === id);
        if (foundNote) {
            setNote(foundNote);
        }
    }, [id]);

    return (
        <div className="container">
            <DetailCard note={note} />
        </div>
    );
}