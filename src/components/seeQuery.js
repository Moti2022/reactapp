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
        
        

        fetch('http://moti22.herokuapp.com/queries/'+id)
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
      const radioChange = (text, index) => {
        const newArray = answers.map((item, i) => {
          if (index === i) {
            return { ...item, text: text };
          } else {
            return item;
          }
        });
        setAnswers(newArray);
      };

      const checkboxChange = (text, index) => {
       // console.log(document.getElementById(index).innerText)
       var ans ="";
        var inputElements = document.getElementById(index);
        for(var i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                ans +=  "*" + inputElements[i].value + " ";
                
            }
        }
        const newArray = answers.map((item, i) => {
          if (index === i) {
            return { ...item, text: ans};
          } else {
            return item;
          }
        });
        setAnswers(newArray);
      };


      const saveAnswers = () =>{
        answers.map((answer) => (
            
                fetch('http://moti22.herokuapp.com/answers', {
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

    const option = (question, i) => {
        if (question.type == "text"){
            return (
                <TextField 
                autoFocus
                margin="dense"
                name="text"
            
                value={answers[i].text}
                onChange={e => updateState(e, i)}
                label="Answer"

            />

            )
        }else if(question.type == "radio"){
            return (
                <label><br/>
                    {
                    question.choices.map((choice) => (
                        <label>
                            <input type="radio" 
                            checked={answers[i].text === choice.name}
                            onChange={() => radioChange(choice.name, i)}
                            />{choice.name}
                        </label>
                        )
                    )
                    }   
                    
              </label>
            )
        }else{
            return (
                <label><br/>
                    <form id={i}>
                    {
                        
                    question.choices.map((choice) => (
                        <label>
                            <input type="checkbox" 
                            value={choice.name}
                            onChange={() => checkboxChange( choice.name, i)}
                            />{choice.name}
                        </label>
                        )
                    )
                    
                    }   
                    </form>
              </label>
            )
        }
    }

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
                            {option(question, i)}
                       
                              <td><Link to={"/seeanswer/" + question.question_id} className="seeAnswers">See Answers</Link></td> 
                          
                        </tr>
                        
                    ))}
                <input id="submitAnswer" type="submit" onClick={saveAnswers}></input>
                </tbody>
          </table>


        </div>
    )
}
export default SeeQuery;