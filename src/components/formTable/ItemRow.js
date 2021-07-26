import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import 'moment/locale/fr';
import moment from "moment";
import {useContext} from "react";
import { Redirect } from "react-router-dom";

import {TodoContext} from "../../index"
import CheckBoxWithLabel from "../CheckBoxWithLabel"
import ButtonEdit from "../ButtonEdit"
import {UPDATE_STATUS} from "../../GraphQl/Muatation"



function ItemRow ({item}) {

  const todoContext= useContext(TodoContext)
  const [updateTodo, {  error: mutationError }] = useMutation(UPDATE_STATUS);
  const name = item.isDone ?  <span className="text-success">{ item.title }</span>  :item.title  
  let type = "" 

  const updateTask=({ isCompleted =item.isDone})=>{
        var update=  isCompleted ? false : true
        updateTodo({ variables: { id:item.id , isDone: update} })       
        } 

 if (item.type === "Communication" || item.type === "Marketing")
        {
        type= <span> <CheckBoxWithLabel   onChange={()=> todoContext.todoDispatch({type:"businessChange"})}
                title ={item.type} />
              </span>
        }else{
            type=  <span > {item.type}</span>  
        } 
 if(mutationError)  return <Redirect to="NotFound"/>

return (<tr>
                <td>{name}</td>
                <td>{type} </td>
                <td>{moment(item.createdAt).format("lll")}</td>
                <td> 
                    <Link to={"/details/"+item.id}>
                           <button className="btn btn-primary  btn-sm"> Consulter </button>
                    </Link> 
                </td>
                <td> <ButtonEdit isCompleted={item.isDone} onClick={updateTask}/></td>       
        </tr>)
  }

  export default ItemRow