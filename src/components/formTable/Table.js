
import ItemRow from "./ItemRow";
import React,{useContext} from "react";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

import {LOAD_TODOS } from '../../GraphQl/Query'
import {TodoContext} from "../../index"


function Table () {
  
        const todoContext= useContext(TodoContext)
        const rows = []
        var state= null 

        

        const { loading, data, error } = useQuery(LOAD_TODOS,{ variables:{ 
                                                            filters:todoContext.todoState.filterType, 
                                                            orderBy:todoContext.todoState.filterOrder },})
                
                
                var isDoneOnly= todoContext.todoState.isDoneOnly
                var isNotDoneOnly= todoContext.todoState.isNotDoneOnly  


   
        if(error) return   <Redirect to="NotFound"/>
        if(!loading) todoContext.todoState.items= data.getTodoList
        else  return <p>Chargement...</p>

        
        state = todoContext.todoState



        state.items.forEach(item => {
                if ((isDoneOnly && item.isDone) ) 
                {          
                    return 
                 }

                 if ((isNotDoneOnly && !item.isDone) ) 
                 {          
                     return 
                  }

            
                rows.push(<ItemRow item={item} key={item.id}/>  )
                
            
            });
        
   
                return <table className="table">
                    <thead>

                            <tr>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Créer</th>
                                <th>Action</th>
                                <th>Etat</th>
                            </tr>

                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            }
  
  
 export default  Table