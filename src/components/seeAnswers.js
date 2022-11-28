import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './seeAnswers.css';


function SeeAnswers ()  {
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestion] = useState([]);
   
    useEffect( () => fetchData(), []) 
       const fetchData = () => {
        const url = window.location.href;
        const urlList = url.split("/");
        let id = urlList[4];
        console.log(id);
        fetch('http://localhost:8080/questions/'+id)
        .then(vastaus => vastaus.json())
        .then(vastausData => {
            setQuestion(vastausData);
            setAnswers(vastausData.answers);
            console.log(vastausData);
            
            

        }) 
       
        
    };
   
   


return (
<div>

<table className="answerClass" >
                <tbody>
                    <tr className="trAnswer">
                        
                       <th className="answerHeader">Answer</th> 
                    </tr>
                {
                    answers.map((answer) => (
                        <tr key = {answer.answer_id}>
                          
                            <td  className="answerRow">{answer.text}</td> 
                           
                          
                        </tr>
                    ))}
                
                </tbody>
          </table>

</div>
)
                    }



export default SeeAnswers;
