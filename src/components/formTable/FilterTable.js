
import React,{useContext} from 'react';


import { LOAD_TODO_TYPES, LOAD_ORDERING } from '../../GraphQl/Query'
import {TodoContext} from "../../index"
import FilterButton from "../FilterButton"

import SimpleFilter from '../SimpleFilter';



function FilterTable( ){

                const todoContext= useContext(TodoContext)
                const LIST_CATEGORIE= ["Business", "Autres"]
                const LIST_STATE_TODO= ["éffectuer", "Non éffectuer"]

                
                
                    const onChangeFilter= (e)=> 
                        {
                                if( e.target.id==="Ordre")
                                {
                                    todoContext.todoDispatch({
                                                                type:"orderChange",
                                                                payload:e.target.value 
                                                                }) 
                                } 
                                else
                                {
                                    todoContext.todoDispatch({
                                                                type:"filterTypeChange", 
                                                                payload:e.target.value 
                                                                }) 
                                }
                    }

                    
                    const onChangeCategorie= (e)=> 
                        {
                                if( e.target.id==="Categorie")
                                {
                                    todoContext.todoDispatch({ type:"businessType",
                                                                payload:e.target.value 
                                                                }) 
                                } 
                                else
                                {
                                    todoContext.todoDispatch({
                                                                type:"businessType", 
                                                                payload:e.target.value 
                                                                }) 
                                }
                    }

                    const onChangeDone= (e)=> 
                    {
                            if( e.target.id==="Non éffectuer")
                            {
                                todoContext.todoDispatch({ type:"notDone",
                                                            payload:e.target.value 
                                                            }) 
                            } 
                            else
                            {
                                todoContext.todoDispatch({
                                                            type:"done", 
                                                            payload:e.target.value 
                                                            }) 
                            }
                    }

     


  return(

        <div className="row">
      
           <SimpleFilter   name="All" listFilters={LIST_STATE_TODO} onChangeSimpleFilter={ onChangeDone } filter = {todoContext.todoState.titleState}/>
           <SimpleFilter   name="Catégorie" listFilters={LIST_CATEGORIE} onChangeSimpleFilter={ onChangeCategorie } filter = {todoContext.todoState.titleCategorie}/>
       
           <FilterButton   filtersQuery={LOAD_TODO_TYPES}  onChangeFilter={onChangeFilter} filter={todoContext.todoState.titleType}  name={"Type"}/>
           <FilterButton   filtersQuery={LOAD_ORDERING}   onChangeFilter={onChangeFilter} filter={ todoContext.todoState.titleOrder} name={"Ordre"}/>
           
           <button className="col btn btn-secondary" onClick={()=>{todoContext.todoDispatch({type:"reset"})} } > 
            Réinitialiser
           </button>
  
        </div>)
  }

  
  export default FilterTable