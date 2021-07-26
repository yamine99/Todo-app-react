

import { useQuery } from "@apollo/client";
import JsonFind from "json-find";
import React,{ useContext} from 'react';

import {TodoContext} from "../index"



function FilterButton({filtersQuery, filter, name}){

  const { loading, data, error } =  useQuery(filtersQuery)
  const todoContext= useContext(TodoContext)
  let  filters=[]
   
  
  if(error) return  <p> Problème de connexion </p>
  if(!loading)
    {
        const DOC = JsonFind(data)
        filters = DOC.checkKey("enumValues")
        
    }else{
        return  <p> Chargement ... </p>
    }
   

  

const onChangeFilter= (e)=> {
    if( e.target.id==="Ordre"){
     todoContext.todoDispatch({type:"orderChange", payload:e.target.value }) 
  
    } else{
     todoContext.todoDispatch({type:"filterTypeChange", payload:e.target.value }) 
   }
   }

 
  return (<div className="col">
                <select className="form-select btn-primary "  aria-label="Default select example" id={name}
                         value = {filter} onChange={onChangeFilter}>
                        <option disabled > {name} </option>
                            {
                            filters.map(item => <option value={item.name}  key={Math.random()} >{item.name}</option> )
                            }

                </select>
   
           </div>)
  }

  
  export default FilterButton