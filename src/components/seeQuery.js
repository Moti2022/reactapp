import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function SeeQuery() {
    const [query, setQuery] = useState([]);
   
    


    useEffect( () => fetchData(), []) 
       const fetchData = () => {
        fetch('https://moti2022.herokuapp.com/questions')
        .then(vastaus => vastaus.json())
        .then(vastausData => {
            setQuery(vastausData);
            console.log(vastausData);
            


        }) 
       
        
    };

    return(
        <div>

            <table>
                <tbody>
                    <tr>
                        <th>Question id</th> 
                       <th>Question</th> 
                    </tr>
                {
                    query.map((question) => (
                        <tr key = {question.question_id}>
                            <td>{question.question_id}</td> 
                            <td>{question.name}</td> 
                        </tr>
                    ))}
                
                </tbody>
          </table>

        </div>
    )}
    export default SeeQuery;