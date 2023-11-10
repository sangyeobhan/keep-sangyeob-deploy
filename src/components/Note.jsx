import React from "react";

export default function Note({ note, deleteNote }) {
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <div className="button-container">
                <button onClick={() => deleteNote(note.key)}>Delete</button>
            </div>
        </div>
    );
}
