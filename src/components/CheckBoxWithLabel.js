

import {useContext} from "react"    
import {TodoContext} from "../index"


function CheckBoxWithLabel({title,onChange}){
   


  const todoContext= useContext(TodoContext)

  var isBusiness = todoContext.todoState.isBusiness
  var isDoneOnly = todoContext.todoState.isDoneOnly  
  
  var res = title ==="C'est fait"?isDoneOnly:isBusiness
    
  return (
             <div className="col">
                  <label>{title}</label>
                  <input type="checkbox"  className="form-check-input"
                  checked={res}  onChange={onChange}/>      
              </div>)
          }



export default  CheckBoxWithLabel