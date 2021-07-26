
import React,{useContext} from 'react';


import { LOAD_TODO_TYPES, LOAD_ORDERING } from '../../GraphQl/Query'
import {TodoContext} from "../../index"
import FilterButton from "../FilterButton"
import CheckBoxWithLabel from "../CheckBoxWithLabel"


function FilterTable( ){

  const todoContext= useContext(TodoContext)
  const title="C'est fait"

  return(
        <div className="row">
           <CheckBoxWithLabel title={title}  onChange={ ()=> todoContext.todoDispatch({type:"done"}) }/>
           <FilterButton   filtersQuery={LOAD_TODO_TYPES} filter={todoContext.todoState.titleType}  name={"Type"}/>
           <FilterButton   filtersQuery={LOAD_ORDERING}   filter={ todoContext.todoState.titleOrder} name={"Ordre"}/>
           
           <button className="col btn btn-secondary" onClick={()=>{todoContext.todoDispatch({type:"reset"})} } > 
            Réinitialiser
           </button>
  
        </div>)
  }

  
  export default FilterTable