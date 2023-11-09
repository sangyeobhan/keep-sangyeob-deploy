import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputForm from "./InputForm";
import Note from "./Note";
import { notes } from "../notes";

export default function App() {
    const [noteArray, setNotes] = useState(notes);

    const deleteNote = (key) => {
        const updatedNoteArray = noteArray.filter((note) => note.key !== key);
        setNotes(updatedNoteArray);
    };

    const addNote = (note) => {
        const updatedNoteArray = [...noteArray, { key: Date.now(), ...note }];
        setNotes(updatedNoteArray);
    };
    return (
        <div className="app">
            <Header />
            <div className="body">
                <InputForm addNote={addNote} />
                <div className="notes-container">
                    {noteArray.map((note) => {
                        return (
                            <Note
                                key={note.key}
                                note={note}
                                hanleDeleteButton={() => deleteNote(note.key)}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
