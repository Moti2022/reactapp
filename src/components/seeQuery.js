import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function SeeQuery() {
    const [query, setQuery] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    useEffect( () => fetchAnswers(), []) 
    const fetchAnswers = () => {
     fetch('https://moti2022.herokuapp.com/answers')
     .then(vastaus => vastaus.json())
     .then(vastausDatat => {
         setAnswers(vastausDatat);
     })
 };
    


    useEffect( () => fetchData(), []) 
       const fetchData = () => {
        const url = window.location.href;
        const urlList = url.split("/");
        let id = urlList[4];
        console.log(id);
        fetch('https://moti2022.herokuapp.com/queries/'+id)
        .then(vastaus => vastaus.json())
        .then(vastausData => {
            setQuery(vastausData);
            setQuestions(vastausData.questions);
            console.log(vastausData);
            
            

        }) 
       
        
    };

    return (
        <div>

            <table>
                <tbody>
                    <tr>
                        <th>Question id</th> 
                       <th>Question</th> 
                    </tr>
                {
                    questions.map((question) => (
                        <tr key = {question.question_id}>
                            <td>{question.question_id}</td> 
                            <td>{question.name}</td> 
                              <td><Link to={"/seeanswer/" + question.question_id} className="seeAnswers">See Answers</Link></td> 
                          
                        </tr>
                    ))}
                
                </tbody>
          </table>

        </div>
    )
}
export default SeeQuery;