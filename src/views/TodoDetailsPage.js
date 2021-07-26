import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,  useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import React,{useContext} from 'react';
import 'moment/locale/fr';
import moment from "moment";
import {TodoContext} from "../index"
import {LOAD_BY_ID } from '../GraphQl/Query'



function TodoDetailsPage() {

  let { id } = useParams();

  const todoContext= useContext(TodoContext)
  const { loading, data, error } = useQuery(LOAD_BY_ID, {variables:{ id: id },})

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Element non trouvé</p>
  
  
  let item =data.getTodoById

  const back=()=> todoContext.todoDispatch({type:"back"}) 
    
  return (
      <div className="container center row">
        
              <h1 className= "bg-primary" >Titre: {item.title}</h1>
              <h4 >Type: {item.type}</h4>
              <ul>
                    <li>État:  {item.isDone ? "Déja effectué" :"Non effectuer"}</li>
                    <li>Date de création: {moment(item.createdAt).format("lll")}</li>
                    <li>id:{item.id}</li>
                    <li>Description: {item.text}</li>
              </ul>

              <Link to={"/"}><button className="btn btn-secondary" onClick={back}> Retour </button></Link>
      </div>
  );
}



export default TodoDetailsPage;
