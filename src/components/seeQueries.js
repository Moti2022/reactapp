
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SeeQuery from "./seeQuery";
import './seeQueries.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function SeeQueries() {
    const [queries, setQueries] = useState([]);
    const [query, setQuery] = useState([]);
    
    useEffect( () => fetchQueries(), []) 
       const fetchQueries = () => {
        fetch('http://moti22.herokuapp.com/queries')
        .then(vastaus => vastaus.json())
        .then(vastausDatat => {
            setQueries(vastausDatat);
        })
    };
    
    useEffect( () => fetchData(), []) 
    const fetchData = () => {
     fetch('http://moti22.herokuapp.com/questions')
     .then(vastaus => vastaus.json())
     .then(vastausData => {
         setQuery(vastausData);
         console.log(vastausData);
     }) 
 };

 const handleOnChange = () => {
     
 }
    return (
        <div>
          <table className="table">
            <tbody>
                <tr className="header">
                    <th>QUERY</th>
                    <th>NAME</th>
                    <th className="desc">DESCRIPTION</th>
                </tr>
                {
                    queries.map((query) => (
                        <tr key = {query.query_id} className="rows">
                            <td>{query.query_id}</td>
                            <td className="queryHeading">{query.heading}</td> 
                            <td className="queryDesc">{query.description} </td> 
                            <td><Link to={"/seequery/" + query.query_id} className="openQuery">Open Query</Link></td> 
                            
                        </tr>
                        
                    ))}
            </tbody>
          </table>
        </div>
        
        
    )}
    export default SeeQueries;
        
 