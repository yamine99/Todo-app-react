import React from 'react';
import { Link } from 'react-router-dom';






const NotFound = () => (

            <div className="container">

                  <h1>Erreur 404- Cette page n'existe pas !</h1>
                  <Link to="/">   Todo list </Link>
                  
            </div>

);

export default NotFound;