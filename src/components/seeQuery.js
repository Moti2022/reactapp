
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function SeeQueries() {
    const [query, setQueries] = useState([]);
   
    


    useEffect( () => fetchData(), []) 
       const fetchData = () => {
        fetch('https://moti2022.herokuapp.com/queries')
        .then(vastaus => vastaus.json())
        .then(vastausData => {
            setQueries(vastausData);
            console.log(vastausData);
            


        }) 
       
        
    };
    
    return (
        
        <div>
          <table>
            <tbody>
                {
                    query.map((query) => (
                        <tr key = {query.query_id}>
                            <td>{query.heading}</td> 
                            <td>{query.description}</td> 
                        </tr>
                    ))}
                
            </tbody>
          </table>
        </div>
        
    )}
    export default SeeQueries
        
 