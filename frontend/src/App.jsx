// import { response } from "express";
import React from "react"
import { useState } from "react";

function App() {

  const [student , setStudent] = useState(null);

  const getStudent = async () => {
    console.log("button clicked");
    const response = await fetch("http://localhost:8081/student");
    console.log(response);

    const data = await response.json();
    console.log(data);
    setStudent(data);
  }

  return(
     <div style={{ padding: "40px" }}>

      <button onClick={getStudent}>
        Get Student
      </button> 

      {
        student && (
          <div>

            <h2>ID : {student.id}</h2>

            <h2>Name : {student.name}</h2>

            <h2>Course : {student.email}</h2>

          </div>
        )
      }

    </div>
  )
}

export default App;