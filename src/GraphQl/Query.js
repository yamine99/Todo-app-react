import {  gql } from "@apollo/client";

export const GRAPHQL_API="http://localhost:4000/"

export const LOAD_TODOS =gql`
    query GetTodoList($filters: TodoFiltersInput, $orderBy: Ordering){
        getTodoList(filters:$filters, orderBy: $orderBy){
            id,
            createdAt,
            type,
            isDone,
            text,
            title
          }
        }
       `



export const LOAD_BY_ID=gql`
 query GetTodoById($id:ID!){
  getTodoById(id:$id)
  {  id,
    createdAt,
    type,
    isDone,
    text,
    title }

  }`       
       
export const LOAD_TODO_TYPES=gql`
        {
        __type(name: "TodoTypes") {
                enumValues {
                  name
                }
              }
          
            }
            `

export const LOAD_ORDERING=gql`
    {
        __type(name: "Ordering") {
            enumValues {
              name
            }
          }
        }
        `