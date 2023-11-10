import React, { useState } from "react";

export default function InputForm({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        setNote((prevNote) => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevNote.content,
                };
            } else if (name === "content") {
                return {
                    title: prevNote.title,
                    content: value,
                };
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note);
        setNote({
            title: "",
            content: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Enter title"
                value={note.title}
                onChange={handleChange}
            />
            <textarea
                name="content"
                placeholder="Enter content..."
                value={note.content}
                onChange={handleChange}
            ></textarea>{" "}
            <button>Add</button>
        </form>
    );
}
