
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SeeQuery from "./seeQuery";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function SeeQueries() {
    const [queries, setQueries] = useState([]);
   const [query, setQuery] = useState([]);
  
    

   

    useEffect( () => fetchQueries(), []) 
       const fetchQueries = () => {
        fetch('https://moti2022.herokuapp.com/queries')
        .then(vastaus => vastaus.json())
        .then(vastausDatat => {
            setQueries(vastausDatat);
          
            


        }) 
     
        
    };
    useEffect( () => fetchData(), []) 
    const fetchData = () => {
     fetch('https://moti2022.herokuapp.com/questions')
     .then(vastaus => vastaus.json())
     .then(vastausData => {
         setQuery(vastausData);
         console.log(vastausData);
         


     }) 
    

     
 };



  
 
     
 
    
    return (
        
        <div>
          <table>
            <tbody>
                {
                    queries.map((query) => (
                        <tr key = {query.query_id}>

                            <td>{query.heading}</td> 
                            <td>{query.description} </td> 
                           <td><Link to={"/seequery/" + query.query_id}>Questions</Link></td> 
                           
                        </tr>
                        
                    ))}
                
            </tbody>
          </table>
        </div>
        
        
    )}
    export default SeeQueries;
        
 