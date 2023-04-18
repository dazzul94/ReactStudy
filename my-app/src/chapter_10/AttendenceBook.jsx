import React from "react";

const student = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id:2,
        name: "Steve"
    },
    {
        id:3,
        name: "Bill"
    },
    {
        id:4,
        name: "Jeff"
    }
]

function AttendenceBook(props) {
    return (
        <ul>
            {student.map(student => <li key={student.key}>{student.name}</li>)}
        </ul>
    )
}

export default AttendenceBook;