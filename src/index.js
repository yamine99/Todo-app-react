import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React,{createContext, useReducer} from 'react';
import ReactDOM from 'react-dom';

import TodoPage from './views/TodoPage';
import TodoDetailsPage from './views/TodoDetailsPage';
import NotFound from './views/NotFoundPage';
import { todoReducer, initialState } from "./reducers/todoReducer";


export const TodoContext =  createContext()

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});


function App(){

        const [todo, dispatch] = useReducer(todoReducer,initialState );
        return ( 
              <ApolloProvider client={client}>
                  <TodoContext.Provider  value={{todoState:todo, todoDispatch: dispatch}}>
                      <Router>
                          <Switch> 
                                <Route exact path="/"> <TodoPage/> </Route>
                                <Route path="/details/:id"> <TodoDetailsPage/></Route >
                                <Route> <NotFound />  </Route>
                          </Switch>
                      </Router>
                  </TodoContext.Provider>
              </ApolloProvider>
          )
}

export default App


ReactDOM.render(<App/>, document.getElementById('root'));
