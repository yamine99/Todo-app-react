import {  gql } from "@apollo/client";

export const GRAPHQL_API="http://localhost:4000/"



export const UPDATE_STATUS =gql`
mutation UpdateTodoStatusById($id: ID! $isDone: Boolean!){
    updateTodoStatusById(id:$id, isDone: $isDone){
            id,           
            isDone

          }
        }
       `

