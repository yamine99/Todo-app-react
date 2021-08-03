import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';
import 'moment/locale/fr';
import moment from "moment";
import { Redirect } from "react-router-dom";

import ButtonEdit from "../ButtonEdit"
import {UPDATE_STATUS} from "../../GraphQl/Muatation"



function ItemRow ({item})
               {

                     const [updateTodo, {  error: mutationError }] = useMutation(UPDATE_STATUS);
                     const name = item.isDone ?  <span className="text-success"> { item.title } </span>  : item.title  

                     const updateTask=({ isCompleted = item.isDone })=>
                            {
                            var update=  isCompleted ? false : true
                            updateTodo({ variables: { id:item.id , isDone: update } })       
                            } 
                            
                     
                     if(mutationError)  return <Redirect to= "NotFound"/>

                     return (<tr className="col">
                            
                                   <td>{name}</td>
                                   <td>{item.type} </td>
                                   <td>{ moment( item.createdAt ).format("lll") }</td>
                                   <td> <Link className="btn btn-primary  btn-sm" to={"/details/"+item.id}> 
                                                 Consulter                      
                                   </Link>  </td>
                            
                                   <td> <ButtonEdit isCompleted={item.isDone} onClick={updateTask}/></td>       
                            </tr>)
              }

  export default ItemRow