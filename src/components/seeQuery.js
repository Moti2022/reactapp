import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function SeeQuery() {
    const [query, setQuery] = useState([]);
    const [questions, setQuestions] = useState([]);
    


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

    return(
        <div>

            <table>
                <tbody>
                {
                    questions.map((question) => (
                        <tr key = {question.question_id}>
                            <td>{question.name}</td> 
                          
                        </tr>
                    ))}
                
                </tbody>
          </table>

        </div>
    )}
    export default SeeQuery;