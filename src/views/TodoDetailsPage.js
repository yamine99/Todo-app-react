import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,  useParams} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import React from 'react';
import 'moment/locale/fr';
import moment from "moment";

import {LOAD_BY_ID } from '../GraphQl/Query'



function TodoDetailsPage() {

      let { id } = useParams();
      const { loading, data, error } = useQuery(LOAD_BY_ID, {variables:{ id: id },})

      if (loading) return <p>Loading ...</p>
      if (error) return <p>Element non trouvé</p>
      
      
      let item =data.getTodoById

        
      return (
          <div className="container">

                  <h1 className= "text-center" >Détails</h1>
                  <h2 className= "text-center" >Titre: {item.title}</h2>
                  <h4 >Type: {item.type}</h4>

                  <ul className="container">
                        <li>État:  {item.isDone ? "Déja effectué" :"Non effectuer"}</li>
                        <li>Date de création: {moment(item.createdAt).format("lll")}</li>
                        <li>id:{item.id}</li>
                        <li>Description: {item.text}</li>
                  </ul>

                  <Link to={"/"}><button className="btn btn-secondary" > Retour </button></Link>
          </div>
      );
}



export default TodoDetailsPage;
