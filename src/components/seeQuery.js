import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './seeQuery.css';

function SeeQuery() {
    const [query, setQuery] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    


    useEffect( () => fetchData(), []) 
       const fetchData = () => {
        const url = window.location.href;
        const urlList = url.split("/");
        let id = urlList[4];
        
        

        fetch('https://moti2022.herokuapp.com/queries/'+id)
        .then(vastaus => vastaus.json())
        .then(vastausData => {
            setQuery(vastausData);
            setQuestions(vastausData.questions);
            
            setAnswers([]);
            vastausData.questions.map((question) => (
                setAnswers((answers) => [...answers, {
                    text: '',
                    question:{
                        question_id:question.question_id
                    }
                }]))
                
            )

        }) 
        


        
    };

    const updateState = (e, index) => {
        const newArray = answers.map((item, i) => {
          if (index === i) {
            return { ...item, [e.target.name]: e.target.value };
          } else {
            return item;
          }
        });
        setAnswers(newArray);
      };


      const saveAnswers = () =>{
        answers.map((answer) => (
            
                fetch('https://moti2022.herokuapp.com/answers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(answer)
                })
                .then(res => fetchData())
                .catch(err => console.log(err))
            
            )
            
        )


    };

    return (
        <div>

            <table>
                <tbody>
                    <tr>
                       <th>Question</th> 
                    </tr>
                {
                    questions.map((question, i) => (
                        <tr key = {question.question_id}>
                            <td>{question.name}</td> 
                            <TextField 
                                autoFocus
                                margin="dense"
                                name="text"
                                value={answers[i].text}
                                onChange={e => updateState(e, i)}
                                label="Answer"

                            />
                              <td><Link to={"/seeanswer/" + question.question_id} className="seeAnswers">See Answers</Link></td> 
                          
                        </tr>
                        
                    ))}
                <input type="submit" onClick={saveAnswers}></input>
                </tbody>
          </table>


        </div>
    )
}
export default SeeQuery;