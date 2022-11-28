import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function SeeAnswers ()  {
    const [answers, setAnswers] = useState([]);
    const [question, setQuestion] = useState([]);
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

<table>
                <tbody>
                    <tr>
                       <th>Answer</th> 
                    </tr>
                {
                    answers.map((answer) => (
                        <tr key = {answer.answer_id}>
                            <td>{answer.text}</td> 
                          
                        </tr>
                    ))}
                
                </tbody>
          </table>

</div>
)
                    }



export default SeeAnswers;
