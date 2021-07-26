import { BsCheck, BsX } from "react-icons/bs";

function ButtonEdit({isCompleted, onClick}){
       
        var icon = isCompleted ? <BsCheck/>: <BsX/>
        var style = isCompleted ? " btn  btn-success" : "btn btn-danger"

        return (
             <div className="col">
                  <button  className={style} onClick={onClick}>   {icon}  </button>
              </div>)
          }



export default  ButtonEdit